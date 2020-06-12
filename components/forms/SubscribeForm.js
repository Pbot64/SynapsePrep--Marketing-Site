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
import CardCustom from "../CardCustom";
import Divider from "@material-ui/core/Divider";

// Local Assets
import bookCover from "../../static/images/book-cover.png";

//  Style Overrides
const styles = theme => ({
  textFieldRoot: { backgroundColor: "white" },
  label: {
    color: "grey"
  },
  email: {
    marginBottom: "10px",
    maxWidth: "280px"
  },
  name: {
    marginBottom: "10px",
    marginTop: "10px",
    maxWidth: "280px"
  },
  submitContainer: {
    marginTop: "10px"
  },
  titleFirst: {
    marginBottom: "15px",
    textAlign: "center"
  },
  helperTextRoot: {
    color: "grey",
    backgroundColor: "#FFFFFF"
  },
  textFieldsContainer: {},

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px"
  },
  titleSecond: {
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px"
    }
  },
  root: {
    minWidth: "380px"
  },
  topTextContainer: {
    color: theme.palette.text.primary,
    padding: "20px"
  },
  bookCover: {
    borderRight: "0px solid",
    borderBottom: "1px solid",
    width: "100%",
    display: "block",
    [theme.breakpoints.up("md")]: {
      borderRight: "1px solid",
      borderBottom: "0px solid"
    }
  },
  scoreIncreaseText: {
    fontStyle: "italic",
    fontWeight: "300",
    marginTop: "15px"
  }
});

class SubscribeForm extends Component {
  state = {
    email: "",
    name: "",
    submitted: false,
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const subscribeData = {
      email: this.state.email,
      name: this.state.name
    };
    axios
      .post("/api/subscribe", subscribeData)
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

  render() {
    const { errors, submitted, name, email } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid
          item
          xs={12}
          sm={6}
          md={9}
          container
          justify="center"
          className={classes.root}
        >
          <CardCustom className={classes.cardRoot}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={12} md={6}>
                <img
                  src={bookCover}
                  alt="book cover"
                  className={classes.bookCover}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Grid item className={classes.topTextContainer}>
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="p"
                    align="center"
                  >
                    Subscribe and Get Our{" "}
                    <span style={{ textDecoration: "underline" }}>Free</span>{" "}
                    E-book.
                  </Typography>
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="p"
                    align="center"
                    className={classes.scoreIncreaseText}
                  >
                    Easily increase your score by{" "}
                    <span style={{ color: "#00BF6F", fontWeight: "600" }}>
                      100+
                    </span>{" "}
                    points!
                  </Typography>
                </Grid>
                <Divider />
                <form onSubmit={this.handleSubmit} className={classes.form}>
                  <Grid
                    item
                    container
                    justify="center"
                    className={classes.textFieldsContainer}
                  >
                    <TextField
                      error={Boolean(errors.name)}
                      id="outlined-adornment-name"
                      className={classes.name}
                      variant="outlined"
                      type="name"
                      label="Name"
                      autoComplete="name"
                      helperText={errors.name}
                      value={name}
                      onChange={this.handleChange("name")}
                      fullWidth
                      autoComplete="name"
                      InputProps={{
                        classes: { root: classes.textFieldRoot }
                      }}
                    />
                    <TextField
                      error={Boolean(errors.email)}
                      id="outlined-adornment-email"
                      className={classes.email}
                      variant="outlined"
                      type="email"
                      label="Email"
                      helperText={errors.email}
                      value={email}
                      onChange={this.handleChange("email")}
                      fullWidth
                      autoComplete="email"
                      InputProps={{
                        classes: { root: classes.textFieldRoot }
                      }}
                    />
                  </Grid>

                  <Grid item className={classes.submitContainer}>
                    {!submitted && (
                      <ButtonCustom
                        color="green"
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </ButtonCustom>
                    )}
                    {submitted && (
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        component="p"
                      >
                        We emailed it to you!
                      </Typography>
                    )}
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </CardCustom>
        </Grid>
      </React.Fragment>
    );
  }
}

SubscribeForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubscribeForm);
