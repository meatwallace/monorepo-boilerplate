import { useQuery } from 'react-query';
import { ClientError, gql, request } from 'graphql-request';
import { env } from '../configs/env';

type Response = {
  greeting: String;
};

export function useGreeting() {
  return useQuery<Response, ClientError>('greeting', fetchGreeting);
}

const QUERY = gql`
  query GetGreeting {
    getGreeting {
      greeting
    }
  }
`;

async function fetchGreeting() {
  const { getGreeting } = await request(env.REACT_APP_API_URL, QUERY);

  return getGreeting;
}
