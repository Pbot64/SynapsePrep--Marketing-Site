// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Local Components
import * as colors from "./common/colors";

// Local Assets

//  Style Overrides
const styles = theme => ({
  root: {
    position: "relative",
    maxWidth: "2000px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  inner: {
    maxWidth: "1200px",
    position: "relative",
    marginLeft: "auto",
    height: "100%",
    marginRight: "auto",
    "padding-left": "16px",
    "padding-right": "16px",
    [theme.breakpoints.up("sm")]: {
      "padding-left": "24px",
      "padding-right": "24px"
    }
  },
  noInnerPadding: {
    maxWidth: "2000px",
    "padding-left": "0px",
    "padding-right": "0px"
  },
  padding: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  pinkToYellow: {
    ...theme.palette.pinkToYellow
  },
  blueToPurple: {
    ...theme.palette.blueToPurple
  },
  pinkToPurple: {
    ...theme.palette.pinkToPurple
  },
  whiteToLightBlue: {
    ...theme.palette.whiteToLightBlue
  },
  blueToTurquoise: {
    ...theme.palette.blueToTurquoise
  },
  darkGrey: {
    backgroundColor: "#2D3739",
    color: "white"
  },
  whiteSmoke: {
    backgroundColor: "whitesmoke"
  },
  skewed: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    backfaceVisibility: "hidden",
    overflow: "hidden",
    transform: "skewY(-7deg) translateY(-100px)"
  },
  forward: {
    zIndex: "2"
  },
  lightBlue: {
    backgroundColor: theme.palette.lightBlue
  },
  panelSmallIcon: {
    width: "80px"
  },
  panelTitle: {
    marginTop: "50px",
    marginBottom: "10px",
    fontSize: "50px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "60px"
    }
  },
  panelSubtitle: {
    marginTop: "20px",
    fontSize: "12px"
  },
  panelHeader: {
    maxWidth: "600px",
    marginBottom: "60px"
  },
  white: {
    color: "white"
  },
  noMargin: {
    marginLeft: "0px",
    marginRight: "0px",
    maxWidth: "inherit"
  },
  fullHeight: {
    height: "100%"
  },
  backgroundWhite: {
    backgroundColor: "white"
  },
  paddingTop: {
    paddingTop: "60px"
  },
  hidden: {
    overflow: "hidden"
  }
});

const Panel = props => {
  const {
    classes,
    children,
    backgroundColor,
    padding,
    className,
    skewed,
    skewedBackgroundColor,
    forward,
    noInnerPadding,
    header,
    title,
    subtitle,
    body,
    smallIcon,
    color,
    noMargin,
    fullHeight,
    paddingTop,
    hidden
  } = props;

  return (
    <Grid
      className={classNames(
        classes.root,
        {
          [classes.white]: color === "white",
          [classes.backgroundWhite]: backgroundColor === "white",
          [classes.pinkToYellow]: backgroundColor === "pinkToYellow",
          [classes.blueToPurple]: backgroundColor === "blueToPurple",
          [classes.pinkToPurple]: backgroundColor === "pinkToPurple",
          [classes.blueToTurquoise]: backgroundColor === "blueToTurquoise",
          [classes.whiteToLightBlue]: backgroundColor === "whiteToLightBlue",
          [classes.darkGrey]: backgroundColor === "darkGrey",
          [classes.lightBlue]: backgroundColor === "lightBlue",
          [classes.whiteSmoke]: backgroundColor === "whiteSmoke",
          [classes.forward]: forward,
          [classes.noMargin]: noMargin,
          [classes.paddingTop]: paddingTop,
          [classes.hidden]: hidden
        },
        className
      )}
    >
      {skewed && (
        <Grid
          item
          className={classNames(classes.skewed, {
            [classes.pinkToYellow]: skewedBackgroundColor === "pinkToYellow",
            [classes.pinkToPurple]: skewedBackgroundColor === "pinkToPurple",
            [classes.blueToPurple]: skewedBackgroundColor === "blueToPurple",
            [classes.backgroundWhite]: skewedBackgroundColor === "white"
          })}
        />
      )}
      <Grid
        item
        className={classNames(classes.inner, {
          [classes.padding]: padding,
          [classes.noInnerPadding]: noInnerPadding,
          [classes.fullHeight]: fullHeight
        })}
      >
        {header && (
          <Grid container justify="center">
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              className={classes.panelHeader}
            >
              <img
                className={classes.panelSmallIcon}
                src={smallIcon}
                alt="smallIcon"
              />
              <Typography
                color="inherit"
                variant="overline"
                component="h5"
                align="center"
                className={classes.panelSubtitle}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="h2"
                align="center"
                color="inherit"
                className={classes.panelTitle}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="inherit"
                paragraph
              >
                {body}
              </Typography>
            </Grid>
          </Grid>
        )}
        {children}
      </Grid>
    </Grid>
  );
};

Panel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Panel);
