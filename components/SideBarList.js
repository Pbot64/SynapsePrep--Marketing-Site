// Node Modules
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

// Material UI Components
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import School from '@material-ui/icons/School';
import StarBorder from '@material-ui/icons/StarBorder';
import Timer from '@material-ui/icons/Timer';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';

// Local Components

// Local Assets

//  Style Overrides (to this component only)
const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    opacity: 0.8,
  },
  logoText: {
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '16px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

const StyledListItem = withStyles({
  button: {
    '&:focus': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
})(ListItem);

const SideBarList = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Link href="./" className={classes.link}>
        <Toolbar className={classes.logoText}>
          <Typography variant="overline" color="inherit">
            Synapse Prep
          </Typography>
        </Toolbar>
      </Link>
      <Divider />
      <List component="nav">
        <Link href="/Sat" as="/Sat" className={classes.link}>
          <StyledListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText inset primary="SAT" />
          </StyledListItem>
        </Link>
        <StyledListItem button>
          <ListItemIcon>
            <Timer />
          </ListItemIcon>
          <ListItemText inset primary="ACT" />
        </StyledListItem>
        <StyledListItem button>
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText inset primary="School Tutoring" />
        </StyledListItem>
        <Divider />
        <StyledListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText inset primary="Support" />
        </StyledListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(SideBarList);
