import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { useGreeting } from './useGreeting';
import { server } from '../mocks/server';
import { graphql } from 'msw';

type Props = {
  children: React.ReactNode;
};

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return (props: Props) => (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

it('returns a greeting when loaded', async () => {
  const { result, waitFor } = renderHook(() => useGreeting(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => result.current.isSuccess);

  expect.assertions(1);

  expect(result.current.data).toStrictEqual({ greeting: 'Hey world!' });
});

it('returns an error object if the server returns an error', async () => {
  const errors = [{ message: 'Server Error', errorType: 'ServerError' }];

  server.use(
    graphql.query('GetGreeting', (req, res, ctx) => {
      return res(ctx.errors(errors));
    }),
  );

  const { result, waitFor } = renderHook(() => useGreeting(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => result.current.isError);

  expect.assertions(1);

  expect(result.current.error?.response.errors).toStrictEqual(errors);
});
