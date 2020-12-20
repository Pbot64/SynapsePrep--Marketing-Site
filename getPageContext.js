import { SheetsRegistry } from "jss";
import {
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from "@material-ui/core/styles";
import { create } from "jss";
import extend from "jss-extend";

import * as colors from "./components/common/colors";
// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00f08b",
      main: "#00BF6F"
    },
    text: {
      primary: "#343e4d",
      secondary: "#7a92a5"
    },
    pinkToYellow: {
      ...colors.pinkToYellow
    },
    blueToPurple: {
      ...colors.blueToPurple
    },
    blueToGreen: {
      ...colors.blueToGreen
    },
    whiteToLightBlue: {
      ...colors.whiteToLightBlue
    },
    pinkToPurple: {
      ...colors.pinkToPurple
    },
    blueToTurquoise: {
      ...colors.blueToTurquoise
    },
    lightBlue: "#e8f5ff"
  },
  typography: {
    useNextVariants: true,
    overline: {
      fontFamily: "goodtimesrg, sans-serif",
      fontSize: "1.15rem",
      letterSpacing: 2,
      lineHeight: "1.3"
    },
    caption: {
      textAlign: "left"
    },
    h4: {
      fontWeight: "500"
    },
    h5: {
      fontWeight: "500",
      fontSize: "1.5rem"
    },
    h2: {
      fontWeight: "500"
    },
    subtitle1: {
      lineHeight: 1.5,
      fontSize: "18px",
      fontWeight: "400"
    },
    subtitle2: {
      lineHeight: 1.5,
      fontSize: "18px",
      fontWeight: "400"
    }
  }
});
const jss = create({ plugins: [...jssPreset().plugins, extend()] });
function createPageContext() {
  return {
    theme,
    jss,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
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
