// Node Modules
import React from "react";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// Local Components

// Local Assets

//  Style Overrides

const PaymentForm = props => {
  const { ccName, handleChange, validatorListener } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextValidator
            label="Full Name"
            variant="outlined"
            value={ccName}
            name="ccName"
            autoComplete="cc-name"
            fullWidth
            onChange={handleChange("ccName")}
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
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
