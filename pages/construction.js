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

// Local Assets
import underConstruction from "../static/images/under-construction.svg";

//  Style Overrides
const styles = theme => ({
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
  }
});

const Construction = props => {
  const { classes } = props;
  return (
    <React.Fragment>
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
              <Typography
                variant="body1"
                color="textPrimary"
                align="center"
                gutterBottom
              >
                We are currently making improvements to this page. Please come
                back soon!
              </Typography>
            </Grid>
          </Grid>
        </Panel>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

Construction.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Construction);
