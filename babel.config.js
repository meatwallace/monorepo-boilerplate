// TODO: swap to explicit babel configuration with workspace specific overrides.
module.exports = {
  presets: [
    // using create-react-app's preset to get this off the ground.
    ['react-app', { flow: false, typescript: true }],

    // [('@babel/preset-env', { targets: { node: 'current' } })],
    // '@babel/preset-react',
    // '@babel/preset-typescript',
  ],
};
