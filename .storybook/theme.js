import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#000444',
  colorSecondary: '#444444',

  // UI
  appBg: '#fcfcfc',
  appContentBg: 'white',
  appBorderColor: '#dedede',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto Condensed, Helvetica Neue, Arial Unicode MS, sans-serif',
  fontCode: 'sans',

  // Text colors
  textColor: '#000444',
  textInverseColor: '#fcfcfc',

  // Toolbar default and active colors
  barTextColor: '#444444',
  barSelectedColor: '#444444',
  barBg: '#dedede',

  // Form colors
  inputBg: '#fcfcfc',
  inputBorder: '#dedede',
  inputTextColor: '#fcfcfc',
  inputBorderRadius: 4,

  brandTitle: 'UI',
  brandUrl: 'https://google.com',
  brandImage: '',
});