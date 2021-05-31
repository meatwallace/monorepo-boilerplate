# monorepo-boilerplate

a TypeScript-centric monorepo using Yarn v2 workspaces and PnP. it's early
days - right now it's just something to kick off personal projects with that
I'll refine later.

quick overview of what's currently in the box:

- Yarn v2 - workspaces, PnP
- create-react-app based frontend
- GraphQL backend using `apollo-server`

i'll add a more detailed overview of the stack & toolchain later.

## goals

- preconfigure as many project types and tools as possible to minimize time to
  productivity
- keep things up to date - this is the place to work out painful issues with the
  bleeding edge before working with it elsewhere

## on the horizons

- ci/cd pipeline w/ GitHub actions
- dockerized development
- e2e testing infrastructure
- database - PostgreSQL?
- database integration testing (memory?)
- api snapshot testing
- react-native

## inspiration / reference

- [thinkmill's monorepo guide](https://monorepo.guide) and their
  [starter](https://github.com/thinkmill/monorepo-starter)
