module.exports = {
  presets: ['@babel/preset-env', '@babel/typescript', '@babel/preset-react'],
  plugins: [
    'macros',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
