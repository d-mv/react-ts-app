const path = require('path');

const parentDir = path.resolve(__dirname, '..');
console.log(parentDir);

module.exports = {
  injectChanges: false,
  files: ['./**/*.{html,htm,css,js,png}'],
  watchOptions: { ignored: 'node_modules' },
  server: { baseDir: path.join(parentDir, 'dist') },
};
