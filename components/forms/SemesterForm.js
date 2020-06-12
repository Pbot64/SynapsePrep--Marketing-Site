// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";

// Material UI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import NoSsr from "@material-ui/core/NoSsr";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

// Local Components
import ButtonCustom from "../ButtonCustom";
import CardCustom from "../CardCustom";

// Local Assets
import question from "../../static/images/question-mark.svg";

//  Style Overrides
const styles = theme => ({
  root: {
    maxWidth: "850px",
    [theme.breakpoints.up("md")]: {
      marginTop: "0px"
    }
  },
  popover: {
    maxWidth: "300px",
    padding: "20px"
  },
  selectForm: {
    width: "100%"
  },
  questionImgContainer: {
    cursor: "pointer",
    width: "30px",
    "&:hover": {
      opacity: "0.7"
    }
  },
  bottomContainer: {
    marginTop: "40px"
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    minHeight: "37px",
    padding: "12.5px 14px",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: `2px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 16,
    fontSize: 16
  },

  paper: {
    position: "absolute",
    zIndex: 3,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

// Styles used for categories
const groupStyles = {
  fontFamily: "goodtimesrg",
  letterSpacing: 2,
  lineHeight: "1.3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 14px",
  fontWeight: "500",
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  fontSize: 18,
  color: "#d3d3d3"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "20px",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 16,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.5rem .5rem",
  textAlign: "center"
};

const venues = [
  {
    label: "Travis County High"
  },
  {
    label: "Mccallum High"
  },
  {
    label: "San Marcos Academy"
  }
].map(venue => ({
  value: venue.label,
  label: venue.label
}));

const seasons = [
  {
    label: "Spring"
  },
  {
    label: "Summer"
  },
  {
    label: "Fall"
  }
].map(season => ({
  value: season.label,
  label: season.label
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  let errorMessage;
  if (props.selectProps.textFieldProps) {
    errorMessage = props.selectProps.textFieldProps.errors;
  }
  return (
    <TextField
      fullWidth
      variant="outlined"
      error={Boolean(
        errorMessage ? props.selectProps.textFieldProps.errors : ""
      )}
      helperText={errorMessage}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class SemesterForm extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;

    const {
      classes,
      theme,
      venue,
      errorVenue,
      errorDate,
      date,
      disabled,
      handleSemesterChange,
      handleSemesterClick
    } = this.props;

    const open = Boolean(anchorEl);

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      }),
      group: base => ({
        ...base,
        paddingTop: "0px"
      }),
      menuList: base => ({
        ...base,
        paddingTop: "0px"
      }),
      indicatorsContainer: base => ({
        ...base,
        cursor: "pointer"
      })
    };

    return (
      <React.Fragment>
        <Grid item xs={12} sm={12} md={7} className={classes.root}>
          <CardCustom
            visible
            padding
            borderBottom
            title="Select your school and semester season"
          >
            <Grid item container spacing={24}>
              <Grid item xs={12} sm={6}>
                <NoSsr>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    textFieldProps={{
                      errors: errorVenue,
                      InputLabelProps: {}
                    }}
                    options={venues}
                    components={components}
                    value={venue}
                    onChange={handleSemesterChange("venue")}
                    placeholder="School"
                    isClearable
                  />
                </NoSsr>
              </Grid>
              <Grid item xs={12} sm={6}>
                <NoSsr>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    textFieldProps={{
                      errors: errorDate,
                      InputLabelProps: {}
                    }}
                    options={seasons}
                    components={components}
                    value={date}
                    onChange={handleSemesterChange("date")}
                    placeholder="Season"
                    isClearable
                  />
                </NoSsr>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems="flex-end"
              className={classes.bottomContainer}
            >
              <Grid
                item
                className={classes.questionImgContainer}
                onClick={this.handleClick}
              >
                <img src={question} alt="click for more info" />
              </Grid>
              <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography variant="body1" className={classes.popover}>
                  Choose your school as the location. Please only sign up for
                  this course if you know your school is offering it. If you
                  have questions please call (512) 481-2485‬.
                </Typography>
              </Popover>
              <ButtonCustom
                variant="contained"
                disabled={disabled}
                onClick={() => {
                  handleSemesterClick();
                }}
                className={classes.button}
              >
                Next
              </ButtonCustom>
            </Grid>
          </CardCustom>
        </Grid>
      </React.Fragment>
    );
  }
}

SemesterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SemesterForm);
