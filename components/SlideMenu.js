// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Validator from "validator";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";

// Local Components
import MaskedInput from "./common/MaskedInput";

// Local Assets
import ButtonCustom from "../components/ButtonCustom";
import * as colors from "./common/colors";

//  Style Overrides
const styles = theme => ({
  formTitle: {
    fontSize: "2.1875rem",
    fontWeight: "300",
    marginBottom: "20px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.125rem",
      marginBottom: "30px",
      textAlign: "left"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4.4375rem"
    }
  },
  formTitleAnimationEnter: {
    opacity: "0",
    transform: "translateX(200%)"
  },
  formTitleAnimationEnterActive: {
    transition: "all 1s",

    transform: "translateX(0)",
    opacity: "1"
  },
  "@keyframes slide-in": {
    from: {
      transform: "translateX(100%)"
    },
    to: {
      transform: "translateX(0)"
    }
  },
  "@keyframes simple-fade": {
    from: {
      opacity: "0"
    },
    to: {
      opacity: "1"
    }
  },
  formChoices: {
    maxWidth: "350px",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("sm")]: {
      alignItems: "inherit",
      maxWidth: "inherit"
    }
  },
  choiceContainer: {
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      "& $choiceStyle": {
        backgroundImage:
          "linear-gradient(224deg,  #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
        color: "transparent",
        "-webkit-background-clip": "text",
        backgroundClip: "text",
        backgroundColor: "#ebebeb",
        transform: "translateY(1px)"
      }
    },
    [theme.breakpoints.up("sm")]: {
      width: "inherit"
    }
  },
  choiceStyle: {
    display: "block",
    color: "#343e4d",
    borderRadius: "4px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    fontSize: "inherit",
    fontStyle: "normal",
    fontWeight: 500,
    padding: "8px 15px",
    position: "relative",
    transition: "transform 0.3s",
    zIndex: "10",
    position: "relative",
    marginTop: "15px",
    fontWeight: "500",

    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      backgroundColor: "transparent",
      padding: "0px",
      boxShadow: "none",
      border: "none",
      marginTop: "20px",
      fontSize: "25px"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "25px",
      fontSize: "30px"
    }
  },
  submit: {
    marginLeft: "20px"
  },
  selectText: {
    width: "200px"
  },
  menuTextContainer: { width: "100%" },
  button: {},
  phoneInput: {},
  form: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "10px"
  },
  formContainer: {
    flexDirection: "column",
    paddingTop: "25px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start"
    }
  },
  formInputRoot: { backgroundColor: "white" }
});

const times = [
  {
    value: "Whenever",
    label: "Whenever"
  },
  {
    value: "Morning",
    label: "Morning"
  },
  {
    value: "Afternoon",
    label: "Afternoon"
  },
  {
    value: "Evening",
    label: "Evening"
  }
];

