import '@testing-library/jest-dom';
import 'jest-extended';

// TODO: remove setImmediate polyfill once msw/jest are friends again
// source: https://github.com/mswjs/interceptors/issues/123
import 'setimmediate';

import { setLogger } from 'react-query';
import { server } from './mocks/server';

// disable logging for react-query as it causes our test to fail
setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});

// setup and teardown for our service mocks using msw
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
