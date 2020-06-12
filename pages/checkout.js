// Node Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import axios from "axios";
import { ValidatorForm } from "react-material-ui-form-validator";
import Validator from "validator";
import { Elements } from "react-stripe-elements";

// Local Components
import Panel from "../components/Panel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Program from "../components/Program";
import CardCustom from "../components/CardCustom";
import PaymentForm from "../components/forms/PaymentForm";
import BootcampForm from "../components/forms/BootcampForm";
import AcademicForm from "../components/forms/AcademicForm";
import ButtonCustom from "../components/ButtonCustom";

// Material UI Components
import AddressForm from "../components/forms/AddressForm";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// Local Assets
import * as colors from "../components/common/colors";
import SemesterForm from "../components/forms/SemesterForm";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  rootNovh: {
    height: "auto"
  },
  main: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px",
    maxWidth: "1200px"
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    alignSelf: "baseline"
  },
  locationOptionContainer1: {
    cursor: "pointer",
    backgroundColor: "whitesmoke",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  locationOptionContainer2: {
    cursor: "pointer",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  locationQuestionContainer: {
    padding: "30px 0px",
    [theme.breakpoints.up("sm")]: {
      padding: "40px 0px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "60px 0px"
    }
  },
  locationOption: {
    cursor: "pointer",
    "&:hover": {
      opacity: "0.7"
    }
  },
  locationSelectContainer: {
    height: "100%"
  },
  locationOption: {
    fontWeight: "300",
    cursor: "pointer",
    fontSize: "2rem",
    "&:hover": {
      opacity: "0.7"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem"
    }
  },
  locationOption2: {
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "2rem",
    "&:hover": {
      opacity: "0.7"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem"
    }
  },
  locationQuestion: {
    flexGrow: "1",
    fontSize: "1.525rem",
    marginLeft: "0px",
    fontWeight: "400",
    marginTop: "20px",
    paddingLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px",
      fontSize: "2rem",
      paddingLeft: "15px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 120px"
    }
  },
  locationQuestionNoBack: {
    fontSize: "1.525rem",
    fontWeight: "400",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem"
    }
  },
  locationQuestionText: {
    position: "relative",
    display: "block",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  zipWrapper: {
    height: "100%",
    flexGrow: 1,
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  zipContinueButton: {
    marginTop: "40px"
  },
  zipContainer: {
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  mainPanelSelect: {
    paddingTop: "20px"
  },
  mainPanel: {
    zIndex: "2",
    boxShadow: "0 18px 56px -18px rgba(22,45,61,.18)"
  },
  stepLabels: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      fontSize: "0.755rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem"
    }
  },
  titleContainer: {
    color: "white",
    ...colors.blueToTurquoise1,
    padding: "15px 10px"
  },
  checkoutTitle: {
    fontSize: "1.5rem"
  },
  bootcampLocationWrapper: {
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between"
    }
  },
  zipRoot: {
    maxWidth: "550px"
  },
  programWrapper: {
    flexDirection: "column",
    [theme.breakpoints.up(1100)]: {
      flexDirection: "row"
    }
  },
  locationSelectWrapper: {
    flexGrow: "1"
  },
  buttonContainer: {
    position: "initial",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: "0px"
    }
  }
});

const steps = ["Personal details", "Payment details", "Review your order"];

class Checkout extends Component {
  state = {
    activeStep: 0,
    formStep: 0,
    academicSelected: false,
    checked: true,
    disabled: false,
    programLevel: "",
    ccName: "",
    price: "",
    zip: "",
    errors: {},
    errorGrade: "",
    errorSubjects: "",
    telError: "",
    submitted: false,
    location: "distant",
    parentFirstName: "",
    parentLastName: "",
    studentFirstName: "",
    studentLastName: "",
    email: "",
    tel: "(  )    -    ",
    venue: null,
    date: null,
    errorVenue: "",
    errorDate: "",
    grade: null,
    subjects: "",
    token: {},
    tokenId: "",
    hours: 1,
    quantity: 1,
    totalPrice: "",
    expiryDate: ""
  };

  checkoutRef = React.createRef();

