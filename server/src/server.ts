import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schema/schema';
import { addStoreSchema, createStore, dbLoadTestData } from './utils';
import db from './data-sources/db';

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
  dataSources: {
    db;
  };
}

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
createStore()
  .then(addStoreSchema)
  .then(dbLoadTestData)
  .then((store) => {
    const dataSources = (): Context['dataSources'] => {
      return {
        db: new db({ store })
      };
    };

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources
    });

    if (process.env.NODE_ENV !== 'test') {
      apolloServer.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
      });
    }
  })
  .catch((error) => {
    console.log('Error with data source, server not started.'); // tslint:disable-line no-console
    console.log(error); // tslint:disable-line no-console
  });
