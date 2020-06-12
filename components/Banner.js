// Node Modules
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

// Material UI Components
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Panel from "./Panel";
import ButtonCustom from "./ButtonCustom";
import CardCustom from "./CardCustom";

// Local assets

const styles = theme => ({
  root: {
    position: "relative",
    padding: "20px 0px"
  },
  container: {
    paddingRight: "50px",
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center"
    }
  },
  textContainer: {
    marginRight: "20px",
    marginBottom: "10px"
  },
  cancelCard: {
    cursor: "pointer",
    position: "absolute",
    top: "-20px",
    right: "0px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "3px 10px",
    borderRadius: "0px"
  }
});

class Banner extends React.Component {
  state = {
    checked: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ checked: !this.state.checked });
    }, 300);
  }

  handleClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { classes, course } = this.props;
    const { checked } = this.state;
    const courseNoCaps = course.toLowerCase();

    return (
      <Collapse in={checked}>
        <Panel backgroundColor="lightBlue" className={classes.root}>
          <Grid
            item
            xs
            container
            justify="center"
            alignItems="center"
            className={classes.container}
          >
            <Grid item className={classes.textContainer}>
              <Typography variant="h5" color="textPrimary">
                Looking to enroll in an {course} bootcamp?
              </Typography>
              <Typography variant="body1" inline color="textPrimary">
                Several spring dates are still available!
              </Typography>
            </Grid>
            <Link
              href={`/checkout?course=${course}&program=Bootcamp&link=/${courseNoCaps}`}
              as={`/checkout/${course}/Bootcamp`}
            >
              <ButtonCustom
                hasArrowRightBlack
                color="white"
                className={classes.enrollButton}
              >
                Enroll
              </ButtonCustom>
            </Link>
          </Grid>
          <ButtonCustom
            color="white"
            className={classes.cancelCard}
            onClick={this.handleClick}
          >
            X
          </ButtonCustom>
        </Panel>
      </Collapse>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
