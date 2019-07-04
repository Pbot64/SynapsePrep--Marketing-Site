// Node Modules
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Local Components
import Header from "../components/Header";
import Panel from "../components/Panel";
import CardCustom from "../components/CardCustom";
import Footer from "../components/Footer";

// Local Assets
import blog1 from "../static/images/blog1.svg";

//  Style Overrides
const styles = theme => ({
  root: {
    backgroundImage: `url(${blog1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainImgContainer: {
    height: "300px",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "400px"
    },
    [theme.breakpoints.up("md")]: {
      height: "500px"
    }
  },
  main: {},
  titleContainer: {
    marginTop: "-60px",
    zIndex: "2",
    marginBottom: "50px"
  },
  title: {
    fontWeight: "500"
  },
  subtitle: {
    fontWeight: "300"
  },
  paragraph: {
    fontSize: "1.1875rem",
    lineHeight: "1.7"
  }
});

const Blog = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.root}>
        <Header />

        <Panel>
          <Grid item className={classes.mainImgContainer} />
        </Panel>
      </Grid>

      <Panel className={classes.main}>
        <Grid item xs={12} sm={9} md={7} className={classes.titleContainer}>
          <CardCustom padding visible>
            <Typography variant="h4" className={classes.title} gutterBottom>
              SAT Tips and Tricks
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              First Blog SubTitle afadhuhd ashduahsuh asdauh uhausd aduhusdhua
            </Typography>
          </CardCustom>
        </Grid>

        <Grid container item justify="space-between">
          <Grid item xs={9}>
            <Typography variant="body1" className={classes.paragraph}>
              You'll find a lot of old school tutoring services advertising that
              their tutors previously attended Ivy Leauge schools. Like you need
              to attend Harvard to explain 9th grade algebra. First you really
              gotta wonder why these people are tutoring. Second, that doesn't
              make them any good at explaining things. It's all on the test of
              life I thoroughly enjoyed my time tutoring at Huntington Learning
              Center. I am very good at breaking down complex concepts into
              simpler illustrations and analogies that can be more easily
              digested. Additionally, I have a knack for developing creative
              mnemonic devices to help students solidify difficult material. I
              ensure that my students are comfortable with the present concept
              before progressing forward. I have learned not to take my
              student's own assurances, but instead, allow them to demonstrate
              their competency. My tireless patience and steady
              encouragement--careful to avoid a patronizing tone--is also key to
              my successful teaching strategy. I feel confident that my academic
              versatility and personable nature will allow me to become an
              immediate contributor to the Victory Step Education. I look
              forward to discussing my qualifications and candidacy in further
              detail. Thank you for your consideration, Paul Barber
            </Typography>
          </Grid>
          <Grid item>
            <CardCustom padding>Subscribe for more content</CardCustom>
          </Grid>
        </Grid>
      </Panel>

      <Footer />
    </React.Fragment>
  );
};

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blog);
