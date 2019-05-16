// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
    marginLeft: '20px',
  },
  totalContainer: {
    paddingTop: '10px',
    borderTop: '1px solid lightgrey',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
  sessionNumber: {
    marginBottom: '20px',
    marginTop: theme.spacing.unit * 2,
  },
  priceInfo: {
    marginRight: '20px',
  },
});

class Review extends Component {
  state = {
    quantity: '1',
    sessions: '14',
    exactPrice: '80',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes, name, price } = this.props;
    const { quantity, sessions, exactPrice } = this.state;
    console.log(this.props);

    const products = [
      { name: name, desc: 'A nice thing', price: price },
      { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
      { name: 'Product 3', desc: 'Something else', price: '$6.51' },
      { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
      { name: 'Shipping', desc: '', price: 'Free' },
    ];

    const quantities = [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
    ];
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>

        <Grid container alignItems="center" className={classes.listItem}>
          <ListItemText primary={name} secondary="14 Hour Tutoring Program" />

          <Typography className={classes.priceInfo} variant="body1">
            {'$80 per 1.5 hr session'}
          </Typography>
          <TextField
            select
            SelectProps={{
              MenuProps: {
                className: classes.selectMenu,
              },
            }}
            className={classes.selectText}
            variant="outlined"
            type="text"
            label="Quantity"
            value={quantity}
            onChange={this.handleChange('quantity')}
          >
            {quantities.map(quantity => (
              <MenuItem key={quantity.value} value={quantity.value}>
                {quantity.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Typography variant="body1" gutterBottom align="right" className={classes.sessionNumber}>
          x 14 sessions
        </Typography>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          className={classes.totalContainer}
        >
          <Typography variant="h6" align="right">
            Total
          </Typography>

          <Typography variant="h6" className={classes.total}>
            {`$${exactPrice * quantity * sessions}.00`}
          </Typography>
        </Grid>

        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Personal details
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);
