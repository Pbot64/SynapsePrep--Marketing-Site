// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';

// Local Assets
import ButtonCustom from '../components/ButtonCustom';

//  Style Overrides
const styles = theme => ({
  formTitle: {
    fontSize: '30px',
    marginBottom: '20px',
    fontWeight: '300',
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      marginBottom: '40px',
    },
  },
  formTitleAnimationEnter: {
    opacity: '0',
    transform: 'translateX(200%)',
  },
  formTitleAnimationEnterActive: {
    transition: 'all 1s',

    transform: 'translateX(0)',
    opacity: '1',
  },
  '@keyframes slide-in': {
    from: {
      transform: 'translateX(100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  '@keyframes simple-fade': {
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  },
  formChoices: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
    },
  },
  choiceStyle: {
    marginTop: '20px',
    display: 'table',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  submit: {
    marginLeft: '20px',
  },
  selectText: {
    width: '200px',
  },
  menuTextContainer: {
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '600px',
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  },
});

const times = [
  {
    value: 'Morning',
    label: 'Morning',
  },
  {
    value: 'Afternoon',
    label: 'Afternoon',
  },
  {
    value: 'Evening',
    label: 'Evening',
  },
  {
    value: 'Anytime',
    label: 'Anytime',
  },
];

class SlideMenu extends Component {
  state = {
    name: '',
    email: '',
    tel: '',
    when: '',
    errors: {},
    submitted: false,
    title: true,
    disabled: false,
  };

  handleSubmit = e => {
    this.props.onClickHandler(this.props.formChoice);
    e.preventDefault();
    const contactData = {
      name: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      when: this.state.when,
    };

    axios
      .post('/api/preferredContact', contactData)
      .then(() => {
        this.setState({ submitted: true, errors: {} });
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
  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      setTimeout(() => {
        this.setState({ title: true });
      }, 1);
    }
  }

  onClickValidationHandler = () => {
    const { onClickHandler, formChoice } = this.props;
    this.form.isFormValid(false).then(isValid => {
      if (!isValid) {
        this.setState({ disabled: true });
      } else {
        this.setState({ title: false });
        onClickHandler(formChoice);
      }
    });
  };

  validatorListener = result => {
    this.setState({ disabled: !result });
  };

  render() {
    const {
      classes,
      choices,
      onClickHandler,
      title,
      form,
      label,
      formChoice,
      checkbox,
      selectMenu,
      value,
      backButton,
      backMenu,
      resetButton,
      currentValidators,
      currentErrorMessages,
    } = this.props;
    const { errors, disabled } = this.state;
    const test = () => (
      <TextValidator
        label={label}
        variant="outlined"
        name={value}
        validators={currentValidators}
        errorMessages={currentErrorMessages}
        validatorListener={this.validatorListener}
      />
    );

    return (
      <React.Fragment>
        <Grid item className={classes.menuTextContainer}>
          <Slide
            direction="left"
            in={this.state.title}
            timeout={{
              enter: 500,
              exit: 0.01,
            }}
          >
            <Typography variant="h3" className={classes.formTitle} color="inherit">
              {title}
            </Typography>
          </Slide>

          {choices.length > 0 == true && (
            <Grid item container direction="column" className={classes.formChoices}>
              {choices.map(choice => {
                if (choice.to) {
                  return (
                    <Link href={choice.to} as={choice.as}>
                      <Typography variant="h5" className={classes.choiceStyle} color="inherit">
                        {choice.choice}
                      </Typography>
                    </Link>
                  );
                }

                if (!choice.to) {
                  return (
                    <Typography
                      variant="h5"
                      className={classes.choiceStyle}
                      color="inherit"
                      onClick={() => {
                        this.setState({ title: false });

                        onClickHandler(choice.menu);
                      }}
                    >
                      {choice.choice}
                    </Typography>
                  );
                }
              })}
            </Grid>
          )}

          {form && (
            <Grid container className={classes.formContainer}>
              <Grid container alignItems="baseline">
                <ValidatorForm
                  ref={r => {
                    this.form = r;
                  }}
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
                >
                  <TextValidator
                    placeholder={'512-123-4567'}
                    label={label}
                    variant="outlined"
                    onChange={this.handleChange(value)}
                    value={this.state[value]}
                    name={value}
                    validators={currentValidators}
                    errorMessages={currentErrorMessages}
                    validatorListener={this.validatorListener}
                  />
                  <PhoneInput
                    inputComponent={test}
                    country="US"
                    placeholder="Enter phone number"
                    value={this.state[value]}
                    onChange={value => this.setState({ value })}
                  />
                  <ButtonCustom
                    disabled={disabled}
                    onClick={() => {
                      this.onClickValidationHandler();
                    }}
                    variant="contained"
                    className={classes.submit}
                  >
                    Continue
                  </ButtonCustom>
                </ValidatorForm>
                {/* <TextField
                  error={Boolean(errors[value])}
                  helperText={errors[value]}
                  variant="outlined"
                  type="text"
                  value={this.state[value]}
                  onChange={this.handleChange(value)}
                /> */}
              </Grid>

              {checkbox && (
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Send me tips, trends, freebies, updates and offers."
                />
              )}
            </Grid>
          )}
          {selectMenu && (
            <Grid item container className={classes.formContainer}>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <Grid item container alignItems="baseline">
                  <TextField
                    select
                    SelectProps={{
                      MenuProps: {
                        className: classes.selectMenu,
                      },
                    }}
                    classes={{ root: classes.root }}
                    id="outlined-adornment-password"
                    className={classes.selectText}
                    variant="outlined"
                    type="text"
                    label="Select Preferred Time"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                  >
                    {times.map(time => (
                      <MenuItem key={time.value} value={time.value}>
                        {time.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <ButtonCustom
                    onClick={this.handleSubmit}
                    variant="contained"
                    className={classes.submit}
                  >
                    Submit
                  </ButtonCustom>
                </Grid>
              </form>
            </Grid>
          )}
        </Grid>
        {backButton && (
          <ButtonCustom
            className={classes.button}
            onClick={() => {
              this.setState({ title: false });

              onClickHandler(backMenu);
            }}
          >
            Back
          </ButtonCustom>
        )}
        {resetButton && (
          <ButtonCustom
            className={classes.button}
            onClick={() => {
              this.setState({ title: false });

              onClickHandler(backMenu);
            }}
          >
            Reset
          </ButtonCustom>
        )}
      </React.Fragment>
    );
  }
}

SlideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

SlideMenu.defaultProps = {
  choices: [],
};

export default withStyles(styles)(SlideMenu);
