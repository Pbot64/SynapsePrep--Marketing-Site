import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddressForm extends Component {
  state = {
    checked: true,
  };

  toggleCheckbox = e => {
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="lastName"
              variant="outlined"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              variant="outlined"
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="tel"
              variant="outlined"
              name="tel"
              label="Phone Number"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  value="yes"
                  color="primary"
                  onClick={this.toggleCheckbox}
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

export default AddressForm;
