import 'dotenv/config';

import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './schema';
import { env } from './configs/env';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: env.PORT }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
