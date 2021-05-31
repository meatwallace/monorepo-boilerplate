import '@testing-library/jest-dom';
import 'jest-extended';

// TODO: remove setImmediate polyfill once msw/jest are friends again
// source: https://github.com/mswjs/interceptors/issues/123
import 'setimmediate';

import { server } from './mocks/server';

// setup and teardown for our service mocks using msw
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
