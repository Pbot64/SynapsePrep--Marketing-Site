// Node Modules
import { withStyles } from '@material-ui/core/styles';

// Local Components
import Link from 'next/link';
import Header from '../components/Header';
import Panel from '../components/Panel';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/MyLayout';

// Local Assets
import mainSatGraphic from '../assets/images/sat-main-graphic.svg';
import ruler from '../assets/images/ruler.svg';
import curve from '../assets/images/curve.svg';
import triangle from '../assets/images/triangle-icon.svg';
import online from '../assets/images/online-course.png';
import CardCustom from '../components/CardCustom';
import ButtonCustom from '../components/ButtonCustom';

//  Style Overrides
const styles = theme => ({
  mainSatGraphic: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  title: {
    marginBottom: '40px',
  },
  mainTextContainer: {
    paddingRight: '0px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      paddingRight: '30px',
    },
    '& h2': {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
    '& h5': {
      lineHeight: 3,
    },
  },
  background: {
    backgroundImage: `url(${curve})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom: '180px',
    paddingTop: '50px',
  },
  ruler: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  copyContainer: {
    marginTop: '100px',
    maxWidth: '670px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainParagraph: {
    marginBottom: '30px',
  },
  Panel3: {
    marginTop: '250px',
    color: 'white',
    paddingBottom: '50px',
    marginBottom: '100px',
  },
  triangle: {
    width: '80px',
  },
  panelHeader: {
    maxWidth: '600px',
    marginBottom: '50px',
  },
  panelTitle: {
    marginTop: '50px',
    marginBottom: '10px',
  },
  online: {
    width: '100%',
  },
  programContainer: {
    paddingRight: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '30px',
      marginBottom: '0px',
    },
    '& h3': {
      marginBottom: '10px',
      fontSize: '25px',
    },
  },
  programContainerMiddle: {
    paddingLeft: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
      marginBottom: '0px',
    },
    '& h3': { marginBottom: '10px', fontSize: '25px' },
  },
  programWrapperMiddle: {
    marginTop: '40px',
    marginBottom: '40px',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  programWrapper: {
    flexDirection: 'column',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  panel4: {
    height: '800px',
  },
  card: { overflow: 'hidden' },
  programAdTitleContainer: {
    color: 'white',
    ...theme.palette.blueToPurple,
  },
  programAdTitleMiddle: {
    fontSize: '20px',
    margin: '15px 5px',
  },
  programAdTitle: {
    fontSize: '20px',
    margin: '15px 10px',
  },

  programAdWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  programHighlightsContainer: {
    padding: '20px',
  },
  programAdButton: {
    margin: '10px 10px',
  },
  programHighlights: {
    '& h5': {
      fontWeight: '500',
      marginBottom: '20px',
    },
    '& p': {
      '&:before': {
        content: "' \\2714'",
        color: 'green',
        fontSize: '10px',
        marginRight: '10px',
        padding: '0px',
        position: 'relative',
        top: '-2px',
      },
    },
  },
  programAdContainer: {
    padding: '16px',
  },
});

const Sat = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header backgroundColor="pinkToYellow" />

      <Panel padding className={classes.background}>
        <Grid container justify="space-between">
          <Grid
            item
            container
            xs
            direction="column"
            justify="center"
            className={classes.mainTextContainer}
          >
            <Typography variant="h2" color="textPrimary" className={classes.title}>
              The SAT is a Joke
            </Typography>
            <Typography variant="h5" color="textPrimary">
              It doesn't measure intelligence
            </Typography>
            <Typography variant="h5" color="textPrimary">
              It doesn't measure creativity
            </Typography>
            <Typography variant="h5" color="textPrimary">
              It doesn't measure aptitude
            </Typography>
          </Grid>

          <Grid item xs={6} className={classes.mainSatGraphic}>
            <img src={mainSatGraphic} alt="students with ideas" />
          </Grid>
        </Grid>
      </Panel>

      <Typography variant="h5" color="textPrimary" align="center">
        The only thing the SAT measures is
      </Typography>
      <img class="ruler" src={ruler} alt="ruler" className={classes.ruler} />

      <Panel>
        <Typography variant="h4" color="textPrimary" align="center">
          HOW GOOD YOU ARE AT TAKING IT!
        </Typography>
        <div className={classes.copyContainer}>
          <div class="sat-paragraph">
            <Typography variant="subtitle2" color="textPrimary" className={classes.mainParagraph}>
              This is fantastic for you though! Huh...What...How? Because, you don't have to relearn
              4 years of high school to get a higher SAT score. In fact, you could dramatically
              improve your score <u>without doing a single practice problem.</u>
            </Typography>

            <Typography variant="subtitle2" color="textPrimary" className={classes.mainParagraph}>
              Unfortunately, the test prep industry seems to be competing over who can be the{' '}
              <strong>driest</strong>, <strong>boringest</strong> (look it up), and most{' '}
              <strong>complicated</strong>. We think test prep works best when it's{' '}
              <strong>simple</strong>, <strong>straight-forward</strong>, and (dare we say it) even{' '}
              <strong>fun</strong>!
            </Typography>
            <Typography variant="subtitle2" color="textPrimary" className={classes.mainParagraph}>
              And once you learn our strategies to defeat the SAT, you’ll have the tools to achieve
              your highest possible score.
            </Typography>
          </div>
        </div>
      </Panel>

      <Panel skewedBackgroundColor="blueToPurple" skewed className={classes.Panel3}>
        <div class="panel">
          <div class="panel-background panel-skewed dark-blue-light-blue-gradient-waves" />
          <Grid container justify="center">
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              className={classes.panelHeader}
            >
              <img class={classes.triangle} src={triangle} alt="triangle icon" />
              <Typography
                variant="h2"
                color="inherit"
                align="center"
                className={classes.panelTitle}
              >
                Our Programs
              </Typography>
              <Typography variant="body1" color="inherit" align="center">
                It doesn't measure intelligence. | It doesn't measure creativity. | It doesn't
                measure aptitude. The only thing it actually measures is...HOW GOOD YOU ARE
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="space-between" className={classes.programWrapper}>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              container
              direction="column"
              justify="center"
              className={classes.programContainer}
            >
              <Typography variant="overline" color="inherit" component="h3">
                Online Course
              </Typography>
              <Typography variant="body1" color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ulla
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
              <img src={online} className={classes.online} />
            </Grid>
          </Grid>

          <Grid item container justify="space-between" className={classes.programWrapperMiddle}>
            <Grid item xs={12} sm={10} md={6}>
              <img src={online} className={classes.online} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              container
              direction="column"
              justify="center"
              className={classes.programContainerMiddle}
            >
              <Typography variant="overline" color="inherit" component="h3">
                Live Instruction
              </Typography>
              <Typography variant="body1" color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ulla
              </Typography>
            </Grid>
          </Grid>

          <Grid item container justify="space-between" className={classes.programWrapper}>
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              container
              direction="column"
              justify="center"
              className={classes.programContainer}
            >
              <Typography variant="overline" color="inherit" component="h3">
                Bootcamps
              </Typography>
              <Typography variant="body1" color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ulla
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
              <img src={online} className={classes.online} />
            </Grid>
          </Grid>
        </div>
      </Panel>
      <Panel className={classes.panel4}>
        <Grid container justify="center">
          <Typography variant="h2" color="textPrimary" component="h2" gutterBottom>
            Which One Works For You?
          </Typography>
        </Grid>

        <Grid container justify="space-between" className={classes.programAdWrapper}>
          <Grid
            item
            xs={10}
            sm={7}
            md
            container
            direction="column"
            className={classes.programAdContainer}
          >
            <CardCustom className={classes.card}>
              <Grid item container className={classes.programAdTitleContainer} justify="center">
                <Typography
                  variant="overline"
                  color="inherit"
                  component="h3"
                  className={classes.programAdTitle}
                >
                  Online Course
                </Typography>
              </Grid>
              <Grid item container justify="center" className={classes.programHighlightsContainer}>
                <Grid className={classes.programHighlights}>
                  <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                    Program Highlights
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Full access to 40+ online video lessons
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Hundreds of online practice problems
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Access to SAT Prep Book
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justify="center" className={classes.programAdTitleContainer}>
                <ButtonCustom className={classes.programAdButton}>Start For Free</ButtonCustom>
              </Grid>
            </CardCustom>
          </Grid>
          <Grid
            item
            xs={10}
            sm={7}
            md
            container
            direction="column"
            className={classes.programAdContainer}
          >
            <CardCustom className={classes.card}>
              <Grid item container className={classes.programAdTitleContainer} justify="center">
                <Typography
                  variant="overline"
                  color="inherit"
                  component="h3"
                  className={classes.programAdTitleMiddle}
                >
                  Live Instruction
                </Typography>
              </Grid>
              <Grid item container justify="center" className={classes.programHighlightsContainer}>
                <Grid className={classes.programHighlights}>
                  <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                    Program Highlights
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Full access to 40+ online video lessons
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Hundreds of online practice problems
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Access to SAT Prep Book
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justify="center" className={classes.programAdTitleContainer}>
                <ButtonCustom className={classes.programAdButton}>Enroll Now</ButtonCustom>
              </Grid>
            </CardCustom>
          </Grid>
          <Grid
            item
            xs={10}
            sm={7}
            md
            container
            direction="column"
            className={classes.programAdContainer}
          >
            <CardCustom className={classes.card}>
              <Grid item container className={classes.programAdTitleContainer} justify="center">
                <Typography
                  variant="overline"
                  color="inherit"
                  component="h3"
                  className={classes.programAdTitle}
                >
                  Bootcamp
                </Typography>
              </Grid>
              <Grid item container justify="center" className={classes.programHighlightsContainer}>
                <Grid className={classes.programHighlights}>
                  <Typography variant="h5" color="textPrimary" component="h5" gutterBottom>
                    Program Highlights
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Full access to 40+ online video lessons
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Hundreds of online practice problems
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" component="p" paragraph>
                    Access to SAT Prep Book
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justify="center" className={classes.programAdTitleContainer}>
                <ButtonCustom className={classes.programAdButton}>Sign up</ButtonCustom>
              </Grid>
            </CardCustom>
          </Grid>
        </Grid>
        <div class="contact-form-container-background--light-blue flex-row-center-cross-center">
          <h3>Got Questions?</h3>
        </div>
      </Panel>
    </React.Fragment>
  );
};

Sat.getInitialProps = async props => {
  return {};
};

export default withStyles(styles)(Sat);
