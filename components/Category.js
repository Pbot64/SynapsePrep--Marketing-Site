// Node Modules
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Local Components

// Local Assets
import star from "../static/images/Icon-Star.svg";
import vertMenu from "../static/images/Icon-VertMenu.svg";

//  Style Overrides
const styles = theme => ({
  title: {
    width: "100%",
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {}
  },
  topicContainer: {
    width: "120px",
    margin: "10px"
  },
  topic: {
    backgroundColor: "white",
    padding: "10px",
    position: "relative",
    width: "100%",
    height: "140px",
    backgroundBlendMode: "color-burn",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    marginBottom: "15px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
  },
  star: {
    extend: "subIconBase",
    left: "10px"
  },
  subIconBase: {
    width: "15px",
    position: "absolute",
    top: "15px"
  },
  svg: {
    width: "75px",
    height: "65px"
  },
  vertMenu: {
    extend: "subIconBase",
    right: "10px"
  }
});

const Category = props => {
  const { classes, title, src, alt, className, ...rest } = props;
  return (
    <React.Fragment>
      <Grid
        item
        container
        className={classNames(classes.topicContainer, className)}
        justify="center"
        alignContent="flex-start"
      >
        <Grid item container className={classes.topic}>
          <img src={star} className={classes.star} alt="star" />
          <img src={src} className={classes.svg} alt={alt} />
          <img src={vertMenu} className={classes.vertMenu} alt="vertMenu" />
          <Typography
            variant="h5"
            align="center"
            color="textPrimary"
            className={classes.title}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
