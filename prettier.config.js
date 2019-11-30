module.exports = {
  singleQuote: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  trailingComma: "all",
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.json",
      options: {
        singleQuote: false,
        parser: "json"
      }
    },
    {
      files: ["*.ts", "*tsx"],
      options: {
        parser: "typescript"
      }
    }
  ]
};
