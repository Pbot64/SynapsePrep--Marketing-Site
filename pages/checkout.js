// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import axios from 'axios';

// Local Components
import Panel from '../components/Panel';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Review from '../components/Review';
import ProgramsForm from '../components/ProgramsForm';
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';

// Material UI Components
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Local Assets

const styles = theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '2000px',
  },
  headerPanelRoot: {
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    maxWidth: '2000px',
  },
  main: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '250px',
    maxWidth: '1100px',
  },
  mainPanel: {
    marginLeft: '0px',
    marginRight: '0px',
    flexGrow: '1',
  },
  locationWrapper: {
    height: '100%',
  },
  returnButton: {
    marginBottom: '80px',
  },
  layout: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    alignSelf: 'baseline',
  },

  locationOptionContainer1: {
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationOptionContainer2: {
    cursor: 'pointer',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationQuestionWrapper: {
    zIndex: '1',
  },
  locationQuestionContainer: {
    alignItems: 'center',
    display: 'block',
    padding: '30px 15px',
    [theme.breakpoints.up('sm')]: {
      padding: '40px 20px',
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      padding: '60px 60px',
    },
  },
  locationOption: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.7',
    },
  },
  locationOption: {
    fontWeight: '300',
    cursor: 'pointer',
    fontSize: '2rem',
    '&:hover': {
      opacity: '0.7',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  locationOption2: {
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '2rem',
    '&:hover': {
      opacity: '0.7',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  locationQuestion: {
    fontSize: '1.525rem',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '0px',
    fontWeight: '400',
    marginTop: '20px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '143px',
      marginLeft: '-123px',

      paddingRight: '143px',
    },
  },
  locationQuestionText: {
    padding: '0px 20px',
  },
});

const steps = ['Personal details', 'Payment details', 'Review your order'];

class Checkout extends Component {
  state = {
    formStep: 2,
    activeStep: 1,
    locationSelected: false,
    programSelected: false,
    formTitle: '',
    price: '',
    prevStep: 1,
    zip: '',
    errors: {},
    submitted: false,
    location: 'local',
  };

  handleNext = jumpToStep => {
    const { activeStep } = this.state;
    if (jumpToStep) {
      this.setState({
        activeStep: jumpToStep,
      });
    } else {
      this.setState({
        activeStep: activeStep + 1,
      });
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleNextForm = () => {
    this.setState(state => ({
      formStep: state.formStep + 1,
    }));
  };

  handleBackForm = () => {
    this.setState(state => ({
      formStep: state.formStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log('prevState before added to class state:', prevState.activeStep);
    if (prevState.activeStep <= this.state.prevStep) {
      this.setState({
        prevStep: prevState.activeStep,
      });
    }
    return;
  }

  handleSelectLocation = () => {
    this.setState({
      locationSelected: true,
      programSelected: false,
    });
  };

  programSelectHandler = (currentFormTitle, currentPrice) => {
    window.scrollTo(0, 0);
    this.handleNext();
    this.setState({
      formTitle: currentFormTitle,
      price: currentPrice,
    });
  };

  handleZipSubmit = () => {
    console.log(this.state.location);
    const zipData = {
      zip: this.state.zip,
    };

    axios
      .post('/api/zip', zipData)
      .then(res => {
        if (res.data == 'local') {
          console.log('hello');
          this.handleNext();
          this.setState({
            errors: {},
          });
        } else {
          this.setState({
            location: 'distant',
            errors: {},
          });
        }
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  handleChange = event => {
    this.setState({
      zip: event.target.value,
    });
  };

  render() {
    const { classes, name } = this.props;
    const {
      activeStep,
      programSelected,
      locationSelected,
      formTitle,
      formStep,
      price,
      prevStep,
      errors,
      submitted,
      location,
    } = this.state;
    const test = activeStep <= 1 ? { root: classes.root } : null;

    const firstPage = (
      <Grid item container xs>
        <Grid
          item
          container
          xs={6}
          className={classes.locationOptionContainer1}
          onClick={() => {
            this.handleNext();
          }}
        >
          <Grid item>
            <Typography variant="h3" align="center" className={classes.locationOption}>
              In-person
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
          onClick={() => {
            this.handleNext(2);
          }}
        >
          <CardCustom className={classes.locationOptionContainer2} square>
            <Typography variant="h3" className={classes.locationOption2}>
              Online
            </Typography>
          </CardCustom>
        </Grid>
      </Grid>
    );

    const secondPage = (
      <Grid item container>
        {location == 'distant' && (
          <Grid item>
            <Typography variant="h4" align="center" className={classes.locationQuestion}>
              Sorry we only offer Online tutoring services in your area.
            </Typography>
            <ButtonCustom
              color="white"
              variant="contained"
              onClick={() => {
                this.handleNext();
              }}
              className={classes.submit}
            >
              Continue to Online
            </ButtonCustom>
          </Grid>
        )}
        {location == 'local' && (
          <div>
            <Typography variant="subtitle1">
              {`Enter your zip to see if our ${name} programs are offered in your area`}
            </Typography>
            <Grid item container justifyContent="center">
              <form className={classes.form}>
                <Grid item container>
                  <TextField
                    error={Boolean(errors.zip)}
                    helperText={errors.zip}
                    value={this.state.zip}
                    onChange={this.handleChange}
                    variant="outlined"
                    id="zip"
                    name="zip"
                    label="Zip Code"
                    fullWidth
                    autoComplete="postalCode"
                  />

                  <ButtonCustom
                    color="white"
                    variant="contained"
                    className={classes.submit}
                    onClick={this.handleZipSubmit}
                  >
                    Continue
                  </ButtonCustom>
                </Grid>
              </form>
            </Grid>
          </div>
        )}
      </Grid>
    );

    return (
      <React.Fragment>
        <div className={activeStep <= 1 ? classes.root : null}>
          <Header backgroundColor="blueToTurquoise" classes={{ root: classes.headerPanelRoot }} />
          {activeStep <= 1 && (
            <Panel noInnerPadding noMargin fullHeight className={classes.mainPanel}>
              <Grid container direction="column" className={classes.locationWrapper}>
                <Grid item className={classes.locationQuestionWrapper}>
                  <CardCustom className={classes.locationQuestionContainer} square>
                    <Grid item>
                      {activeStep == 0 && (
                        <Link href="/">
                          <ButtonCustom hasArrowLeft className={classes.returnHomeButton}>
                            Back
                          </ButtonCustom>
                        </Link>
                      )}
                      {activeStep > 0 && (
                        <ButtonCustom
                          hasArrowLeft
                          className={classes.handleBack}
                          onClick={this.handleBack}
                        >
                          Back
                        </ButtonCustom>
                      )}
                    </Grid>

                    <Grid item xs className={classes.locationQuestionText}>
                      {activeStep == 0 && (
                        <Typography
                          variant="h5"
                          align="center"
                          className={classes.locationQuestion}
                        >
                          How would you'd like to be tutored?
                        </Typography>
                      )}
                      {activeStep == 1 && (
                        <Typography
                          variant="h5"
                          align="center"
                          className={classes.locationQuestion}
                        >
                          {`Let's see if ${name} programs are offered in your area`}
                        </Typography>
                      )}
                    </Grid>
                  </CardCustom>
                </Grid>

                {(() => {
                  switch (activeStep) {
                    case 1:
                      return secondPage;
                    default:
                      return firstPage;
                  }
                })()}
              </Grid>
            </Panel>
          )}
        </div>

        {activeStep == 2 && (
          <Panel padding>
            <div className={classes.main}>
              {prevStep == 0 && (
                <ButtonCustom
                  hasArrowLeft
                  className={classes.returnButton}
                  onClick={this.handleReset}
                >
                  Back
                </ButtonCustom>
              )}
              {console.log('prevStep stored in state:', prevStep)}

              <ProgramsForm
                programSelectHandler={this.programSelectHandler}
                title={`Select a ${name} program`}
                subtitles={['14-Hour', 'Premiere', '32-Hour ']}
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
                clickable
              />
            </div>
          </Panel>
        )}

        {activeStep == 3 && (
          <Panel padding>
            <div className={classes.main}>
              <Grid item xs={12} sm={10} md={7} className={classes.layout}>
                <CardCustom className={classes.paper}>
                  <Typography variant="h5" align="center">
                    Purchase {formTitle} {name} Program
                  </Typography>
                  <Stepper activeStep={formStep} className={classes.stepper}>
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <React.Fragment>
                    {formStep === steps.length ? (
                      <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                          Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                          Your order number is #2001539. We have emailed your order confirmation,
                          and will send you an update when your order has shipped.
                        </Typography>

                        <Link href="/">
                          <Grid item>
                            <ButtonCustom hasArrowLeft className={classes.returnHomeButton}>
                              Return
                            </ButtonCustom>
                          </Grid>
                        </Link>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {(() => {
                          switch (formStep) {
                            case 0:
                              return <AddressForm />;
                            case 1:
                              return <PaymentForm />;
                            case 2:
                              return <Review name={name} price={price} />;
                            default:
                              return null;
                          }
                        })()}
                        <div className={classes.buttons}>
                          {formStep !== 0 && (
                            <Button onClick={this.handleBackForm} className={classes.button}>
                              Back
                            </Button>
                          )}
                          {formStep == 0 && (
                            <Button onClick={this.handleBack} className={classes.button}>
                              Back
                            </Button>
                          )}
                          <ButtonCustom
                            variant="contained"
                            onClick={this.handleNextForm}
                            className={classes.button}
                          >
                            {formStep === steps.length - 1 ? 'Place order' : 'Next'}
                          </ButtonCustom>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                </CardCustom>
              </Grid>
            </div>
          </Panel>
        )}

        <Footer />
      </React.Fragment>
    );
  }
}

Checkout.getInitialProps = async ({ query }) => {
  return { name: query.name };
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
