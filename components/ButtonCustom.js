// Node Modules
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// Material UI Components
import Button from "@material-ui/core/Button";

// Local assets
import chevronRight from "../static/images/chevron-right-white.svg";
import chevronLeft from "../static/images/chevron-left-white.svg";
import chevronLeftBlack from "../static/images/chevron-left.svg";
import chevronRightBlack from "../static/images/chevron-right.svg";

const styles = theme => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    fontSize: "inherit",
    minWidth: "initial",
    flexShrink: "0",
    letterSpacing: "1.5px",
    padding: "8px 15px",
    position: "relative",
    textTransform: "uppercase",
    transition: "transform 0.3s",
    zIndex: "2",
    "&:hover": {
      transform: "translateY(1px)",
      backgroundColor: theme.palette.primary.light
    },
    "&:active": {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    }
  },
  white: {
    backgroundColor: "white",
    color: "#343e4d",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    "&:hover": {
      backgroundColor: "#ebebeb"
    }
  },
  blue: {
    color: "white",
    backgroundColor: "#2980ba",
    "&:hover": {
      backgroundColor: "#5ab0e9"
    }
  },
  arrowRight: {
    "&:after": {
      background: `url(${chevronRight}) no-repeat`,
      content: '""',
      height: "14px",
      marginLeft: "10px",
      transition: "0.5s",
      width: "14px"
    },
    "&:hover:after": {
      transform: "translateX(5px)"
    }
  },
  arrowRightBlack: {
    "&:after": {
      background: `url(${chevronRightBlack}) no-repeat`,
      content: '""',
      height: "14px",
      marginLeft: "10px",
      transition: "0.5s",
      width: "14px"
    },
    "&:hover:after": {
      transform: "translateX(5px)"
    }
  },
  arrowLeft: {
    "&:before": {
      background: `url(${chevronLeft}) no-repeat`,
      content: '""',
      height: "14px",
      marginRight: "10px",
      transition: "0.5s",
      width: "14px"
    },
    "&:hover:before": {
      transform: "translateX(-5px)"
    }
  },
  arrowLeftBlack: {
    "&:before": {
      background: `url(${chevronLeftBlack}) no-repeat`,
      content: '""',
      height: "14px",
      marginRight: "10px",
      transition: "0.5s",
      width: "14px"
    },
    "&:hover:before": {
      transform: "translateX(-5px)"
    }
  },

  limitWidth: {
    maxWidth: "250px",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const ButtonCustom = props => {
  const {
    classes,
    className,
    hasArrowRight,
    children,
    hasArrowLeft,
    hasArrowLeftBlack,
    hasArrowRightBlack,
    color,
    limitWidth,
    ...rest
  } = props;
  return (
    <Button
      className={classNames(
        classes.root,
        {
          [classes.arrowRight]: hasArrowRight,
          [classes.arrowLeft]: hasArrowLeft,
          [classes.arrowLeftBlack]: hasArrowLeftBlack,
          [classes.arrowRightBlack]: hasArrowRightBlack,
          [classes.limitWidth]: limitWidth,
          [classes.blue]: color === "blue",
          [classes.white]: color === "white"
        },
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default withStyles(styles)(ButtonCustom);
