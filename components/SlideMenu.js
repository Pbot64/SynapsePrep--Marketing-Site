// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local Components

// Material UI Components
import Typography from '@material-ui/core/Typography';

// Local Assets

//  Style Overrides
const styles = theme => ({
  formTitle: {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '50px',
    animation: '.3s ease-in-out both slide-in,.15s linear both simple-fade',
  },
  '@keyframes slide-in': {
    from: {
      transform: 'translateX(100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  '@keyframes simple-fade': {
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  },
});

class SlideMenu extends Component {
  state = {
    title: 'What are you looking to defeat?',
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.title);
    if (nextProps.title) {
      this.setState({ title: nextProps.title });
    }
  }

  render() {
    const { classes } = this.props;
    const { title } = this.state;
    return (
      <React.Fragment>
        <div className={classes.formContainer}>
          <Typography variant="overline" className={classes.formTitle} color="inherit">
            {title}
          </Typography>
          <div className={classes.formChoices}>
            <Typography variant="h5" className={classes.button} color="inherit">
              A) Learn more about our programs
            </Typography>
            <Typography variant="h5" className={classes.button} color="inherit">
              B) Just let me sign up already
            </Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SlideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlideMenu);
