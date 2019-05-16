// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local Components

// Material UI Components

// Local Assets

//  Style Overrides
const styles = theme => ({
  programsWrapper: {
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  programContainer: {
    maxWidth: '375px',
    padding: '0px',
    paddingBottom: '16px',
    [theme.breakpoints.up('md')]: {
      padding: '16px',
    },
  },
  programContainerMiddle: {
    maxWidth: '375px',
    padding: '0px',
    paddingBottom: '16px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: '16px',
    },
  },
  programContainerMiddleInteract: {
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-3px)',
    },
  },
  cardMiddle: {
    border: '2px solid #00BF6F',
  },
  cardMiddleInteract: {
    '&:hover': {
      transform: 'translateY(0px)',
      boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.3)',
    },
  },
  programTitleContainerLeft: {
    ...colors.blueToTurquoise1,
  },
  programTitleContainerMiddle: {
    ...colors.blueToTurquoise2,
  },
  programTitleContainerRight: {
    ...colors.blueToTurquoise3,
  },
  programTitle: {
    padding: '15px 10px',
  },
  programHighlightsContainer: {
    padding: '20px',
  },
  programHighlights: {
    '& h5': {
      textDecoration: 'underline',
    },
    '& p': {
      '&:before': {
        content: "' \\2714'",
        color: theme.palette.primary.main,
        marginRight: '10px',
      },
    },
  },
  ribbonContainer: {
    height: '150px',
    overflow: 'hidden',
    position: 'absolute',
    right: '-5px',
    top: '-6px',

    width: '100px',
    zIndex: '1',
    [theme.breakpoints.up('md')]: {
      right: '11px',
      top: '10px',
    },
  },
  ribbonSides: {
    content: '""',
    position: 'absolute',
    top: '100%',
    'z-index': '-1',
    border: '3px solid #17ab5d',
    'border-bottom-width': '0',
  },
  ribbon: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '9px',
    position: 'absolute',
    right: '-20px',
    top: '23px',
    transform: 'rotate(40deg)',
    width: '125px',
    '&:before': {
      extend: 'ribbonSides',
      left: '0',
      'border-right-width': '0',
    },
    '&:after': {
      extend: 'ribbonSides',
      right: '0',
      'border-left-width': '0',
    },
  },

  programButton: {
    margin: '10px 10px',
    marginBottom: '20px',
  },
});

const Program = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sm={7}
        md
        container
        className={classes.programContainer}
        onClick={programSelectHandler}
      >
        <CardCustom className={classes.card} clickable={clickable}>
          <Grid item className={classes.programTitleContainerLeft}>
            <Typography
              align="center"
              variant="overline"
              color="inherit"
              component="h5"
              className={classes.programTitle}
            >
              {subtitles[0]}
            </Typography>
          </Grid>
          <Grid item container className={classes.programHighlightsContainer}>
            <Grid item className={classes.programHighlights}>
              <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                Program Highlights
              </Typography>
              {highlights[0].map(highlight => {
                return (
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    {highlight}
                  </Typography>
                );
              })}
            </Grid>
            {button && (
              <Grid item container justify="center">
                <Link href="/">
                  <ButtonCustom color="green" className={classes.programAdButton}>
                    Start for free
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Program);
