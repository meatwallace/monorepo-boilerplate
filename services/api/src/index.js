"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const env_1 = require("./configs/env");
const server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: schema_1.resolvers });
server.listen({ port: env_1.env.PORT }).then(({ url }) => {
    console.log(`Server is ready at ${url}`);
});
