// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// Local Components
import CardCustom from "../components/CardCustom";
import ButtonCustom from "../components/ButtonCustom";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import assessment from "@material-ui/icons/Assessment";

import School from "@material-ui/icons/School";

// Local Assets
import * as colors from "./common/colors";

//  Style Overrides
const styles = theme => ({
  programContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    maxWidth: "450px",
    marginBottom: "60px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: "16px"
    }
  },
  cardfullHeight: {
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  card: {
    display: "flex",
    flexDirection: "column"
  },
  cardMiddle: {
    display: "flex",
    flexDirection: "column",
    height: "inherit",
    [theme.breakpoints.up("md")]: {
      height: "110%"
    }
  },
  programTitleContainerLeft: {
    ...colors.blueToTurquoise1
  },
  programTitleContainerMiddle: {
    ...colors.blueToTurquoise2
  },
  programTitleContainerRight: {
    ...colors.blueToTurquoise3
  },
  programTitle: {
    padding: "15px 10px"
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "space-evenly",
    padding: "20px"
  },
  programHighlights: {
    "& p": {
      "&:before": {
        content: "' \\2714'",
        color: theme.palette.primary.main,
        marginRight: "10px"
      }
    }
  },
  ribbonContainer: {
    height: "150px",
    overflow: "hidden",
    position: "absolute",
    right: "-5px",
    top: "-6px",
    width: "100px",
    zIndex: "1",
    [theme.breakpoints.up("md")]: {
      right: "11px",
      top: "10px"
    }
  },
  ribbonSides: {
    content: '""',
    position: "absolute",
    top: "100%",
    "z-index": "-1",
    border: "3px solid #17ab5d",
    "border-bottom-width": "0"
  },
  ribbon: {
    backgroundColor: theme.palette.primary.main,
    fontSize: "9px",
    position: "absolute",
    right: "-20px",
    top: "23px",
    transform: "rotate(40deg)",
    width: "125px",
    "&:before": {
      extend: "ribbonSides",
      left: "0",
      "border-right-width": "0"
    },
    "&:after": {
      extend: "ribbonSides",
      right: "0",
      "border-left-width": "0"
    }
  },
  buttonContainer: {
    paddingTop: "10px"
  },
  buttonContainerBorder: {
    paddingTop: "10px",
    borderTop: "1px solid rgba(32, 156, 255, 1)"
  },
  programButton: {
    marginTop: "10px"
  },
  blueLine: {
    display: "block",
    borderTop: "1px solid rgba(32, 156, 255, 1)"
  },
  turquoiseLine: {
    display: "block",
    borderTop: "1px solid rgba(104, 224, 207, 1)"
  },
  connector: {
    padding: "0px 10px",
    flex: "1 1 auto"
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "500"
  },
  paragraph: {
    borderBottom: "1px solid rgba(32, 156, 255, 1)",
    marginBottom: "20px",
    paddingBottom: "10px",
    paddingTop: "5px"
  },
  price: {
    backgroundImage: "linear-gradient(224deg, #209cff 0%, #68e0cf 100%)",
    color: "transparent",
    "-webkit-background-clip": "text",
    backgroundClip: "text"
  },
  points: {
    color: theme.palette.primary.main
  },
  bottomContainer: {
    paddingTop: "20px",
    marginTop: "20px",
    paddingBottom: "20px",
    borderTop: "1px solid rgba(32, 156, 255, 1)",
    borderBottom: "1px solid rgba(32, 156, 255, 1)"
  },
  noPaddingTop: {
    paddingTop: "0px"
  }
});

