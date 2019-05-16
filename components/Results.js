// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';

// Material UI Components
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Local Components
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';
import Panel from '../components/Panel';

// Local Assets
import chevronRight from '../assets/images/chevron-right.svg';
import chevronLeft from '../assets/images/chevron-left.svg';

//  Style Overrides
const styles = theme => ({
  resultsSatTitle: {
    marginLeft: '80px',
    marginRight: '80px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
  },
  resultsSatAfter: {
    background: '#7336df',
    padding: '20px',
    paddingLeft: '30px',
    paddingRight: '10px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '50px',
    },
  },
  resultsSatBefore: {
    position: 'relative',
    background: '#4fa3eb',
    padding: '20px',
    paddingLeft: '10px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '20px',
    },
    '&:after': {
      content: '""',
      width: '0',
      height: '0',
      borderTop: '40px solid #7336df',
      borderBottom: '36px solid #7336df',
      borderLeft: '40px solid #7336df',
      position: 'absolute',
      right: '-20px',
      top: '0px',
      zIndex: '1',
      borderRightColor: '#4fa3eb',
      borderLeftColor: '#4fa3eb',
      [theme.breakpoints.up('sm')]: {
        borderTop: '42px solid #7336df',
        borderBottom: '40px solid #7336df',
      },
      [theme.breakpoints.up('md')]: {
        borderTop: '48px solid #7336df',
      },
    },
  },

  resultsSatTopContainer: {
    padding: '10px',
    [theme.breakpoints.up('sm')]: {
      padding: '20px',
    },
    '& h3': {
      color: '#00BF6F',
      fontWeight: 500,
    },
    '& p': {
      fontSize: '8px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '11px',
      },
    },
  },
  resultsSatBottomContainer: {
    color: 'white',
    '& h3': {
      fontWeight: 500,
    },
  },
  arrow: {
    width: '20px',
  },
  arrowButtonLeft: {
    border: '13x solid rgba(0, 0, 0, 0.23)',
    height: '63px',
    borderRadius: '40px',
    position: 'absolute',
    left: '10px',
    [theme.breakpoints.up('md')]: {
      left: '80px',
    },
  },
  arrowButtonRight: {
    border: '13x solid rgba(0, 0, 0, 0.23)',
    height: '63px',
    borderRadius: '100px',
    position: 'absolute',
    right: '10px',
    [theme.breakpoints.up('md')]: {
      right: '80px',
    },
  },
  titleContainer: {
    position: 'relative',
  },
  resultsText: {
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
  },
  resultsWrapper: {
    marginTop: '20px',
  },
});

const Results = props => {
  const { classes, title, difference, before, after, stepForward, stepBack, step } = props;

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Grid
            item
            container
            className={classes.titleContainer}
            justify="center"
            alignItems="center"
          >
            {step > 1 && (
              <ButtonCustom color="white" onClick={stepBack} className={classes.arrowButtonLeft}>
                <img src={chevronLeft} alt="left arrow" className={classes.arrow} />
              </ButtonCustom>
            )}
            <Typography
              variant="overline"
              color="inherit"
              component="h3"
              className={classes.resultsSatTitle}
              align="center"
            >
              {title}
            </Typography>
            {step < 3 && (
              <ButtonCustom
                color="white"
                onClick={stepForward}
                className={classes.arrowButtonRight}
              >
                <img src={chevronRight} alt="right arrow" className={classes.arrow} />
              </ButtonCustom>
            )}
          </Grid>
          <CardCustom className={classes.resultsWrapper}>
            <Grid
              item
              container
              justify="space-between"
              alignItems="flex-end"
              className={classes.resultsSatTopContainer}
            >
              <Grid item>
                <Typography variant="h3" component="h3" color="inherit">
                  <CountUp end={difference} useEasing={false} duration={1} />+
                </Typography>
                <Typography variant="subtitle1" component="h4" color="textPrimary">
                  Point Increase
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={6}
                direction="column"
                justify="flex-end"
                alignItems="flex-end"
              >
                <Typography
                  variant="body2"
                  component="p"
                  color="textPrimary"
                  align="right"
                  className={classes.averageScore}
                >
                  Average Score Increase from 32 week program
                </Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.resultsSatBottomContainer}>
              <Grid item container xs={7} className={classes.resultsSatBefore}>
                <Grid item container justify="space-between">
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    Before
                  </Typography>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    Score
                  </Typography>
                </Grid>
                <Grid item container justify="space-between">
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    Synapse
                  </Typography>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    <CountUp end={before} useEasing={false} duration={1} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={5} className={classes.resultsSatAfter}>
                <Grid item container justify="space-between">
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    After
                  </Typography>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    Score
                  </Typography>
                </Grid>
                <Grid item container justify="space-between">
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    Synapse
                  </Typography>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="inherit"
                    className={classes.resultsText}
                  >
                    <CountUp end={after} useEasing={false} duration={1} />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardCustom>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
