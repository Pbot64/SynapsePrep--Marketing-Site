// Node Modules
import React from 'react';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Local Components

// Local Assets

//  Style Overrides

function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <TextField required id="cardName" label="Name on card" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={6}>
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
}

export default PaymentForm;
