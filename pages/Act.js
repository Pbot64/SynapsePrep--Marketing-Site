// Node Modules
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Local Components
import Header from '../components/Header';
import Panel from '../components/Panel';
import Footer from '../components/Footer';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Local Assets
import underConstruction from '../assets/images/under-construction.svg';

//  Style Overrides
const styles = theme => ({
  root: {},
  mainContainer: {
    margin: '50px 0px',
  },
  title: {
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
  },
});

const Act = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.root}>
        <Header backgroundColor="blueToPurple" />
        <Panel padding>
          <Grid container justify="center" direction="column" alignItems="center">
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
              <Typography variant="subtitle1" color="textPrimary" component="h5" gutterBottom>
                We are currently updating our ACT curriculum. However, the 'new' SAT is basically a
                copy of the ACT, so studying for the SAT will also prepare you for the ACT!
              </Typography>
            </Grid>
          </Grid>
        </Panel>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

Act.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Act);
