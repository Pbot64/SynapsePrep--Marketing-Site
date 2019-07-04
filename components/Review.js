// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];

const styles = theme => ({
  listItem: {
    borderTop: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey",
    padding: `15px 0px`
  },
  total: {
    fontWeight: "700",
    marginLeft: "20px"
  },
  totalContainer: {
    marginBottom: "40px",
    paddingTop: "10px",
    borderTop: "1px solid lightgrey"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  },
  sessionNumber: {
    marginBottom: "20px",
    marginTop: theme.spacing.unit * 2
  },
  priceInfo: { maxWidth: "165px" },
  listItems: {
    fontSize: "0.7rem",
    fontWeight: "600",
    textTransform: "uppercase"
  },
  quantityTitle: {
    fontSize: "0.7rem",
    fontWeight: "600",
    textTransform: "uppercase",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "initial"
    }
  },
  selectQuanitiy: {
    marginTop: "10px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px"
    }
  },
  titlesWrapper: {
    justifyContent: "flex-end",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between"
    }
  }
});

class Review extends Component {
  render() {
    const {
      classes,
      program,
      price,
      programLevel,
      fname,
      lname,
      email,
      tel,
      course,
      sessions,
      handleChange,
      quantity,
      brand,
      last4,
      expiryDate
    } = this.props;

    const quantities = [
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      },
      {
        value: "4",
        label: "4"
      }
    ];
    console.log(this.props);
    const payments = [
      { name: "Card type", detail: brand },
      { name: "Card holder", detail: `${fname} ${lname}` },
      { name: "Card last4", detail: last4 },
      { name: "Expiry date", detail: expiryDate }
    ];

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Grid item container>
          <Grid item xs sm={5}>
            <Typography
              color="textSecondary"
              variant="overline"
              gutterBottom
              className={classes.listItems}
            >
              Item
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs
            justify="space-between"
            className={classes.titlesWrapper}
          >
            <Typography
              color="textSecondary"
              variant="overline"
              component="h5"
              gutterBottom
              className={classes.listItems}
            >
              Session Price
            </Typography>

            <Typography
              color="textSecondary"
              variant="overline"
              component="h5"
              gutterBottom
              className={classes.quantityTitle}
            >
              Quantity
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.listItem}>
          <Grid item xs sm={5}>
            <ListItemText
              primary={`${course} ${program}`}
              secondary={`${programLevel} Program`}
            />
          </Grid>
          <Grid
            item
            container
            xs
            justify="space-between"
            className={classes.titlesWrapper}
          >
            <Typography
              className={classes.priceInfo}
              variant="body1"
              align="right"
            >
              ${price}
            </Typography>
            <Grid item container xs={12} sm justify="flex-end">
              <TextField
                select
                SelectProps={{
                  MenuProps: {
                    className: classes.selectMenu
                  }
                }}
                className={classes.selectQuanitiy}
                variant="outlined"
                type="text"
                label="Quantity"
                value={quantity}
                onChange={handleChange("quantity")}
              >
                {quantities.map(quantity => (
                  <MenuItem key={quantity.value} value={quantity.value}>
                    {quantity.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          gutterBottom
          align="right"
          className={classes.sessionNumber}
        >
          x {sessions} sessions
        </Typography>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          className={classes.totalContainer}
        >
          <Typography variant="h6" align="right">
            Total:
          </Typography>

          <Typography variant="h6" className={classes.total}>
            {`$${price * quantity * sessions}.00`}
          </Typography>
        </Grid>

        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Personal details
            </Typography>
            <Typography gutterBottom>
              {fname} {lname}
            </Typography>
            <Typography gutterBottom>{email}</Typography>
            <Typography gutterBottom>{tel}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
            </Typography>
            <Grid container>
              {payments.map(payment => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
