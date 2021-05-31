"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setupServer_1 = require("../../test-utils/setupServer");
function setupTest() {
    const server = setupServer_1.setupServer();
    return server;
}
const GET_GREETING_QUERY = `
  query GetGreeting {
    getGreeting {
      greeting
    }
  }
`;
it('returns a chipper greeting', async () => {
    const server = setupTest();
    const response = await server.executeOperation({
        query: GET_GREETING_QUERY,
    });
    expect(response).toStrictEqual(expect.objectContaining({
        data: {
            getGreeting: { greeting: 'Hey world!' },
        },
    }));
});