const Program = props => {
  const {
    classes,
    setProgramHandler,
    button,
    clickable,
    highlights,
    subtitle,
    checkout,
    title,
    borderBottom,
    to,
    as,
    buttonText,
    sessions,
    sessionLength,
    showPrice,
    left,
    noPaddingTop,
    middle,
    right,
    ribbon,
    price,
    summary,
    summaryText,
    buttonBorderTop,
    showexpectedPoints,
    expectedPoints,
    fullHeight
  } = props;

  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sm={7}
        md
        className={classNames(classes.programContainer, {
          [classes.noPaddingTop]: noPaddingTop
        })}
      >
        {ribbon && (
          <div className={classes.ribbonContainer}>
            <div className={classes.ribbon}>
              <Typography
                variant="body1"
                color="inherit"
                component="p"
                align="center"
              >
                Best Value
              </Typography>
            </div>
          </div>
        )}
        <CardCustom
          className={
            middle
              ? classes.cardMiddle
              : fullHeight
              ? classes.cardfullHeight
              : classes.card
          }
          title={title}
          borderBottom
          clickable={clickable}
        >
          <Grid
            item
            className={
              left
                ? classes.programTitleContainerLeft
                : middle
                ? classes.programTitleContainerMiddle
                : right
                ? classes.programTitleContainerRight
                : null
            }
          >
            <Typography
              align="center"
              variant="overline"
              color="inherit"
              component="h5"
              className={classes.programTitle}
            >
              {subtitle}
            </Typography>
          </Grid>
          <Grid item className={classes.inner}>
            <Grid item>
              {summary && (
                <Grid item>
                  <Grid item container alignItems="center">
                    <Typography
                      variant="h5"
                      component="h5"
                      className={classes.summaryTitle}
                    >
                      Summary
                    </Typography>
                    <Grid item className={classes.connector}>
                      <span className={classes.blueLine} />
                    </Grid>
                  </Grid>
                  <Typography
                    variant="body1"
                    component="h5"
                    className={classes.paragraph}
                  >
                    {summaryText}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Grid item className={classes.programHighlights}>
                  {highlights.map(highlight => {
                    return (
                      <React.Fragment key={highlight}>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          component="p"
                          paragraph
                          className={classes.highlight}
                        >
                          {highlight}
                        </Typography>
                      </React.Fragment>
                    );
                  })}
                </Grid>

                {showPrice && (
                  <React.Fragment>
                    <Typography
                      variant="subtitle2"
                      color="textPrimary"
                      component="h5"
                      gutterBottom
                      className={classes.subtitle}
                    >
                      Pricing
                    </Typography>
                    <Grid
                      item
                      container
                      alignItems="center"
                      className={classes.sessionsBackground}
                      justify="space-between"
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="h5"
                        gutterBottom
                        className={classes.sessions}
                      >
                        Sessions
                      </Typography>
                      <Grid item className={classes.connector}>
                        <span className={classes.turquoiseLine} />
                      </Grid>
                      <Typography variant="body1" component="h5">
                        {sessions}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      className={classes.sessionsBackground}
                      justify="space-between"
                    >
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="h5"
                        gutterBottom
                        className={classes.sessions}
                      >
                        Session Length
                      </Typography>
                      <Grid item className={classes.connector}>
                        <span className={classes.turquoiseLine} />
                      </Grid>
                      <Typography variant="body1" component="p">
                        {sessionLength}
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      container
                      justify="center"
                      direction="column"
                      alignItems="center"
                      className={classes.bottomContainer}
                    >
                      <Typography
                        variant="h3"
                        component="h5"
                        className={classes.price}
                      >
                        ${price}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="h5"
                        className={classes.price}
                      >
                        per session
                      </Typography>
                    </Grid>
                  </React.Fragment>
                )}

                {showexpectedPoints && (
                  <Grid
                    item
                    container
                    justify="center"
                    direction="column"
                    alignItems="center"
                    className={classes.bottomContainer}
                  >
                    <Typography
                      variant="h3"
                      component="h5"
                      className={classes.points}
                    >
                      {expectedPoints}
                    </Typography>
                    <Typography variant="body2" component="h5">
                      Expected point increase
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
            {button && (
              <Grid
                item
                container
                justify="center"
                className={
                  buttonBorderTop
                    ? classes.buttonContainerBorder
                    : classes.buttonContainer
                }
              >
                <Link href={to} as={as}>
                  <ButtonCustom
                    limitWidth
                    fullWidth
                    className={classes.programButton}
                    onClick={() => {
                      if (checkout) {
                        setProgramHandler(subtitle, sessions, price);
                      }
                      return;
                    }}
                  >
                    {buttonText}
                  </ButtonCustom>
                </Link>
              </Grid>
            )}
          </Grid>
        </CardCustom>
      </Grid>
    </React.Fragment>
  );
};

Program.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Program);
