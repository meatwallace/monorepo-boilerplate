module.exports = {
  // using a function here we only run typechecking once rather than per file
  '**/*.ts?(x)': () => 'yarn tsc --noEmit',

  '*.{ts,tsx}': 'yarn test --bail --findRelatedTests',
  '*.{js,ts,tsx}': ['yarn prettier --write', 'yarn eslint --cache --fix'],
  '*.{css,md}': 'yarn prettier --write',
};
