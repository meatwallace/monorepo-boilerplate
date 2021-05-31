"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGreeting = void 0;
const apollo_server_1 = require("apollo-server");
function getGreeting() {
    return { greeting: 'Hey world!' };
}
exports.getGreeting = getGreeting;
getGreeting.typeDef = apollo_server_1.gql `
  type Query {
    getGreeting: GetGreetingResponse
  }

  type GetGreetingResponse {
    greeting: String!
  }
`;
