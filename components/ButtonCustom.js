// Node Modules
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Material UI Components
import Button from '@material-ui/core/Button';

// Local Components
import chevronRight from '../assets/images/chevron-right-white.svg';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    color: '#343e4d',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: 'inherit',
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '2px',
    padding: '8px 15px',
    position: 'relative',
    textTransform: 'uppercase',
    transition: 'transform 0.3s',
    zIndex: '10',
    '&:hover': {
      transform: 'translateY(1px)',
      backgroundColor: '#ebebeb',
    },
  },
  green: {
    color: 'white',
    backgroundColor: '#17ab5d',
    '&:hover': {
      backgroundColor: '#1ac169',
    },
  },
  blue: {
    color: 'white',
    backgroundColor: '#2980ba',
    '&:hover': {
      backgroundColor: '#5ab0e9',
    },
  },
  arrow: {
    '&:after': {
      background: `url(${chevronRight}) no-repeat`,
      content: '""',
      height: '14px',
      marginLeft: '10px',
      transition: '0.5s',
      width: '14px',
    },
    '&:hover:after': {
      transform: 'translateX(5px)',
    },
  },
});

const ButtonCustom = props => {
  const { classes, className, hasArrow, children, color, ...rest } = props;
  return (
    <Button
      className={classNames(
        classes.root,
        {
          [classes.arrow]: hasArrow,
          [classes.blue]: color === 'blue',
          [classes.green]: color === 'green',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(ButtonCustom);
