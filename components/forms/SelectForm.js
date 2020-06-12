import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import ButtonCustom from "../ButtonCustom";

const grades2 = [
  {
    value: "12th",
    label: "12th"
  }
];
const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const grades = [
  { label: "" },
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    padding: "14.5px 14px",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: `0px ${theme.spacing.unit / 4}px`
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
    zIndex: 2,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  },
  groupStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14.5px 14px",
    fontWeight: "500",
    fontSize: 16,
    color: "#d3d3d3"
  },
  groupBadgeStyles: {
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    textAlign: "center"
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

  borderBottom: "1px solid lightgrey",
  fontSize: 18,
  color: "#d3d3d3"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 16,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.26666666666667rem .5rem",
  textAlign: "center"
};

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
  return (
    <TextField
      fullWidth
      variant="outlined"
      error={Boolean(props.errors.subjects)}
      helperText={props.errors.subjects}
      InputProps={{
        error: Boolean(props.errors.subjects),
        helperText: props.errors.subjects,
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

function GroupHeading(props) {
  return <Typography {...props.innerProps}>{props.children}</Typography>;
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  GroupHeading
};

class SelectForm extends React.Component {
  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      classes,
      theme,
      handleChange,
      subjects,
      grade,
      disabled,
      errors,
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
      })
    };
    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={grades}
            components={components}
            value={grade !== "" ? grade : null}
            onChange={handleChange("grade")}
            placeholder="Grade"
            isClearable
          />
          <div className={classes.divider} />
          <Select
            classes={classes}
            options={groupedSubjects}
            formatGroupLabel={formatGroupLabel}
            styles={selectStyles}
            textFieldProps={{
              errors: errors,
              InputLabelProps: {}
            }}
            components={components}
            variant="outlined"
            value={subjects !== "" ? subjects : null}
            placeholder="Subject/Subjects"
            onChange={handleChange("subjects")}
            isMulti
          />
        </NoSsr>
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
      </div>
    );
  }
}

SelectForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SelectForm);
