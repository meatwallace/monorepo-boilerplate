"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../schema");
function setupServer(context = {}) {
    const server = new apollo_server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        context: () => context,
    });
    return server;
}
exports.setupServer = setupServer;
