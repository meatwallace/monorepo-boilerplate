import { graphql } from 'msw';

export const handlers = [
  graphql.query('GetGreeting', (req, res, ctx) => {
    return res(ctx.data({ getGreeting: { greeting: 'Hey world!' } }));
  }),
];
