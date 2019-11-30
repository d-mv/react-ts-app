// const TSDocgenPlugin = require('react-docgen-typescript-loader');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            printWidth: 100,
            singleQuote: false,
          },
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
        },
      },
    ],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new TSDocgenPlugin());
  return config;
};
