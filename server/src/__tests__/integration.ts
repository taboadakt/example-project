import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
// import nock from 'nock';

import { constructTestServer } from './__utils';

const GET_FLOWERS = gql`
  query {
    flowers {
      name
    }
  }
`;

const GET_FAMILIES = gql`
  query {
    families {
      name
      flowers {
        name
      }
    }
  }
`;

describe('Queries', () => {
  let server;
  beforeAll(async () => {
    server = await constructTestServer();
  });

  it('fetches a list of flowers', async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: GET_FLOWERS });
    expect(res).toMatchSnapshot();
  });

  it('fetches a list of families', async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: GET_FAMILIES });
    expect(res).toMatchSnapshot();
  });
});