class SlideMenu extends Component {
  state = {
    checked: true,
    course: "",
    program: "",
    location: "",
    whoNeeds: "",
    name: "",
    email: "",
    tel: "(  )    -    ",
    when: "",
    errors: {},
    submitted: false,
    title: true,
    disabled: false,
    disabledTel: false,
    telError: "",
    errors: {
      when: ""
    }
  };

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.when == "") {
      this.setState({
        errors: {
          when: "Preferred time is required."
        }
      });
    } else {
      const contactData = {
        course: this.state.course,
        program: this.state.program,
        location: this.state.location,
        whoNeeds: this.state.whoNeeds,
        name: this.state.name,
        email: this.state.email,
        tel: this.state.tel,
        when: this.state.when
      };

      axios
        .post("/api/preferredContact", contactData)
        .then(() => {
          this.props.onClickHandler(this.props.formChoice);
          this.setState({
            submitted: true,
            errors: {}
          });
        })
        .catch(err => {
          this.setState({ errors: err.response.data });
        });
    }
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });

    if (name == "tel") {
      if (!Validator.isMobilePhone(e.target.value)) {
        this.setState({
          telError: "Number is invalid",
          disabledTel: true
        });
      }

      if (Validator.isMobilePhone(e.target.value)) {
        this.setState({
          telError: "",
          disabledTel: false
        });
      }

      if (Validator.isEmpty(e.target.value)) {
        this.setState({
          telError: "Number is required",
          disabledTel: true
        });
      }
    }
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

  handleTelValidate = e => {
    e.preventDefault();
    const { onClickHandler, formChoice } = this.props;
    if (!Validator.isMobilePhone(this.state.tel)) {
      this.setState({
        telError: "Number is invalid",
        disabledTel: true
      });
    }

    if (Validator.isMobilePhone(this.state.tel)) {
      this.setState({
        telError: "",
        disabledTel: false
      });
      onClickHandler(formChoice);
    }

    if (this.state.tel == "(  )    -    ") {
      this.setState({
        telError: "Number is required",
        disabledTel: true
      });
    }
  };

  handleWhenChange = event => {
    this.setState({
      when: event.target.value
    });
    this.handleWhenError(event.target.value);
  };

  handleWhenError = result => {
    this.setState({
      errors: {
        when: !result
      }
    });
  };

  toggleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handlePhoneSubmit = e => {
    e.preventDefault();
  };

  setOptions = choice => {
    this.setState({
      title: false
    });
    if (choice.course) {
      this.setState({
        course: choice.course
      });
    }
    if (choice.program) {
      this.setState({
        program: choice.program
      });
    }
    if (choice.location) {
      this.setState({
        location: choice.location
      });
    }
    if (choice.whoNeeds) {
      this.setState({
        whoNeeds: choice.whoNeeds
      });
    }
  };

  render() {
    const {
      classes,
      course,
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
      phone,
      currentValidators,
      currentErrorMessages
    } = this.props;
    const {
      errors,
      disabled,
      disabledTel,
      checked,
      telError,
      tel
    } = this.state;
    return (
      <React.Fragment>
        <Grid item className={classes.menuTextContainer}>
          <Slide
            direction="left"
            in={this.state.title}
            timeout={{
              enter: 500,
              exit: 0.01
            }}
          >
            <Typography
              variant="h3"
              className={classes.formTitle}
              color="inherit"
            >
              {title}
            </Typography>
          </Slide>

          {choices.length > 0 && (
            <Grid
              item
              container
              direction="column"
              className={classes.formChoices}
            >
              {choices.map(choice => {
                if (choice.to) {
                  return (
                    <React.Fragment key={choice.choice}>
                      <Link href={choice.to} as={choice.as}>
                        <Grid item className={classes.choiceContainer}>
                          <Typography
                            variant="h5"
                            className={classes.choiceStyle}
                            color="inherit"
                          >
                            {choice.choice}
                          </Typography>
                        </Grid>
                      </Link>
                    </React.Fragment>
                  );
                }

                if (!choice.to) {
                  return (
                    <Grid
                      key={choice.choice}
                      item
                      className={classes.choiceContainer}
                      onClick={() => {
                        this.setOptions(choice);

                        onClickHandler(choice.menu);
                      }}
                    >
                      <Typography
                        variant="h5"
                        className={classes.choiceStyle}
                        color="inherit"
                      >
                        {choice.choice}
                      </Typography>
                    </Grid>
                  );
                }
              })}
            </Grid>
          )}

          {form && (
            <Grid container className={classes.formContainer}>
              {!phone && (
                <React.Fragment>
                  <ValidatorForm
                    instantValidate
                    ref={r => {
                      this.form = r;
                    }}
                    className={classes.form}
                    onSubmit={this.handlePhoneSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <TextValidator
                      label={label}
                      variant="outlined"
                      onChange={this.handleChange(value)}
                      value={this.state[value]}
                      name={value}
                      inputProps={{
                        onKeyPress: e => {
                          e.key === "Enter" && this.onClickValidationHandler();
                        }
                      }}
                      InputProps={{
                        classes: { root: classes.formInputRoot }
                      }}
                      validators={currentValidators}
                      errorMessages={currentErrorMessages}
                      validatorListener={this.validatorListener}
                    />

                    <ButtonCustom
                      disabled={disabled}
                      onClick={() => {
                        this.onClickValidationHandler();
                      }}
                      variant="contained"
                      type="submit"
                      className={classes.submit}
                    >
                      Continue
                    </ButtonCustom>
                  </ValidatorForm>

                  {checkbox && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="yes"
                          color="primary"
                          checked={checked}
                          onClick={this.toggleCheckbox}
                        />
                      }
                      label="Send me tips, trends, freebies, updates and offers."
                    />
                  )}
                </React.Fragment>
              )}
              {phone && (
                <form className={classes.form}>
                  <TextField
                    htmlFor="formatted-text-mask-input"
                    error={Boolean(telError)}
                    name="tel"
                    variant="outlined"
                    type="text"
                    placeholder="512-123-3456"
                    label="Phone Number"
                    autoComplete="tel"
                    inputProps={{
                      onKeyPress: e => {
                        e.key === "Enter" && this.handleTelValidate(e);
                      }
                    }}
                    InputProps={{
                      value: tel,
                      classes: { root: classes.formInputRoot },
                      inputComponent: MaskedInput,
                      onChange: this.handleChange("tel")
                    }}
                    helperText={telError}
                  />
                  <ButtonCustom
                    disabled={disabledTel}
                    onClick={this.handleTelValidate}
                    variant="contained"
                    type="button"
                    className={classes.submit}
                  >
                    Continue
                  </ButtonCustom>
                </form>
              )}
            </Grid>
          )}
          {selectMenu && (
            <Grid item container className={classes.formContainer}>
              <Grid item container alignItems="baseline">
                <form onSubmit={this.handleSubmit} className={classes.form}>
                  <TextField
                    select
                    error={Boolean(errors.when)}
                    helperText={errors.when}
                    SelectProps={{
                      MenuProps: {
                        className: classes.selectMenu
                      }
                    }}
                    InputProps={{
                      classes: { root: classes.formInputRoot }
                    }}
                    classes={{ root: classes.root }}
                    id="outlined-adornment-password"
                    className={classes.selectText}
                    variant="outlined"
                    type="text"
                    label="Select Preferred Time"
                    value={this.state.when}
                    onChange={this.handleWhenChange}
                  >
                    {times.map(time => (
                      <MenuItem key={time.value} value={time.value}>
                        {time.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <ButtonCustom
                    type="submit"
                    disabled={this.state.errors.when}
                    variant="contained"
                    className={classes.submit}
                  >
                    Submit
                  </ButtonCustom>
                </form>
              </Grid>
            </Grid>
          )}
        </Grid>
        {backButton && (
          <ButtonCustom
            type="button"
            color="white"
            hasArrowLeftBlack
            className={classes.button}
            onClick={() => {
              this.setState({ title: false });
              onClickHandler(backMenu);
            }}
            onKeyPress={e => {
              e.key === "Enter" && e.preventDefault();
            }}
          >
            Back
          </ButtonCustom>
        )}
        {resetButton && (
          <ButtonCustom
            hasArrowLeftBlack
            color="white"
            className={classes.button}
            onClick={() => {
              this.setState({
                title: false,
                name: "",
                email: "",
                tel: "(  )    -    ",
                when: ""
              });

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
  classes: PropTypes.object.isRequired
};

SlideMenu.defaultProps = {
  choices: []
};

export default withStyles(styles)(SlideMenu);
