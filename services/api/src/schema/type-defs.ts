import { Query } from './resolvers';

// bit of magic to assemble our colocated schema definitions
export const typeDefs = [...Object.values(Query)].map(
  (resolver) => resolver.typeDef,
);
