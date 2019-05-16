// Node Modules
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';

// Local Components
import Header from '../components/Header';
import Panel from '../components/Panel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Results from '../components/Results';
import CardCustom from '../components/CardCustom';
import ProgramsForm from '../components/ProgramsForm';
import ButtonCustom from '../components/ButtonCustom';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

// Local Assets
import mainGraphic from '../assets/images/sat-main-graphic.svg';
import ruler from '../assets/images/ruler.svg';
import curve from '../assets/images/curve.svg';
import triangle from '../assets/images/triangle-icon.svg';
import check from '../assets/images/check-icon.svg';
import online from '../assets/images/online-course.png';
import tutor from '../assets/images/1-on-1-tutoring.jpg';
import bootcamp from '../assets/images/bootcamp.png';
import * as colors from '../assets/jss/colors';

//  Style Overrides
const styles = theme => ({
  mainGraphic: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
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
      fontSize: '20px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
      },
    },
  },
  curve: {
    backgroundImage: `url(${curve})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom: '180px',
    paddingTop: '50px',
  },
  topRulerText: {
    padding: '0px 20px',
  },
  ruler: {
    display: 'block',
    maxWidth: '2000px',
    margin: '20px auto',
  },
  copyContainer: {
    marginTop: '40px',
    maxWidth: '670px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  copy: {
    marginBottom: '30px',
  },
  programsPanel: {
    marginBottom: '100px',
    marginTop: '250px',
    color: 'white',
    paddingBottom: '0px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '50px',
    },
  },
  programImg: {
    display: 'block',
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
    },
  },
  programContainerMiddle: {
    paddingLeft: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
      marginBottom: '0px',
    },
    '& h3': {
      marginBottom: '10px',
    },
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
  checkoutPanel: {
    marginBottom: '200px',
  },
  programImgContainer: {
    borderRadius: '10px',
  },
});

const Sat = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header backgroundColor="pinkToYellow" />

      <Panel padding className={classes.curve}>
        <Grid container justify="space-between">
          <Grid
            item
            container
            xs
            direction="column"
            justify="center"
            className={classes.mainTextContainer}
          >
            <Typography variant="h2" className={classes.panelTitle}>
              The SAT is a Joke
            </Typography>
            <Grid item>
              <Typography variant="h5">It doesn't measure intelligence.</Typography>
              <Typography variant="h5">It doesn't measure creativity.</Typography>
              <Typography variant="h5">It doesn't measure aptitude.</Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} className={classes.mainGraphic}>
            <img src={mainGraphic} alt="students with ideas" />
          </Grid>
        </Grid>
      </Panel>

      <Typography variant="h5" align="center" gutterBottom className={classes.topRulerText}>
        The only thing the SAT measures is
      </Typography>
      <img src={ruler} alt="ruler" className={classes.ruler} />

      <Panel>
        <Typography variant="h4" align="center">
          HOW GOOD YOU ARE AT TAKING IT!
        </Typography>
        <div className={classes.copyContainer}>
          <div>
            <Typography variant="subtitle2" className={classes.copy}>
              This is fantastic for you though! Huh...What...How? Because, you don't have to relearn
              4 years of high school to get a higher SAT score. In fact, you could dramatically
              improve your score <u>without doing a single practice problem.</u>
            </Typography>

            <Typography variant="subtitle2" className={classes.copy}>
              Unfortunately, the test prep industry seems to be competing over who can be the{' '}
              <strong>driest</strong>, <strong>boringest</strong> (look it up), and most{' '}
              <strong>complicated</strong>. We think test prep works best when it's{' '}
              <strong>simple</strong>, <strong>straight-forward</strong>, and (dare we say it) even{' '}
              <strong>fun</strong>!
            </Typography>
            <Typography variant="subtitle2" className={classes.copy}>
              And once you learn our strategies to defeat the SAT, you’ll have the tools to achieve
              your highest possible score.
            </Typography>
          </div>
        </div>
      </Panel>

      <Panel
        header
        smallIcon={check}
        title="Proven Results"
        subtitle="Higher Test Score Guaranteed*"
        body="Our programs work. If your SAT score doesn't improve by at least 100 points, then we'll give you your money back!"
      >
        <Results title="SAT" difference={226} before={1042} after={1268} />
      </Panel>

      <Panel
        color="white"
        skewedBackgroundColor="blueToPurple"
        skewed
        className={classes.programsPanel}
        header
        smallIcon={triangle}
        title="Our Programs"
        body="It doesn't measure intelligence. | It doesn't measure creativity. | It doesn't measure
       aptitude. The only thing it actually measures is...HOW GOOD YOU ARE"
      >
        <Grid item container justify="space-between" className={classes.programWrapper}>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              Online Course
            </Typography>
            <Typography variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ulla
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={online} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>

        <Grid item container justify="space-between" className={classes.programWrapperMiddle}>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={tutor} className={classes.programImg} />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainerMiddle}
          >
            <Typography variant="h4" color="inherit" component="h4">
              1-on-1 Tutoring
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
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              8 Hour Bootcamp
            </Typography>
            <Typography variant="body1" color="inherit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ulla
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={bootcamp} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>
      </Panel>
      <Panel className={classes.checkoutPanel}>
        <ProgramsForm
          title="Which One Works For You?"
          subtitles={['Online Course', '1-on-1 Tutor', 'Bootcamp']}
          highlights={[
            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],

            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],
            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],
          ]}
          clickable={false}
          button
        />
      </Panel>
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(styles)(Sat);