  componentDidMount() {
    console.log("outside", this.state.program);
    if (this.props.program == "Semester") {
      this.handleNext(2);
      console.log(this.state.program);
    }
  }

  handleNext = jumpToStep => {
    if (jumpToStep) {
      this.setState({
        activeStep: jumpToStep
      });
    } else {
      this.setState({
        activeStep: this.state.activeStep + 1
      });
    }
    window.scrollTo(0, 0);
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });

    this.validatorListener(true);
    window.scrollTo(0, 0);
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
    window.scrollTo(0, 0);
  };

  handleNextForm = () => {
    this.setState({
      formStep: this.state.formStep + 1
    });
  };

  handleBackForm = () => {
    this.setState({
      formStep: this.state.formStep - 1
    });
    this.validatorListener(true);
  };

  setLocationHandler = (page, location) => {
    this.setState({
      location: location
    });
    this.handleNext(page);
  };

  handleZipSubmit = () => {
    const zipData = {
      zip: this.state.zip
    };

    axios
      .post("/api/zip", zipData)
      .then(res => {
        if (res.data == "local") {
          this.handleNext();
          this.setState({
            errors: {}
          });
        } else {
          this.setState({
            location: "distant",
            errors: {}
          });
        }
        window.scrollTo(0, 0);
      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  };

  setProgramHandler = (currentProgramLevel, currentHours, currentPrice) => {
    this.setState({
      programLevel: currentProgramLevel,
      hours: currentHours,
      price: currentPrice,
      totalPrice: `${currentPrice * currentHours}00`
    });
    this.handleNext(3);
  };

  personalClickValidationHandler = () => {
    const { tel } = this.state;
    let mobileValidated;

    if (!Validator.isMobilePhone(tel)) {
      this.setState({
        telError: "Number is invalid",
        disabled: true
      });
    }
    if (Validator.isMobilePhone(tel)) {
      this.setState({
        telError: "",
        disabled: false
      });
      mobileValidated = true;
    }
    if (tel == "(  )    -    ") {
      this.setState({
        telError: "Number is required",
        disabled: true
      });
    }

    this.addressForm.isFormValid(false).then(isValid => {
      if (!isValid) {
        this.setState({ disabled: true });
      } else if (mobileValidated) {
        this.handleNextForm();
      } else {
        this.setState({ disabled: true });
      }
    });
  };

  validatorListener = result => {
    this.setState({ disabled: !result });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });

    if (name == "tel") {
      if (!Validator.isMobilePhone(e.target.value)) {
        this.setState({
          telError: "Number is invalid",
          disabled: true
        });
      }

      if (Validator.isMobilePhone(e.target.value)) {
        this.setState({
          telError: "",
          disabled: false
        });
      }

      if (Validator.isEmpty(e.target.value)) {
        this.setState({
          telError: "Number is required",
          disabled: true
        });
      }
    }

    if (name == "quantity") {
      this.setState({
        totalPrice: `${this.state.price * e.target.value * this.state.hours}00`
      });
    }
  };

  handleSelectChange = name => value => {
    this.setState({
      [name]: value
    });

    if (name == "subjects") {
      if (value.length == 0) {
        this.setState({
          errorSubjects: "At least one subject is required",
          disabled: true
        });
      } else {
        this.setState({
          errorSubjects: "",
          disabled: false
        });
      }
    }

    if (name == "grade") {
      if (value == null) {
        this.setState({
          errorGrade: "Grade is required",
          disabled: true
        });
      } else {
        this.setState({
          errorGrade: "",
          disabled: false
        });
      }
    }
  };

  handleSelectClick = () => {
    const { grade, subjects } = this.state;

    if (grade == null) {
      this.setState({
        errorGrade: "Grade is required",
        disabled: true
      });
    }

    if (subjects.length == 0) {
      this.setState({
        errorSubjects: "At least one subject is required",
        disabled: true
      });
    }
    if (grade !== null && subjects.length > 0) {
      this.handleAcademicSelected();
    }
  };

  handleBootcampClick = () => {
    const { venue, date } = this.state;

    if (venue == null) {
      this.setState({
        errorVenue: "School is required",
        disabled: true
      });
    }

    if (date == null) {
      this.setState({
        errorDate: "Date is required",
        disabled: true
      });
    }

    if (venue !== null && date !== null) {
      this.setProgramHandler("8 Hour", 8, 25);
      this.handleNext(3);
    }
  };

  handleBootcampChange = name => value => {
    this.setState({
      [name]: value
    });

    if (name == "venue") {
      if (value == null) {
        this.setState({
          errorVenue: "School is required",
          disabled: true
        });
      } else {
        this.setState({
          errorVenue: "",
          disabled: false
        });
      }
    }

    if (name == "date") {
      if (value == null) {
        this.setState({
          errorDate: "Date is required",
          disabled: true
        });
      } else {
        this.setState({
          errorDate: "",
          disabled: false
        });
      }
    }
  };

  handleSemesterClick = () => {
    const { venue, date } = this.state;

    if (venue == null) {
      this.setState({
        errorVenue: "School is required",
        disabled: true
      });
    }

    if (date == null) {
      this.setState({
        errorDate: "Season is required",
        disabled: true
      });
    }

    if (venue !== null && date !== null) {
      this.setProgramHandler("14 Week", 56, 20);
      this.handleNext(3);
    }
  };

  handleSemesterChange = name => value => {
    this.setState({
      [name]: value
    });

    if (name == "venue") {
      if (value == null) {
        this.setState({
          errorVenue: "School is required",
          disabled: true
        });
      } else {
        this.setState({
          errorVenue: "",
          disabled: false
        });
      }
    }

    if (name == "date") {
      if (value == null) {
        this.setState({
          errorDate: "Season is required",
          disabled: true
        });
      } else {
        this.setState({
          errorDate: "",
          disabled: false
        });
      }
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let purchaseData = {
      course: this.props.course,
      program: this.props.program,
      programLevel: this.state.programLevel,
      location: this.state.location,
      parentFirstName: this.state.parentFirstName,
      parentLastName: this.state.parentLastName,
      studentFirstName: this.state.studentFirstName,
      studentLastName: this.state.studentLastName,
      email: this.state.email,
      tel: this.state.tel,
      id: this.state.tokenId,
      totalPrice: this.state.totalPrice
    };

    if (this.props.program == "1-on-1" && this.props.course == "Academic") {
      purchaseData = {
        ...purchaseData,
        grade: this.state.grade.value,
        subjects: this.state.subjects
      };
    }
    if (
      this.props.program == "Bootcamp" ||
      this.props.program == "14 Week Course"
    ) {
      purchaseData = {
        ...purchaseData,
        venue: this.state.venue.value,
        date: this.state.date.value
      };
    }

    axios
      .post("/api/purchase", purchaseData)
      .then(res => {
        this.setState({ submitted: true, formStep: this.state.formStep + 1 });
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.log(err);
        this.setState({ errors: err.response.data });
      });
  };

  toggleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  setToken = token => {
    let expiryDate = `${token.card.exp_month}/${token.card.exp_year}`;
    let id = token.id;
    this.setState({
      token: token,
      tokenId: id,
      expiryDate: expiryDate
    });
    this.handleNextForm();
  };

  setDisabled = currentDisabled => {
    this.setState({
      disabled: currentDisabled
    });
  };

  handleAcademicSelected = () => {
    const { academicSelected } = this.state;
    this.setState({
      academicSelected: !academicSelected
    });
    window.scrollTo(0, 0);
  };

  handlePaymentInfo = () => {
    this.checkoutRef.current.submit();
  };
  render() {
    const { classes, program, course, link } = this.props;
    const {
      activeStep,
      programLevel,
      formStep,
      price,
      errors,
      location,
      parentFirstName,
      parentLastName,
      studentFirstName,
      studentLastName,
      email,
      tel,
      hours,
      disabled,
      subjects,
      errorSubjects,
      grade,
      errorGrade,
      venue,
      date,
      errorVenue,
      errorDate,
      academicSelected,
      quantity,
      expiryDate
    } = this.state;

    const pageTitle =
      activeStep == 0
        ? "How would you like to be tutored?"
        : activeStep == 1 && location == "local"
        ? "Enter your zip"
        : activeStep == 1 && location == "distant"
        ? "Coming soon to your area, but currently..."
        : activeStep == 2 && program == "1-on-1" && course !== "Academic"
        ? `Choose the 1-on-1 ${course} program that fits your needs`
        : activeStep == 2 && program == "Bootcamp"
        ? `${course} Bootcamp Date and Location`
        : activeStep == 2 && program == "Semester"
        ? `${course} Semester Long Course Season and Location`
        : activeStep == 2 && course == "Academic" && academicSelected == false
        ? `1-on-1 Academic Tutoring Grade and Subject`
        : activeStep == 2 && course == "Academic" && academicSelected == true
        ? `Choose the 1-on-1 ${course} program that fits your needs`
        : activeStep == 3 && formStep <= 2
        ? `Enroll in our ${programLevel} ${course} ${program} Program`
        : formStep == 3
        ? `Yay! You're Enrolled.`
        : null;

    const firstPage = (
      <Grid item container xs className={classes.locationSelectContainer}>
        <Grid
          item
          container
          xs={6}
          className={classes.locationOptionContainer1}
          onClick={() => {
            this.setLocationHandler(1, "local");
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              className={classes.locationOption}
            >
              In-person
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
          onClick={() => {
            this.setLocationHandler(2, "distant");
          }}
        >
          <CardCustom className={classes.locationOptionContainer2} square>
            <Typography variant="h3" className={classes.locationOption2}>
              Online
            </Typography>
          </CardCustom>
        </Grid>
      </Grid>
    );

    const secondPage = (
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className={classes.zipWrapper}
      >
        {location == "local" && (
          <Grid item xs={12} sm={7} md={5} className={classes.zipRoot}>
            <CardCustom
              padding
              borderBottom
              title="Let's make sure in-person tutoring is offered in your area."
            >
              <Grid item container justify="center">
                <TextField
                  error={Boolean(errors.zip)}
                  helperText={errors.zip}
                  value={this.state.zip}
                  onChange={this.handleChange("zip")}
                  variant="outlined"
                  id="zip"
                  name="zip"
                  label="Zip Code"
                  autoComplete="postalCode"
                />
              </Grid>
              <Grid item container justify="flex-end">
                <ButtonCustom
                  disabled={disabled}
                  variant="contained"
                  className={classes.zipContinueButton}
                  onClick={this.handleZipSubmit}
                >
                  Continue
                </ButtonCustom>
              </Grid>
            </CardCustom>
          </Grid>
        )}
        {location == "distant" && (
          <Grid item container direction="column" alignItems="center">
            <Typography
              variant="h5"
              className={classes.locationDistantText}
              align="center"
              paragraph
            >
              We only offer online tutoring services in your area.
            </Typography>
            <ButtonCustom
              variant="contained"
              onClick={() => {
                this.handleNext();
              }}
              className={classes.submit}
            >
              Continue to Online
            </ButtonCustom>
          </Grid>
        )}
      </Grid>
    );

    return (
      <React.Fragment>
        <div className={activeStep <= 1 ? classes.root : classes.rootNovh}>
          <Header
            noMargin
            backgroundColor="blueToTurquoise"
            classes={{ root: classes.headerPanelRoot }}
          />
          <Panel noMargin backgroundColor="white" className={classes.mainPanel}>
            <Grid item className={classes.locationQuestionContainer}>
              <Grid item className={classes.locationQuestionText}>
                <Grid item className={classes.buttonContainer}>
                  {activeStep == 0 && (
                    <Link href={link ? link : "/"}>
                      <ButtonCustom
                        color="white"
                        hasArrowLeftBlack
                        className={classes.returnHomeButton}
                      >
                        Back
                      </ButtonCustom>
                    </Link>
                  )}

                  {activeStep !== 0 && activeStep <= 2 && (
                    <React.Fragment>
                      {course == "Academic" &&
                      activeStep == 2 &&
                      academicSelected == true ? (
                        <ButtonCustom
                          color="white"
                          hasArrowLeftBlack
                          className={classes.handleBack}
                          onClick={this.handleAcademicSelected}
                        >
                          Back
                        </ButtonCustom>
                      ) : (
                        <ButtonCustom
                          color="white"
                          hasArrowLeftBlack
                          className={classes.handleBack}
                          onClick={this.handleReset}
                        >
                          Back
                        </ButtonCustom>
                      )}
                    </React.Fragment>
                  )}
                </Grid>

                <Typography
                  variant="h5"
                  align="center"
                  className={
                    activeStep <= 2
                      ? classes.locationQuestion
                      : classes.locationQuestionNoBack
                  }
                >
                  {pageTitle}
                </Typography>
              </Grid>
            </Grid>
          </Panel>
          <Panel
            noMargin
            noInnerPadding
            className={classes.locationSelectWrapper}
          >
            {activeStep <= 1 &&
              (() => {
                switch (activeStep) {
                  case 1:
                    return secondPage;
                  default:
                    return firstPage;
                }
              })()}
          </Panel>
        </div>

        {activeStep == 2 && (
          <Panel
            padding
            backgroundColor="whiteSmoke"
            className={classes.mainPanelSelect}
          >
            <div className={classes.main}>
              {course == "SAT" && program == "1-on-1" && (
                <Grid item container className={classes.programWrapper}>
                  <Program
                    checkout
                    left
                    summary
                    showPrice
                    price={70}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="Complete review of one SAT subject area. This program is best for students with limited study time or who only wish to focus on one part of the SAT."
                    highlights={[
                      "2 full SAT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials related to chosen SAT subject."
                    ]}
                    subtitle="14 Hour"
                    hours={14}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />
                  <Program
                    checkout
                    middle
                    summary
                    ribbon
                    showPrice
                    setProgramHandler={this.setProgramHandler}
                    price={50}
                    summaryText="The Rolls Royce of SAT Prep.  This program is highly tailored to student needs. We will work with you for however long it takes to reach your goals (the listed duration is only approximate). Choose to work in some or all parts of the SAT."
                    highlights={[
                      "Our most thorough course",
                      "3+ full SAT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials."
                    ]}
                    subtitle="Premiere"
                    hours={50}
                    sessionLength={"2 hours"}
                    button
                    buttonText="Select"
                  />
                  <Program
                    checkout
                    right
                    summary
                    showPrice
                    price={60}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="Complete review of 2 SAT subject areas with some exposure to the remaining 2 subject areas. This program is best for students with limited study time while still focusing on all parts of the SAT."
                    highlights={[
                      "2 full SAT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials."
                    ]}
                    subtitle="32 Hour"
                    hours={32}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />
                </Grid>
              )}
              {course == "ACT" && program == "1-on-1" && (
                <Grid item container className={classes.programWrapper}>
                  <Program
                    checkout
                    left
                    summary
                    showPrice
                    price={70}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="Complete review of one ACT subject area. This program is best for students with limited study time or who only wish to focus on one part of the ACT."
                    highlights={[
                      "2 full ACT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials related to chosen ACT subject."
                    ]}
                    subtitle="14 Hour"
                    hours={14}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />
                  <Program
                    checkout
                    middle
                    summary
                    ribbon
                    showPrice
                    setProgramHandler={this.setProgramHandler}
                    price={50}
                    summaryText="The Rolls Royce of ACT Prep.  This program is highly tailored to student needs. We will work with you for however long it takes to reach your goals (the listed duration is only approximate). Choose to work in some or all parts of the ACT."
                    highlights={[
                      "Our most thorough course",
                      "3+ full ACT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials."
                    ]}
                    subtitle="Premiere"
                    hours={50}
                    sessionLength={"2 hours"}
                    button
                    buttonText="Select"
                  />
                  <Program
                    checkout
                    right
                    summary
                    showPrice
                    price={60}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="Complete review of 2 ACT subject areas with some exposure to the remaining 2 subject areas. This program is best for students with limited study time while still focusing on all parts of the ACT."
                    highlights={[
                      "2 full ACT practice tests",
                      "Detailed progress reports",
                      "Full access to complementary online materials."
                    ]}
                    subtitle="32 Hour"
                    hours={32}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />
                </Grid>
              )}
              {course == "SAT" && program == "Bootcamp" && (
                <React.Fragment>
                  <Grid
                    item
                    container
                    justify="space-between"
                    className={classes.bootcampLocationWrapper}
                  >
                    <Program
                      left
                      noPaddingTop
                      summary
                      showPrice
                      price={25}
                      title="Program Details"
                      subtitle="8-hour Bootcamp"
                      hours={8}
                      sessionLength="4 hours"
                      summaryText="This isn't some droning lecture or seminar. This is a passionately delivered, motivation building, 
                      all-encompassing, BOOTCAMP. Over the course of one fiery weekend, students are equipped with every tip,
                       trick, and strategy in our arsenal to defeat the SAT.
                        This is the ultimate refresher for students who've been studying diligently
                        and the the ultimate cramming session for you procrastinators.
                      Students must arrive focused, prepared and on-time."
                      highlights={[
                        "Learn every key strategy before test day.",
                        "Lively and inspiring",
                        "Copy of our SAT prep book included"
                      ]}
                    />
                    <BootcampForm
                      handleChange={this.handleSelectChange}
                      date={date}
                      course={course}
                      venue={venue}
                      disabled={disabled}
                      errorVenue={errorVenue}
                      errorDate={errorDate}
                      handleBootcampClick={this.handleBootcampClick}
                      handleBootcampChange={this.handleBootcampChange}
                      handleNext={() => {
                        this.handleNext(4);
                      }}
                    />
                  </Grid>
                </React.Fragment>
              )}

              {course == "ACT" && program == "Bootcamp" && (
                <React.Fragment>
                  <Grid
                    item
                    container
                    justify="space-between"
                    className={classes.bootcampLocationWrapper}
                  >
                    <Program
                      left
                      noPaddingTop
                      summary
                      showPrice
                      price={25}
                      title="Program Details"
                      subtitle="8-hour Bootcamp"
                      hours={8}
                      sessionLength="4 hours"
                      summaryText="This isn't some droning lecture or seminar. This is a passionately delivered, motivation building, 
                      all-encompassing, BOOTCAMP. Over the course of one fiery weekend, students are equipped with every tip,
                       trick, and strategy in our arsenal to defeat the ACT.
                        This is the ultimate refresher for students who've been studying diligently
                        and the the ultimate cramming session for you procrastinators.
                      Students must arrive focused, prepared and on-time."
                      highlights={[
                        "Learn every key strategy before test day.",
                        "Lively and inspiring",
                        "Copy of our ACT prep book included"
                      ]}
                    />
                    <BootcampForm
                      setProgramHandler={this.setProgramHandler}
                      handleChange={this.handleSelectChange}
                      date={date}
                      venue={venue}
                      disabled={disabled}
                      errorVenue={errorVenue}
                      errorDate={errorDate}
                      handleBootcampClick={this.handleBootcampClick}
                      handleBootcampChange={this.handleBootcampChange}
                      handleNext={() => {
                        this.handleNext(4);
                      }}
                    />
                  </Grid>
                </React.Fragment>
              )}

              {course == "SAT" && program == "Semester" && (
                <React.Fragment>
                  <Grid
                    item
                    container
                    justify="space-between"
                    className={classes.bootcampLocationWrapper}
                  >
                    <Program
                      left
                      noPaddingTop
                      summary
                      showPrice
                      price={20}
                      title="Program Details"
                      subtitle="14-Week SAT Course"
                      sessions="70"
                      sessionLength="1 hour"
                      summaryText="This is not your everyday high-school class. 
                      At its basis, this course is a comprehensive review of all 4 parts of the SAT. 
                   Yet, each hour long session is 
                      packed with passionate delivery, unique perspectives, and motivation building.
                       Creativity and individualism are highly encouraged.
                       After 14 weeks, students will leave equipped with hundreds of tips,
                      tricks, and strategies to defeat the SAT. This is the ultimate refresher
                       for students who have diligently studied throughout high-school
                      and the the ultimate cramming session for those who have haven't been as focused. 
                      Only enroll in this course if you've been informed by your school that this course is being offered."
                      highlights={[
                        "Learn every key strategy before test day.",
                        "Lively and inspiring",
                        "Copy of our SAT prep book included"
                      ]}
                    />
                    <SemesterForm
                      setProgramHandler={this.setProgramHandler}
                      handleChange={this.handleSelectChange}
                      date={date}
                      venue={venue}
                      disabled={disabled}
                      errorVenue={errorVenue}
                      errorDate={errorDate}
                      handleSemesterClick={this.handleSemesterClick}
                      handleSemesterChange={this.handleSemesterChange}
                      handleNext={() => {
                        this.handleNext(4);
                      }}
                    />
                  </Grid>
                </React.Fragment>
              )}

              {course == "Academic" && academicSelected == false && (
                <React.Fragment>
                  <Grid item container justify="center">
                    <AcademicForm
                      handleChange={this.handleSelectChange}
                      subjects={subjects}
                      grade={grade}
                      disabled={disabled}
                      errorGrade={errorGrade}
                      errorSubjects={errorSubjects}
                      handleSelectClick={this.handleSelectClick}
                      handleNext={() => {
                        this.handleNext();
                      }}
                    />
                  </Grid>
                </React.Fragment>
              )}
              {course == "Academic" && academicSelected == true && (
                <Grid
                  item
                  container
                  justify="center"
                  className={classes.programWrapper}
                >
                  <Program
                    checkout
                    left
                    showPrice
                    summary
                    price={70}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="
                    Sessions focuses on building fundamental skills and
                    getting students up to speed on their current classwork."
                    highlights={[
                      "Focus on fundamental skills and current classwork",
                      "Best for students with limited time.",
                      "Includes 2 evalutions"
                    ]}
                    subtitle="14 Hour"
                    hours={14}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />

                  <Program
                    checkout
                    middle
                    ribbon
                    summary
                    showPrice
                    setProgramHandler={this.setProgramHandler}
                    price={50}
                    summaryText="The Rolls Royce of Academic Tutoring. This program is highly tailored to student needs. 
                    We will work with you for however long it takes to reach your goals (the listed duration is only approximate)."
                    highlights={[
                      "Tailored re-teaching of entire class",
                      "Major emphasis on building fundamental skills",
                      "Best for students who can dedicate significant time",
                      "Includes 4 evaluations"
                    ]}
                    subtitle="Premiere"
                    hours={50}
                    sessionLength={"2 hours"}
                    button
                    buttonText="Select"
                  />

                  <Program
                    checkout
                    right
                    summary
                    showPrice
                    price={60}
                    setProgramHandler={this.setProgramHandler}
                    summaryText="Sessions focus on building fundamental skills,
                    reviewing difficult chapters, and getting students up to speed on their current
                    classwork."
                    highlights={[
                      "Focus on fundamental skills, previously difficult chapters, and current classwork",
                      "Best for students with limited time",
                      "Includes 3 evaluations"
                    ]}
                    subtitle="32 Hour"
                    hours={32}
                    sessionLength={"2 hours"}
                    fullHeight
                    button
                    buttonText="Select"
                  />
                </Grid>
              )}
            </div>
          </Panel>
        )}

        {activeStep == 3 && (
          <React.Fragment>
            <Panel padding className={classes.mainPanelSelect}>
              <div className={classes.main}>
                <Grid item xs={12} sm={10} md={7} className={classes.layout}>
                  <CardCustom>
                    <Grid
                      item
                      container
                      justify="center"
                      className={classes.titleContainer}
                    >
                      <Typography
                        variant="overline"
                        align="center"
                        color="inherit"
                        className={classes.checkoutTitle}
                      >
                        Checkout
                      </Typography>
                    </Grid>
                    <Grid item className={classes.paper}>
                      <Stepper
                        activeStep={formStep}
                        className={classes.stepper}
                      >
                        {steps.map(label => (
                          <Step key={label}>
                            <StepLabel classes={{ label: classes.stepLabels }}>
                              {label}
                            </StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                      <React.Fragment>
                        {formStep === steps.length ? (
                          <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                              Thank you for your order.
                            </Typography>
                            <Typography variant="body1" paragraph>
                              We have emailed your order confirmation and we'll
                              contact you shortly.
                            </Typography>

                            <Link href="/">
                              <Grid item>
                                <ButtonCustom
                                  hasArrowLeft
                                  className={classes.returnHomeButton}
                                >
                                  Return Home
                                </ButtonCustom>
                              </Grid>
                            </Link>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {formStep == 0 && (
                              <ValidatorForm
                                ref={r => {
                                  this.addressForm = r;
                                }}
                                onError={errors => console.log(errors)}
                              >
                                <AddressForm
                                  telError={this.state.telError}
                                  handleChange={this.handleChange}
                                  parentFirstName={parentFirstName}
                                  parentLastName={parentLastName}
                                  studentFirstName={studentFirstName}
                                  studentLastName={studentLastName}
                                  email={this.state.email}
                                  validatorListener={this.validatorListener}
                                  tel={this.state.tel}
                                  toggleCheckbox={this.toggleCheckbox}
                                  checked={this.state.checked}
                                  handleNextForm={this.handleNextForm}
                                  formStep={this.state.formStep}
                                />
                              </ValidatorForm>
                            )}

                            {formStep == 1 && (
                              <React.Fragment>
                                <Elements>
                                  <PaymentForm
                                    setToken={this.setToken}
                                    setDisabled={this.setDisabled}
                                    innerRef={this.checkoutRef}
                                    parentFirstName={parentFirstName}
                                    parentLastName={parentLastName}
                                    studentFirstName={studentFirstName}
                                    studentLastName={studentLastName}
                                  />
                                </Elements>
                              </React.Fragment>
                            )}

                            {(() => {
                              switch (formStep) {
                                case 2:
                                  return (
                                    <Review
                                      program={program}
                                      course={course}
                                      price={price}
                                      hours={hours}
                                      programLevel={programLevel}
                                      parentFirstName={parentFirstName}
                                      parentLastName={parentLastName}
                                      studentFirstName={studentFirstName}
                                      studentLastName={studentLastName}
                                      tel={tel}
                                      email={email}
                                      quantity={quantity}
                                      handleChange={this.handleChange}
                                      // last4={token.card.last4}
                                      // brand={token.card.brand}
                                      expiryDate={expiryDate}
                                    />
                                  );
                                default:
                                  return null;
                              }
                            })()}
                            <div className={classes.buttons}>
                              {formStep !== 0 && (
                                <Button
                                  onClick={this.handleBackForm}
                                  className={classes.button}
                                >
                                  Back
                                </Button>
                              )}
                              {formStep == 0 && (
                                <React.Fragment>
                                  {course !== "Academic" && (
                                    <Button
                                      onClick={this.handleBack}
                                      className={classes.button}
                                    >
                                      Back
                                    </Button>
                                  )}

                                  {course == "Academic" && (
                                    <Button
                                      onClick={this.handleBack}
                                      className={classes.button}
                                    >
                                      Back
                                    </Button>
                                  )}
                                </React.Fragment>
                              )}

                              <ButtonCustom
                                variant="contained"
                                disabled={disabled}
                                onClick={
                                  formStep == 2
                                    ? this.handleFormSubmit
                                    : formStep == 1
                                    ? this.handlePaymentInfo
                                    : formStep == 0
                                    ? this.personalClickValidationHandler
                                    : null
                                }
                                className={classes.button}
                              >
                                {formStep === steps.length - 1
                                  ? "Place order"
                                  : "Next"}
                              </ButtonCustom>
                            </div>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    </Grid>
                  </CardCustom>
                </Grid>
              </div>
            </Panel>
          </React.Fragment>
        )}

        <Footer />
      </React.Fragment>
    );
  }
}

Checkout.getInitialProps = async ({ query }) => {
  return { course: query.course, program: query.program, link: query.link };
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
