// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

// Local Components
import ButtonCustom from "../ButtonCustom";
import Panel from "../Panel";
import MaskedInput from "../common/MaskedInput";

// Local Assets

//  Style Overrides
const styles = theme => ({
  root: { backgroundColor: "white" },
  label: {
    color: "grey"
  },
  email: {
    marginRight: "0px",

    marginBottom: "10px",
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px",
      marginRight: "15px"
    }
  },
  tel: {
    marginBottom: "10px",
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px"
    }
  },
  submit: {
    alignSelf: "stretch",
    marginBottom: "20px",
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px"
    }
  },
  formContainer: {
    paddingLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20px"
    }
  },
  titleFirst: {
    marginBottom: "15px",
    textAlign: "center"
  },
  helperTextRoot: {
    color: "grey",
    backgroundColor: "#FFFFFF"
  },
  inputsContainer: {
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  form: {
    display: "flex",
    justifyContent: "center"
  },
  titleSecond: {
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px"
    }
  }
});

class ContactForm extends Component {
  state = {
    checked: true,
    email: "",
    tel: "(  )    -    ",
    submitted: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      email: this.state.email,
      tel: this.state.tel
    };

    axios
      .post("/api/contact", contactData)
      .then(() => {
        this.setState({ submitted: true });
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  toggleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  render() {
    const { errors, submitted, checked, tel, email } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Panel backgroundColor="lightBlue" padding>
          <Grid item container justify="space-evenly" alignItems="center">
            {!submitted && (
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
                <Typography
                  variant="h4"
                  color="textPrimary"
                  component="p"
                  paragraph
                  className={classes.titleSecond}
                >
                  We Have Answers!
                </Typography>
              </Grid>
            )}
            {!submitted && (
              <Grid item>
                <Grid item container className={classes.formContainer}>
                  <form onSubmit={this.handleSubmit} className={classes.form}>
                    <Grid
                      item
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
                          id="outlined-adornment-password"
                          className={classes.email}
                          variant="outlined"
                          type="email"
                          label="Email"
                          helperText={errors.email}
                          value={email}
                          onChange={this.handleChange("email")}
                          InputProps={{
                            classes: { root: classes.root }
                          }}
                        />
                        <TextField
                          htmlFor="formatted-text-mask-input"
                          error={Boolean(errors.tel)}
                          name="tel"
                          className={classes.tel}
                          variant="outlined"
                          placeholder="512-123-3456"
                          type="tel"
                          label="Phone Number"
                          autoComplete="tel"
                          value={tel}
                          helperText={errors.tel}
                          onChange={this.handleChange("tel")}
                          InputProps={{
                            classes: { root: classes.root },
                            value: tel,
                            inputComponent: MaskedInput,
                            onChange: this.handleChange("tel")
                          }}
                        />
                      </Grid>
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
                      <ButtonCustom
                        color="white"
                        variant="contained"
                        type="submit"
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
              <Grid item>
                <Typography variant="h4" color="textPrimary" component="p">
                  Awesome. We'll contact you within 48 hrs!
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);
