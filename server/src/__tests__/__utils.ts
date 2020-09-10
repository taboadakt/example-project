import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { execute, toPromise } from 'apollo-link';

import { addStoreSchema, createStore, dbLoadTestData } from '../utils';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../schema/schema';
import { resolvers } from '../resolvers/resolvers';
import db from '../data-sources/db';
import { Context } from '../server';

module.exports.toPromise = toPromise;

/*
  Integration testing utils
 */
export const constructTestServer = async () => {
  const store = await createStore();
  const storeWithSchema = await addStoreSchema(store);
  const storeLoadedWithData = await dbLoadTestData(storeWithSchema);
  const dataSources = (): Context['dataSources'] => {
    return {
      db: new db({ store: storeLoadedWithData })
    };
  };
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
  });
};

/**
 * e2e Testing Utils
 */

export const startTestServer = async (server) => {
  const httpServer = await server.listen({ port: 0 });

  const link = new HttpLink({
    uri: `http://localhost:${httpServer.port}`,
    fetch
  });

  const executeOperation = ({ query, variables = {} }) =>
    execute(link, { query, variables });

  return {
    link,
    stop: () => httpServer.server.close(),
    graphql: executeOperation
  };
};
