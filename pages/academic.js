// Node Modules
import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Local Components
import Link from "next/link";
import Header from "../components/Header";
import ButtonCustom from "../components/ButtonCustom";
import CardCustom from "../components/CardCustom";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import Category from "../components/Category";
import ContactForm from "../components/forms/ContactForm";
import Program from "../components/Program";

// Material UI Components
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Local Assets
import academic from "../static/images/academic-graphic.svg";
import lightningIcon from "../static/images/lightning-icon.svg";
import line from "../static/images/Icon-Line.svg";
import inequality from "../static/images/Icon-Inequality.svg";
import chevronDown from "../static/images/chevron-down.svg";
import parabola from "../static/images/Icon-Parabola.svg";
import flasks from "../static/images/Icon-Flasks.svg";
import social from "../static/images/Icon-Social.svg";
import fist from "../static/images/Icon-Fist.svg";
import handshake from "../static/images/Icon-HandShake.svg";
import clock from "../static/images/Icon-Clock.svg";
import stats from "../static/images/Icon-Stats.svg";
import considering from "../static/images/Icon-Considering.svg";
import book from "../static/images/Icon-English.svg";
import triangle from "../static/images/triangle-icon.svg";
import online from "../static/images/online-course.png";
import tutor from "../static/images/1-on-1-tutoring.jpg";
import bootcamp from "../static/images/bootcamp.png";
import nodes from "../static/images/nodes.svg";

import atom from "../static/images/Icon-Atom.svg";
import { Button, Divider } from "@material-ui/core";

//  Style Overrides
const styles = theme => ({
  academicGraphicContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  academicGraphic: {
    maxWidth: "900px"
  },
  panel1: {},
  panel4Covered: {
    color: "white",
    paddingBottom: "60px"
  },
  mainTextContainer: {
    height: "100%",
    paddingLeft: "0px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "50px"
    }
  },
  mainText: {
    fontSize: "1.6rem",
    lineHeight: "3",
    textAlign: "center",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },
  panelHeader: {
    color: "white",
    maxWidth: "600px",
    margin: "50px 0px"
  },
  panelTitle: {
    marginTop: "35px",
    marginBottom: "10px"
  },
  panelSubtitle: {
    fontWeight: "500",
    marginTop: "20px",
    fontSize: "12px"
  },
  smallIcon: {
    width: "80px"
  },
  categoryWrapper: {
    "& >": {
      "& :nth-child(odd)": {
        marginTop: "100px"
      },
      "& :first-child": {
        animationDelay: ".5s",
        marginLeft: "-60px",
        [theme.breakpoints.up(460)]: {
          marginLeft: "0px"
        }
      },
      "& :nth-child(2)": {
        animationDelay: "1s"
      },
      "& :nth-child(3)": {
        animationDelay: "1.5s",
        marginRight: "-60px",
        [theme.breakpoints.up(460)]: {
          marginRight: "0px"
        }
      },
      "& :nth-child(4)": {
        animationDelay: "2s",
        display: "none",
        [theme.breakpoints.up(750)]: {
          display: "flex"
        }
      },
      "& :nth-child(5)": {
        animationDelay: "2.5s",
        display: "none",
        [theme.breakpoints.up(750)]: {
          display: "flex"
        }
      },
      "& :nth-child(6)": {
        animationDelay: "3s",
        display: "none",
        [theme.breakpoints.up(1030)]: {
          display: "flex"
        }
      },
      "& :nth-child(7)": {
        animationDelay: "3.5s",
        display: "none",
        [theme.breakpoints.up(1030)]: {
          display: "flex"
        }
      }
    }
  },
  category: {
    animation: "float 4s infinite"
  },
  "@keyframes float": {
    "0%": {
      transform: "translatey(0)"
    },

    "50%": {
      transform: "translatey(-10px)"
    },

    to: {
      transform: "translatey(0)"
    }
  },
  topicRowContainer: {
    width: "fit-content"
  },
  checkoutPanel: {
    marginBottom: "100px"
  },
  programsPanel: {
    marginBottom: "100px",
    marginTop: "30px",
    color: "white",
    paddingBottom: "0px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "50px"
    }
  },
  programImg: {
    display: "block",
    width: "100%"
  },
  programContainer: {
    paddingRight: "0px",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      paddingRight: "30px",
      marginBottom: "0px"
    },
    "& h3": {
      marginBottom: "10px"
    }
  },
  programContainerMiddle: {
    paddingLeft: "0px",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30px",
      marginBottom: "0px"
    },
    "& h3": {
      marginBottom: "10px"
    }
  },
  programWrapperMiddle: {
    marginTop: "100px",
    marginBottom: "100px",
    flexDirection: "column-reverse",
    alignContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "40px",
      marginBottom: "40px",
      flexDirection: "row"
    }
  },
  programWrapper: {
    marginTop: "20px",
    justifyContent: "center",

    [theme.breakpoints.up(1100)]: {
      display: "flex",
      flexDirection: "row"
    }
  },
  programImgContainer: {
    borderRadius: "10px"
  },
  copyCard: {
    zIndex: "5",
    padding: "40px",
    position: "relative",
    maxWidth: "800px",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  chevronDown: {
    width: "80px"
  },
  copyContainer: {
    paddingBottom: "200px",
    marginTop: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    "padding-left": "16px",
    "padding-right": "16px",
    [theme.breakpoints.up("sm")]: {
      "padding-left": "24px",
      "padding-right": "24px"
    }
  },
  nodes: {
    position: "absolute",
    zIndex: "-1",
    top: "400px",
    transform: "scaleY(-1)",
    right: "-10px",
    width: "800px"
  },
  mainCopyTitle: {
    fontSize: "2.0rem",
    borderBottom: "2px solid #4fa3eb",
    paddingBottom: "20px"
  },
  mainCopy: {
    paddingTop: "20px"
  },
  mainCopyItalic: {
    paddingTop: "20px",
    fontStyle: "italic"
  },
  mainCopyBold: {
    paddingTop: "20px",
    fontWeight: "500"
  },
  mainCopyBoldUnderline: {
    paddingTop: "20px",
    fontWeight: "500",
    textDecoration: "underline"
  },
  toggleExpand: {
    display: "inline-block",
    cursor: "pointer",
    color: "#9866df",
    marginTop: "20px",
    "&:hover": {
      opacity: 0.7
    }
  },
  divider: {
    marginTop: "50px",
    marginBottom: "20px"
  }
});

