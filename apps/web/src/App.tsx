import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Greeting } from './components/Greeting';
import { env } from './configs/env';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // we want to disable retries in our test env to keep thing simple.
      // otherwise, use 3 retries as a sane default.
      retry: env.isTest ? 0 : 3,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Greeting />
    </QueryClientProvider>
  );
}
