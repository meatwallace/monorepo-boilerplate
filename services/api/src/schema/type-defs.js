"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const resolvers_1 = require("./resolvers");
// bit of magic to assemble our colocated schema definitions
exports.typeDefs = [...Object.values(resolvers_1.Query)].map((resolver) => resolver.typeDef);
