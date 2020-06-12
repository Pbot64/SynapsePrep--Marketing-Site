// Node Modules
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Local Components
import Header from "../components/Header";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import Program from "../components/Program";
import Banner from "../components/Banner";

// Local Assets
import underConstruction from "../static/images/under-construction.svg";

//  Style Overrides
const styles = theme => ({
  root: {},
  mainContainer: {
    margin: "50px 0px"
  },
  title: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "20px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px"
    }
  },
  programAdWrapper: {
    marginTop: "20px",
    display: "block",
    [theme.breakpoints.up(1100)]: {
      display: "flex",
      flexDirection: "row"
    }
  },
  checkoutPanel: {
    marginBottom: "100px"
  }
});

const Act = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Banner course="ACT" />
      <Grid item className={classes.root}>
        <Header backgroundColor="blueToPurple" />
        <Panel padding>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item xs={12} sm={8} md={6} className={classes.mainContainer}>
              <img src={underConstruction} alt="under construction" />
              <Typography
                variant="overline"
                color="textPrimary"
                component="h5"
                gutterBottom
                align="center"
                className={classes.title}
              >
                Under Construction
              </Typography>
              <Typography variant="body1" color="textPrimary" gutterBottom>
                We are currently updating our ACT curriculum. However, the 'new'
                SAT is basically a copy of the ACT, so studying for the SAT will
                also prepare you for the ACT!
              </Typography>
            </Grid>
          </Grid>
        </Panel>
      </Grid>
      <Panel className={classes.checkoutPanel}>
        <Typography variant="h3" gutterBottom align="center">
          Which One Works For You?
        </Typography>
        <Grid item container className={classes.programAdWrapper}>
          <Program
            left
            highlights={[
              "Dozens of videos",
              "Hundreds of practice problems",
              "Free copy of our SAT prep book"
            ]}
            subtitle="Online Course"
            externalLink="https://app.synapseprep.net/register"
            showexpectedPoints
            expectedPoints="100+"
            button
            buttonText="Start for Free"
            fullHeight
          />

          <Program
            middle
            ribbon
            highlights={[
              "Most comprehensive program",
              "Tailored to meet student needs",
              "Powerful diagnostic and progress reports",
              "Includes full access to online SAT course"
            ]}
            subtitle="1-on-1 Tutor"
            to="/checkout?course=ACT&program=1-on-1&link=/act"
            as="/checkout/ACT/1-on-1"
            showexpectedPoints
            expectedPoints="226+"
            button
            buttonText="Choose a Plan"
          />

          <Program
            right
            highlights={[
              "Have every key strategy before test day",
              "Lively and inspiring",
              "Copy of our SAT prep book included"
            ]}
            subtitle="Bootcamp"
            to="/checkout?course=ACT&program=Bootcamp&link=/act"
            as="/checkout/ACT/Bootcamp"
            showexpectedPoints
            expectedPoints="120+"
            button
            buttonText="See Pricing"
            fullHeight
          />
        </Grid>
      </Panel>
      <Footer />
    </React.Fragment>
  );
};

Act.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Act);
