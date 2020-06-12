// Node Modules
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";


// Local assets

const styles = theme => ({
  root: {
    background: "#fff",
    boxShadow: "0 18px 56px -18px rgba(22,45,61,.18)"
  },
  borderCurved: {
    borderRadius: 10
  },
  title: {
    paddingBottom: 10,
    fontSize: "1.3rem",
    fontWeight: "300"
  },
  borderBottom: {
    marginBottom: 18,
    borderBottom: `1px solid black`
  },
  padding: {
    padding: "20px"
  },
  visible: {
    overflow: "visible"
  },
  clickable: {
    cursor: "pointer",
    transition: "0.15s",
    "&:hover": {
      boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.3)",
      transform: "translateY(-3px)"
    }
  }
});

const CardCustom = props => {
  const {
    classes,
    className,
    title,
    borderBottom,
    padding,
    visible,
    clickable,
    square
  } = props;
  return (
    <React.Fragment>
      {title && (
        <Typography
          component="h5"
          variant="h5"
          className={classNames(classes.title, {
            [classes.borderBottom]: borderBottom
          })}
        >
          {title}
        </Typography>
      )}
      <Card
        className={classNames(
          classes.root,
          {
            [classes.padding]: padding,
            [classes.visible]: visible,
            [classes.clickable]: clickable,
            [classes.borderCurved]: !square
          },
          className
        )}
        square={square}
      >
        {props.children}
      </Card>
    </React.Fragment>
  );
};

export default withStyles(styles)(CardCustom);
