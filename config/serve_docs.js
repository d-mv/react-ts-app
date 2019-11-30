const path = require('path');

const parentDir = path.resolve(__dirname, '..');

module.exports = {
  injectChanges: false,
  files: ['./**/*.{html,htm,css,js,png}'],
  watchOptions: { ignored: 'node_modules' },
  server: { baseDir: path.join(parentDir, 'docs') },
};
