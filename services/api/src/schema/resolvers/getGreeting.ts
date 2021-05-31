import { gql } from 'apollo-server';

export function getGreeting() {
  return { greeting: 'Hey world!' };
}

getGreeting.typeDef = gql`
  type Query {
    getGreeting: GetGreetingResponse
  }

  type GetGreetingResponse {
    greeting: String!
  }
`;
