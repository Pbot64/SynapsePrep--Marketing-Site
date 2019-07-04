// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI Components
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";

// Local Components
import SideBarList from "../components/SideBarList";

// Local Assets

//  Style Overrides
const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    display: "none"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: 240,
    zIndex: 999
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
});

const SideBar = props => {
  const { classes, theme } = props;
  return (
    <div className={classes.root}>
      <Drawer
        container={props.container}
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <SideBarList />
      </Drawer>
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideBar);
