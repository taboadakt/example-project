import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar DateTime

  input FamilyInput {
    name: String
  }

  input FlowerInput {
    name: String
    familyId: ID!
  }

  type Family {
    id: ID!
    name: String
    flowers: [Flower]
    createdAt: DateTime
  }

  type Flower {
    id: ID!
    name: String
    createdAt: DateTime
  }

  type Query {
    family(id: ID!): Family
    families: [Family]
    flower(id: ID!): Flower
    flowers: [Flower]
  }

  type Mutation {
    createFamily(family: FamilyInput!): Family
    createFlower(flower: FlowerInput!): Flower
  }
`;
