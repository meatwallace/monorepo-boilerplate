"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.resolvers = void 0;
const resolvers_1 = require("./resolvers");
// rexport our resolvers in the correct shape for apollo-server
exports.resolvers = {
    Query: resolvers_1.Query,
};
var type_defs_1 = require("./type-defs");
Object.defineProperty(exports, "typeDefs", { enumerable: true, get: function () { return type_defs_1.typeDefs; } });
