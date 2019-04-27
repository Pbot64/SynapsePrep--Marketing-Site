// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Local Components
import * as colors from '../assets/jss/colors';

// Material UI Components
import Grid from '@material-ui/core/Grid';

// Local Assets

//  Style Overrides
const styles = theme => ({
  root: {
    position: 'relative',
    maxWidth: '2000px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inner: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    'padding-left': '16px',
    'padding-right': '16px',
    [theme.breakpoints.up('sm')]: {
      'padding-left': '24px',
      'padding-right': '24px',
    },
  },
  padding: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  pinkToYellow: {
    ...theme.palette.pinkToYellow,
  },
  blueToPurple: {
    ...theme.palette.blueToPurple,
  },
  pinkToPurple: {
    ...theme.palette.pinkToPurple,
  },
  whiteToLightBlue: {
    ...theme.palette.whiteToLightBlue,
  },
  skewed: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
    transform: 'skewY(-7deg) translateY(-100px)',
  },
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
  } = props;
  return (
    <Grid
      className={classNames(
        classes.root,
        {
          [classes.pinkToYellow]: backgroundColor === 'pinkToYellow',
          [classes.blueToPurple]: backgroundColor === 'blueToPurple',
          [classes.pinkToPurple]: backgroundColor === 'pinkToPurple',
          [classes.whiteToLightBlue]: backgroundColor === 'whiteToLightBlue',
        },
        className,
      )}
    >
      {skewed && (
        <Grid
          item
          className={classNames(classes.skewed, {
            [classes.pinkToYellow]: skewedBackgroundColor === 'pinkToYellow',
            [classes.pinkToPurple]: skewedBackgroundColor === 'pinkToPurple',
            [classes.blueToPurple]: skewedBackgroundColor === 'blueToPurple',
          })}
        />
      )}
      <Grid
        className={classNames(classes.inner, {
          [classes.padding]: padding,
        })}
      >
        {children}
      </Grid>
    </Grid>
  );
};

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
