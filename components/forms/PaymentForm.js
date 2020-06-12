import React, { Component } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  CardElement
} from "react-stripe-elements";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonCustom from "../ButtonCustom";
import CardCustom from "../CardCustom";

import axios from "axios";

const styles = theme => ({
  cardStyle: {
    border: "1px solid lightgrey",
    padding: "18.5px 14px",
    borderRadius: "5px",
    marginBottom: "50px"
  }
});

const createOptions = () => {
  return {
    style: {
      base: {
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      }
    }
  };
};

class CheckoutForm extends Component {
  state = {
    errorMessage: ""
  };

  submit = async () => {
    let { token, error } = await this.props.stripe.createToken({
      name: `${this.props.parentFirstName}, ${this.props.parentLastName}`
    });

    if (token) {
      this.props.setToken(token);
    } else {
      this.setState({
        errorMessage: error.message
      });
      this.props.setDisabled(true);
    }
  };

  handleChange = e => {
    if (e.error) {
      this.setState({
        errorMessage: e.error.message
      });
      this.props.setDisabled(true);
    } else {
      this.setState({
        errorMessage: ""
      });
      this.props.setDisabled(false);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <form>
          <Grid className={classes.cardStyle}>
            <CardElement {...createOptions()} onChange={this.handleChange} />
          </Grid>

          <Typography variant="body2" color="error">
            {this.state.errorMessage}
          </Typography>
        </form>
      </React.Fragment>
    );
  }
}

export default injectStripe(withStyles(styles)(CheckoutForm), {
  withRef: true
});
