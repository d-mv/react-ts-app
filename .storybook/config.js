import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme';

addParameters({
  options: {
    theme,
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Storybook',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: '#',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: false,
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false, // true by default
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: false, // true by default
  },
});

// Globally in your .storybook/config.js, or alternatively, per-chapter
// addDecorator(
//   withInfo({
//     styles: {
//       header: {
//         h1: {
//           marginRight: '20px',
//           fontSize: '25px',
//           display: 'inline',
//         },
//         body: {
//           paddingTop: 0,
//           paddingBottom: 0,
//         },
//         h2: {
//           display: 'inline',
//           color: '#999',
//         },
//       },
//       infoBody: {
//         backgroundColor: '#eee',
//         padding: '0px 5px',
//         lineHeight: '2',
//       },
//     },
//     inline: true,
//     source: false,
//   }),
// );

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
