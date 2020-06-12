import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import validator from "validator";
import PhoneInput from "react-phone-number-input/core";
import { withStyles } from "@material-ui/core/styles";
import MaskedInput from "../common/MaskedInput";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  formContainer: {
    maxHeight: "312px"
  }
});

class AddressForm extends Component {
  // onClickValidationHandler = () => {
  //   const { onClickHandler, formChoice } = this.props;
  //   this.form.isFormValid(false).then(isValid => {
  //     if (!isValid) {
  //       this.setState({ disabled: true });
  //     } else {
  //       onClickHandler(formChoice);
  //     }
  //   });
  // };

  // if (Validator.isEmpty(data.fname)) {
  //   errors.name = 'First Name is required';
  // }

  render() {
    const {
      handleChange,
      parentFirstName,
      parentLastName,
      studentFirstName,
      studentLastName,
      email,
      classes,
      tel,
      toggleCheckbox,
      checked,
      validatorListener,
      telError
    } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>

        <Grid container spacing={24} className={classes.formContainer}>
          <Grid item xs={12} sm={6}>
            <TextValidator
              label="Parent First Name"
              variant="outlined"
              value={parentFirstName}
              name="fname"
              autoComplete="given-name"
              fullWidth
              onChange={handleChange("parentFirstName")}
              validators={[
                "required",
                "minStringLength: 2",
                "maxStringLength: 30"
              ]}
              errorMessages={[
                "Name is required",
                "Name must be longer than 2 characters",
                "Name must be shorter than 30 characters"
              ]}
              validatorListener={validatorListener}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextValidator
              label="Parent Last name"
              variant="outlined"
              value={parentLastName}
              name="lname"
              autoComplete="family-name"
              fullWidth
              onChange={handleChange("parentLastName")}
              validators={[
                "required",
                "minStringLength: 2",
                "maxStringLength: 30"
              ]}
              errorMessages={[
                "Name is required",
                "Name must be longer than 2 characters",
                "Name must be shorter than 30 characters"
              ]}
              validatorListener={validatorListener}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextValidator
              label="Student First Name"
              variant="outlined"
              value={studentFirstName}
              fullWidth
              onChange={handleChange("studentFirstName")}
              validators={[
                "required",
                "minStringLength: 2",
                "maxStringLength: 30"
              ]}
              errorMessages={[
                "Name is required",
                "Name must be longer than 2 characters",
                "Name must be shorter than 30 characters"
              ]}
              validatorListener={validatorListener}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextValidator
              label="Student Last name"
              variant="outlined"
              value={studentLastName}
              fullWidth
              onChange={handleChange("studentLastName")}
              validators={[
                "required",
                "minStringLength: 2",
                "maxStringLength: 30"
              ]}
              errorMessages={[
                "Name is required",
                "Name must be longer than 2 characters",
                "Name must be shorter than 30 characters"
              ]}
              validatorListener={validatorListener}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              htmlFor="formatted-text-mask-input"
              error={Boolean(telError)}
              name="tel"
              variant="outlined"
              type="tel"
              placeholder="512-123-3456"
              label="Phone Number"
              fullWidth
              autoComplete="tel"
              InputProps={{
                value: tel,
                inputComponent: MaskedInput,
                onChange: handleChange("tel")
              }}
              helperText={telError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextValidator
              label="Parent Email"
              variant="outlined"
              value={email}
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
              onChange={handleChange("email")}
              validators={["required", "isEmail"]}
              errorMessages={["Email is required", "Email is not valid"]}
              validatorListener={validatorListener}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  value="yes"
                  color="primary"
                  onClick={toggleCheckbox}
                />
              }
              label="Send me tips, trends, freebies, updates and offers."
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddressForm);
