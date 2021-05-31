import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from '../schema';

export function setupServer(context = {}) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => context,
  });

  return server;
}
