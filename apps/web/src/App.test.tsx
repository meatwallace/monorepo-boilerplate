import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { graphql } from 'msw';
import { App } from './App';
import { server } from './mocks/server';

function setupTest() {
  render(<App />);
}

it('displays a loading message', () => {
  setupTest();

  const loading = screen.getByText('Loading!');

  expect.assertions(1);

  expect(loading).toBeInTheDocument();
});

it('displays a greeting from the server once loaded', async () => {
  setupTest();

  const greeting = await screen.findByText('Hey world!');

  expect.assertions(1);

  expect(greeting).toBeInTheDocument();
});

it('displays an error message if the server returns an error', async () => {
  server.use(
    graphql.query('GetGreeting', (req, res, ctx) => {
      // TODO: extract server error response to reusable mock
      return res(
        ctx.errors([{ message: 'Server error', errorType: 'ServerError' }]),
      );
    }),
  );

  setupTest();

  const error = await screen.findByText('Oh no...');

  expect.assertions(1);

  expect(error).toBeInTheDocument();
});

it('displays an error message if the network request fails', async () => {
  server.use(
    graphql.query('GetGreeting', (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );

  setupTest();

  const error = await screen.findByText('Oh no...');

  expect.assertions(1);

  expect(error).toBeInTheDocument();
});
