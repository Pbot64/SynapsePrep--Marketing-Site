import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { create } from 'jss';
import extend from 'jss-extend';
import './static/css/index.css';

import * as colors from './assets/jss/colors';
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: '#343e4d',
      secondary: '#FFFFFF',
    },
    pinkToYellow: {
      ...colors.pinkToYellow,
    },
    blueToPurple: {
      ...colors.blueToPurple,
    },
    blueToGreen: {
      ...colors.blueToGreen,
    },
    whiteToLightBlue: {
      ...colors.whiteToLightBlue,
    },
    pinkToPurple: {
      ...colors.pinkToPurple,
    },
  },
  typography: {
    useNextVariants: true,
    overline: {
      fontFamily: 'Good Times',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 18,
      letterSpacing: 2,
      lineHeight: '1.3',
    },
    caption: {
      textAlign: 'left',
    },
    h4: {
      fontWeight: '500',
    },
    h2: {
      fontWeight: '500',
    },
    subtitle2: {
      lineHeight: 1.5,
      fontSize: '18px',
      fontWeight: '400',
    },
  },
});
const jss = create({ plugins: [...jssPreset().plugins, extend()] });
console.log(theme);
function createPageContext() {
  return {
    theme,
    jss,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
