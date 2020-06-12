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
    marginBottom: "200px"
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
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.5rem .5rem",
  textAlign: "center"
};

const grades = [
  { label: "College" },
  { label: "12th" },
  { label: "11th" },
  { label: "10th" },
  { label: "9th" },
  { label: "8th" },
  { label: "7th" },
  { label: "6th" },
  { label: "5th" },
  { label: "4th" },
  { label: "3rd" },
  { label: "2nd" },
  { label: "1st" },
  { label: "K" }
].map(grade => ({
  value: grade.label,
  label: grade.label
}));

const mathSubjects = [
  { label: "Algebra I" },
  { label: "Algebra II" },
  { label: "Calculus I" },
  { label: "Calculus II" },
  { label: "Geometry" },
  { label: "Pre-Calculus" },
  { label: "Trigonometry" },
  { label: "Statistics I" },
  { label: "Statistics II" }
].map(mathSubjects => ({
  value: mathSubjects.label,
  label: mathSubjects.label
}));

const physicalScienceSubjects = [
  { label: "A&P" },
  { label: "Biology" },
  { label: "Computer Science" },
  { label: "Earth/Environmental" },
  { label: "General Chemistry" },
  { label: "Organic Chemistry" },
  { label: "Physics 1" },
  { label: "Physics 2" },
  { label: "Statistics I" },
  { label: "Statistics II" }
].map(physicalScienceSubjects => ({
  value: physicalScienceSubjects.label,
  label: physicalScienceSubjects.label
}));

const socialScienceSubjects = [
  { label: "American Government" },
  { label: "Anthropology" },
  { label: "Earth/Environmental" },
  { label: "Economics" },
  { label: "Geography" },
  { label: "Psychology" },
  { label: "Sociology" },
  { label: "US History" },
  { label: "World History" }
].map(socialScienceSubjects => ({
  value: socialScienceSubjects.label,
  label: socialScienceSubjects.label
}));

const groupedSubjects = [
  {
    label: "Physical Science",
    options: physicalScienceSubjects
  },
  {
    label: "Social Science",
    options: socialScienceSubjects
  },
  {
    label: "Math",
    options: mathSubjects
  }
];

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

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

class AcademicForm extends Component {
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

    const open = Boolean(anchorEl);

    const {
      classes,
      theme,
      handleChange,
      subjects,
      grade,
      disabled,
      errorGrade,
      errorSubjects,
      handleNext,
      handleSelectClick
    } = this.props;

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
        <Grid item xs={12} sm={12} md={9} className={classes.root}>
          <CardCustom
            visible
            padding
            borderBottom
            title="Select the grade and subject (or subjects) you'd like help with"
          >
            <Grid item container spacing={24}>
              <Grid item xs={12} sm={4}>
                <NoSsr>
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    textFieldProps={{
                      errors: errorGrade,
                      InputLabelProps: {}
                    }}
                    options={grades}
                    components={components}
                    value={grade}
                    onChange={handleChange("grade")}
                    placeholder="Grade"
                    isClearable
                  />
                </NoSsr>
              </Grid>
              <Grid item xs={12} sm={8}>
                <NoSsr>
                  <Select
                    classes={classes}
                    options={groupedSubjects}
                    formatGroupLabel={formatGroupLabel}
                    styles={selectStyles}
                    textFieldProps={{
                      errors: errorSubjects,
                      InputLabelProps: {}
                    }}
                    components={makeAnimated(components)}
                    variant="outlined"
                    value={subjects}
                    placeholder="Subject/Subjects"
                    onChange={handleChange("subjects")}
                    isMulti
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
                  If you have questions, please call (512) 481-2485‬.
                </Typography>
              </Popover>
              <ButtonCustom
                variant="contained"
                disabled={disabled}
                onClick={() => {
                  handleSelectClick();
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

AcademicForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AcademicForm);
