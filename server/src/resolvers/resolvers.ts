export const resolvers = {
  Query: {
    family: (_, args, ctx) => ctx.dataSources.db.getFamily(args),
    families: (_, __, ctx) => ctx.dataSources.db.getFamilies(),
    flower: (_, args, ctx) => ctx.dataSources.db.getFlower(args),
    flowers: (_, __, ctx) => ctx.dataSources.db.getFlowers()
  },
  Mutation: {
    createFamily: (_, args, ctx) => ctx.dataSources.db.createFamily(args),
    createFlower: (_, args, ctx) => ctx.dataSources.db.createFlower(args)
  }
};
