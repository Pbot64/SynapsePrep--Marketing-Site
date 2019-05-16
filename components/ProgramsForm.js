// Node Modules
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Local Components
import CardCustom from '../components/CardCustom';
import ButtonCustom from '../components/ButtonCustom';

// Local Assets
import * as colors from '../assets/jss/colors';

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
    margin: '50px 0px',
    maxWidth: '375px',
    padding: '0px',
    paddingBottom: '16px',
    [theme.breakpoints.up('md')]: {
      padding: '16px',
      margin: '0px 0px',
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

const ProgramsForm = props => {
  const { classes, programSelectHandler, button, clickable, highlights, title, subtitles } = props;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>
      <Grid container className={classes.programsWrapper}>
        <Grid
          item
          xs={12}
          sm={7}
          md
          container
          className={classes.programContainer}
          onClick={() => {
            programSelectHandler(subtitles[0], '$80 per 1.5 hr session');
          }}
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

        <Grid
          item
          xs={12}
          sm={7}
          md
          container
          className={classNames(classes.programContainerMiddle, {
            [classes.programContainerMiddleInteract]: clickable,
          })}
          onClick={() => {
            programSelectHandler(subtitles[1]);
          }}
        >
          <div className={classes.ribbonContainer}>
            <div className={classes.ribbon}>
              <Typography variant="body1" color="inherit" component="p" align="center">
                Best Value
              </Typography>
            </div>
          </div>
          <CardCustom
            className={classNames(classes.cardMiddle, {
              [classes.cardMiddleInteract]: clickable,
            })}
          >
            <Grid item className={classes.programTitleContainerMiddle}>
              <Typography
                align="center"
                variant="overline"
                color="inherit"
                component="h3"
                className={classes.programTitle}
              >
                {subtitles[1]}
              </Typography>
            </Grid>
            <Grid item className={classes.programHighlightsContainer}>
              <Grid item className={classes.programHighlights}>
                <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                  Program Highlights
                </Typography>
                {highlights[1].map(highlight => {
                  return (
                    <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                      {highlight}
                    </Typography>
                  );
                })}
              </Grid>
              {button && (
                <Grid item container justify="center">
                  <Link href="/checkout">
                    <ButtonCustom color="green" className={classes.programAdButton}>
                      See Pricing
                    </ButtonCustom>
                  </Link>
                </Grid>
              )}
            </Grid>
          </CardCustom>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md
          container
          className={classes.programContainer}
          onClick={() => {
            programSelectHandler(subtitles[2]);
          }}
        >
          <CardCustom className={classes.card} clickable={clickable}>
            <Grid item className={classes.programTitleContainerRight}>
              <Typography
                align="center"
                variant="overline"
                color="inherit"
                component="h3"
                className={classes.programTitle}
              >
                {subtitles[2]}
              </Typography>
            </Grid>
            <Grid item className={classes.programHighlightsContainer}>
              <Grid item className={classes.programHighlights}>
                <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                  Program Highlights
                </Typography>
                {highlights[2].map(highlight => {
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
                      Sign Up
                    </ButtonCustom>
                  </Link>
                </Grid>
              )}
            </Grid>
          </CardCustom>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

ProgramsForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgramsForm);
