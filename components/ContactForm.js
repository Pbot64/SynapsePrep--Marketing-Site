// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

// Local Components
import CardCustom from './CardCustom';
import ButtonCustom from './ButtonCustom';
import Panel from './Panel';

// Local Assets

//  Style Overrides
const styles = theme => ({
  root: {},
  label: {
    color: 'grey',
  },
  email: {
    marginRight: '0px',
    marginBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0px',
      marginRight: '15px',
    },
  },
  number: {
    marginBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0px',
    },
  },
  submit: {
    alignSelf: 'stretch',
    marginTop: '10px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px',
    },
  },
  formContainer: {
    paddingLeft: '0px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '20px',
    },
  },
  titleFirst: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  helperTextRoot: {
    color: 'grey',
    backgroundColor: '#FFFFFF',
  },
  inputsContainer: {
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class ContactForm extends Component {
  state = {
    email: '',
    tel: '',
    submitted: false,
    errors: {},
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      email: this.state.email,
      tel: this.state.tel,
    };

    axios
      .post('/api/contact', contactData)
      .then(() => {
        this.setState({ submitted: true });
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { errors, submitted } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Panel backgroundColor="lightBlue" padding>
          <Grid item container justify="space-evenly" alignItems="center">
            <Grid item>
              <Typography
                variant="h4"
                color="textPrimary"
                component="p"
                align="center"
                className={classes.titleFirst}
              >
                Have Questions?
              </Typography>
              <Typography variant="h4" color="textPrimary" component="p" paragraph>
                We Have Answers!
              </Typography>
            </Grid>
            {!submitted && (
              <Grid item>
                <Grid container className={classes.formContainer}>
                  <form onSubmit={this.handleSubmit} className={classes.form}>
                    <Grid
                      container
                      xs={8}
                      sm
                      direction="column"
                      alignItems="baseline"
                      alignItems="center"
                    >
                      <Grid item container className={classes.inputsContainer}>
                        <TextField
                          error={Boolean(errors.email)}
                          classes={{ root: classes.root }}
                          id="outlined-adornment-password"
                          className={classes.email}
                          variant="outlined"
                          type="text"
                          label="Email"
                          helperText={errors.email}
                          value={this.state.email}
                          onChange={this.handleChange('email')}
                          InputProps={{
                            classes: {
                              root: classes.helperTextRoot,
                            },
                          }}
                        />

                        <TextField
                          error={Boolean(errors.tel)}
                          id="outlined-adornment-password2"
                          classes={{ root: classes.root }}
                          className={classes.number}
                          variant="outlined"
                          type="text"
                          label="Phone Number"
                          value={this.state.tel}
                          helperText={errors.tel}
                          onChange={this.handleChange('tel')}
                          InputProps={{
                            classes: {
                              root: classes.helperTextRoot,
                            },
                          }}
                        />
                      </Grid>
                      <FormControlLabel
                        control={<Checkbox value="yes" color="primary" />}
                        label="Send me tips, trends, freebies, updates and offers."
                      />
                      <ButtonCustom
                        color="white"
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                      >
                        Submit
                      </ButtonCustom>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            )}
            {submitted && (
              <Grid item xs>
                <Typography variant="h4" color="textPrimary" component="p" paragraph>
                  We'll Contact You!
                </Typography>
              </Grid>
            )}
          </Grid>
        </Panel>
      </React.Fragment>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