const Academic = props => {
  const { classes } = props;
  const [expanded, setExpanded] = useState(false);

  // handleExpand = (expanded, currentExpand) => {
  //   this.setState({
  //     [expanded]: currentExpand
  //   });
  // };
  return (
    <React.Fragment>
      <Header backgroundColor="pinkToPurple" />
      <Panel padding backgroundColor="white" className={classes.panel1}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs className={classes.academicGraphicContainer}>
            <img
              src={academic}
              alt="academic"
              className={classes.academicGraphic}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.mainTextContainer}
          >
            <Grid item>
              <Typography
                variant="h4"
                color="textPrimary"
                paragraph
                className={classes.mainText}
              >
                Actually understand the chapters
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                paragraph
                className={classes.mainText}
              >
                Stop feeling confused in class
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                paragraph
                className={classes.mainText}
              >
                Build confidence as your GPA soars
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Panel>
      <Panel
        hidden
        skewed
        skewedBackgroundColor="pinkToPurple"
        className={classes.panel4Covered}
      >
        <Grid container justify="center">
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            className={classes.panelHeader}
          >
            <img
              className={classes.smallIcon}
              src={lightningIcon}
              alt="triangle icon"
            />
            <Typography
              variant="overline"
              color="inherit"
              component="h3"
              className={classes.panelSubtitle}
            >
              Comprehensively Comprehesive
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              align="center"
              className={classes.panelTitle}
            >
              We Have You Covered
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              align="center"
              paragraph
            >
              Our tutors are equipped to help you tackle any subject. From
              english to math, from grade school to grad school.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          className={classes.categoryWrapper}
        >
          <Category
            src={inequality}
            title="Algebra"
            className={classes.category}
            alt="Algrebra"
          />
          <Category
            src={flasks}
            title="Chemistry"
            className={classes.category}
            alt="Chemistry"
          />
          <Category
            src={atom}
            title="Physics"
            className={classes.category}
            alt="Physics"
          />
          <Category
            src={book}
            title="English"
            className={classes.category}
            alt="English"
          />
          <Category
            src={line}
            title="Geometry"
            className={classes.category}
            alt="Geometry"
          />
          <Category
            src={clock}
            title="History"
            className={classes.category}
            alt="History"
          />
          <Category
            src={stats}
            title="Statistics"
            className={classes.category}
            alt="Statistics"
          />
        </Grid>
      </Panel>
      <Panel noInnerPadding hidden className={classes.panelMainCopy}>
        <img src={nodes} alt="nodes" className={classes.nodes} />
        <Grid item className={classes.copyContainer}>
          <Grid item container justify="center">
            <img src={chevronDown} className={classes.chevronDown} />
          </Grid>
          <CardCustom padding className={classes.copyCard}>
            <Typography
              variant="overline"
              component="h3"
              color="inherit"
              align="center"
              className={classes.mainCopyTitle}
            >
              A Great Explainer on your side
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyItalic}
            >
              What the heck is a 'great explainer'?
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyBold}
            >
              A great explainer is an unparalleled, world class tutor!
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyItalic}
            >
              Wow. I'm totally convinced. Where's the checkout?
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopy}
            >
              Really?
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyItalic}
            >
              Pfft, NO. What makes your 'great explainers' so special?
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopy}
            >
              You're right to be skeptical; any tutoring service can claim to be
              world class. No one is going to advertise being average or
              incompetent:
            </Typography>

            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyBold}
            >
              "Second-rate tutors at first-rate prices!"
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopyBold}
            >
              "Some guy we briefly chatted with on Skype will come to your
              home!"
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.mainCopy}
            >
              Instead, the reality is a steady stream of posturing from tutoring
              companies claiming to be the best. The vast majority of whom base
              their claim on the same two reasons: 1) positive testimonials, and
              alleged 2) Ivy-League credentials.
            </Typography>
            {expanded && (
              <React.Fragment>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyBoldUnderline}
                >
                  1) Testimonials
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  "Big Prep Company has like the best tutors ever!" - Andrew A.,
                  student
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  “A Big Prep Company tutor was just what our daughter/son
                  needed to get into Yale. She/he is now well on their way
                  toward a lucrative job that will help support us in
                  retirement!” - Sam J., parent
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  Not pointing any fingers, but we suspect some companies may be
                  writing their own testimonials.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  Even authentic testimonials can be deceptive though. Students
                  generally leave positive feedback for passive tutors who don't
                  challenge them, while parents tend to leave positive feedback
                  for short-term grade increases often achieved via
                  regurgitation and content exposure.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyBoldUnderline}
                >
                  2) Ivy-League Credentials
                </Typography>

                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  This is one is our favorite——as if you need a degree from
                  Harvard to explain geometry to a 9th grader. The problem with
                  'Ivy League' alumni as tutors is two-fold. First, they tend to
                  use overly technical language. Second, they see tutoring as a
                  short-term gig while they focus their energy on finding a
                  better job!
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyBold}
                >
                  That's not world class to us.
                </Typography>

                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  Sure, some of our tutors have attend prestigious schools, but
                  it's not something we emphasize. Rather, our tutors are
                  handpicked first and foremost for their infectious enthusiasm
                  for thinking and teaching. This passion is why our students
                  often leave us with a newfound appreciation for academia and
                  learning. Of course, it takes more to be a great explainer——
                  people can be passionate about all kinds of things they suck
                  at. Therefore, our tutors must also demonstrate true
                  understanding of their subject matter (not rote memorization).
                  Finally, a great explainer must possess one last, far rarer
                  skill: the ability to actually explain things well.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  Um, isn’t that what tutors do?
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  Yea, it doesn't sound like much on the surface, but it’s what
                  our student success is predicated on. There are many
                  knowledgeable and passionate people out there, but only a
                  small fraction are truly great at explaining what they know to
                  children/young adults. Our selectivity——ensuring every hire
                  qualifies as a great explainer——is what allows us to proudly
                  attest to the world class caliber of our tutors. And once you
                  or your child is paired up with one of our great explainers,
                  you'll experience the difference firsthand as you meet and
                  surpass your educational goals.
                </Typography>
                <Divider className={classes.divider} />
                <Typography
                  variant="h5"
                  color="inherit"
                  className={classes.mainCopy}
                >
                  7 Qualities of a Great Explainer
                </Typography>

                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  1) Encourages creative problem solving and freedom to think
                  differently rather than restricting students to a single
                  ‘correct’ approach.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  2) Breaks down complex concepts into simpler illustrations and
                  analogies that can be more easily digested.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  3) Develops creative mnemonic devices to help students who are
                  short on time to solidify difficult material.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  4) Makes sure students are comfortable with the present
                  concept before progressing forward.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  5) Doesn't blindly accept a student's own assurances, but
                  instead, allows them to demonstrate their competency.
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  6) Possesses a tireless patience projected through steady
                  encouragement--carefully avoiding a patronizing tone
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.mainCopyItalic}
                >
                  7) Is clear, concise, and comprehensive, all while having a
                  wonderful sense of humor and playful irreverence.
                </Typography>
              </React.Fragment>
            )}

            <Typography
              className={classes.toggleExpand}
              variant="subtitle2"
              color="inherit"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {expanded ? "Show Less" : "Show More"}
            </Typography>
          </CardCustom>
        </Grid>
      </Panel>
      <Panel
        color="white"
        skewedBackgroundColor="blueToPurple"
        skewed
        forward
        className={classes.programsPanel}
        header
        smallIcon={triangle}
        title="1-on-1 Programs"
        subtitle="FOR EVERY BUDGET AND TIME CONSTRAINT
        "
        body="Whether you're blue-collar or a trustafarian, a go-getter or procrastinator, a teacher's pet or truant, we've got the program for you!"
      >
        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapper}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              14 Hour Program
            </Typography>
            <Typography variant="body1" color="inherit">
              Starting with an evaluation to pinpoint strengths and weaknesses,
              a personalized tutoring program is developed that focuses on
              building fundamental skills and getting students up to speed on
              their current classwork. This program is best suited for students
              with limited study time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={online} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapperMiddle}
        >
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={tutor} className={classes.programImg} />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainerMiddle}
          >
            <Typography variant="h4" color="inherit" component="h4">
              32 hour Program
            </Typography>
            <Typography variant="body1" color="inherit">
              Starting with an evaluation to pinpoint strengths and weaknesses,
              a personalized tutoring program is developed that focuses on
              building fundamental skills, reviewing difficult chapters, and
              getting students up to speed on their current classwork. This
              program is best suited for students with limited study time while
              still covering a lot of material.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="space-between"
          className={classes.programWrapper}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            container
            direction="column"
            justify="center"
            className={classes.programContainer}
          >
            <Typography variant="h4" color="inherit" component="h4">
              Premiere Program
            </Typography>
            <Typography variant="body1" color="inherit">
              This is the Rolls Royce of tutoring programs. Following
              evaluation, a highly tailored re-teaching of the student's entire
              class is developed with strong emphasis on biulding fundamental
              skills. Notice there's no hours listed? That's because we will
              work with you for however long it takes to reach your goals. This
              program is best suited for students with significant time to
              study.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={5}>
            <Card className={classes.programImgContainer}>
              <img src={bootcamp} className={classes.programImg} />
            </Card>
          </Grid>
        </Grid>
      </Panel>
      <Panel className={classes.checkoutPanel}>
        <Typography variant="h3" gutterBottom align="center">
          Which One Works For You?
        </Typography>
        <Grid
          item
          container
          justify="center"
          className={classes.programWrapper}
        >
          <Program
            left
            highlights={[
              "Focus on fundamental skills and current classwork",
              "Best for students with limited time",
              "Includes 2 evalutions"
            ]}
            subtitle="14 Hour"
            to="/checkout?course=Academic&program=1-on-1&link=/academic"
            as="/checkout/Academic/1-on-1"
            button
            buttonText="See Pricing"
            fullHeight
            showexpectedPoints
            expectedPoints="10+"
          />

          <Program
            middle
            ribbon
            highlights={[
              "Tailored re-teaching of entire class",
              "Major emphasis on building fundamental skills",
              "Best for students who can dedicate significant time",
              "Includes 4+ evaluations"
            ]}
            subtitle="Premiere"
            to="/checkout?course=Academic&program=1-on-1&link=/academic"
            as="/checkout/Academic/1-on-1"
            button
            buttonText="See Pricing"
            showexpectedPoints
            expectedPoints="23+"
          />

          <Program
            right
            highlights={[
              "Focus on fundamental skills, previously difficult chapters, and current classwork",
              "Best for students with limited time",
              "Includes 3 evaluations"
            ]}
            subtitle="32 Hour"
            to="/checkout?course=Academic&program=1-on-1&link=/academic"
            as="/checkout/Academic/1-on-1"
            button
            buttonText="See Pricing"
            fullHeight
            showexpectedPoints
            expectedPoints="15+"
          />
        </Grid>
      </Panel>
      <ContactForm />

      <Footer />
    </React.Fragment>
  );
};

Academic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Academic);
