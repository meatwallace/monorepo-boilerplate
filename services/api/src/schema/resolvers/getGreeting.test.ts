import { setupServer } from '../../test-utils/setupServer';

function setupTest() {
  const server = setupServer();

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

  expect(response).toStrictEqual(
    expect.objectContaining({
      data: {
        getGreeting: { greeting: 'Hey world!' },
      },
    }),
  );
});
