// Node Modules
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    borderRadius: 10,
    background: '#fff',
    boxShadow: '0 18px 56px -18px rgba(22,45,61,.18)',
    marginTop: 18,
    width: '100%',
    overflow: 'visible',
  },
  title: {
    paddingBottom: 10,
  },
  borderBottom: {
    borderBottom: `1px solid black`,
  },
  padding: {
    padding: '20px',
  },
});

const CardCustom = props => {
  const { classes, className, title, borderBottom, padding } = props;
  return (
    <React.Fragment>
      {title && (
        <Typography
          component="h5"
          variant="h5"
          className={classNames(
            classes.title,
            {
              [classes.borderBottom]: borderBottom,
            },
            className,
          )}
        >
          {title}
        </Typography>
      )}
      <Card
        className={classNames(
          classes.root,
          {
            [classes.padding]: padding,
          },
          className,
        )}
      >
        {' '}
        {props.children}{' '}
      </Card>
    </React.Fragment>
  );
};

export default withStyles(styles)(CardCustom);
