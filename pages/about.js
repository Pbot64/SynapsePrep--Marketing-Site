// Node Modules
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import brain from "../static/images/brain.svg";
import about from "../static/images/about.svg";
// Material UI Components

// Local Components

import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import CardCustom from "../components/CardCustom";
import { Divider } from "@material-ui/core";

// Local Assets

//  Style Overrides
const styles = theme => ({
  vhWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      height: "100vh"
    }
  },
  panel1: {
    display: "flex",
    alignItems: "center",
    flexGrow: "0",
    paddingTop: "50px",
    marginBottom: "100px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "0px",
      paddingBottom: "0px",
      paddingTop: "0px",
      flexGrow: "1"
    }
  },
  mainTitle: {
    fontSize: "3rem",
    paddingBottom: "30px",
    "&:after": {
      content: '""',
      display: "block",
      width: "100px",
      paddingTop: "30px",
      borderBottom: "10px solid rgba(104, 224, 207, 1)"
    }
  },
  brainImgContainer: {
    maxWidth: "350px"
  },
  brainImg: {
    minWidth: "250px",

    width: "100%"
  },
  panel2: {
    marginBottom: "100px",
    borderTop: "2px solid black",
    borderBottom: "2px solid black"
  },
  copyTop: {
    lineHeight: "1.5",
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.125rem"
    }
  },
  copyMainContainer: {
    color: "white",
    paddingBottom: "80px",
    paddingTop: "40px"
  },
  aboutImg: {
    width: "100%",
    margin: "100px 0px",
    borderTop: "2px solid black",
    borderBottom: "2px solid black"
  },
  didacticContainer: {},
  divider: {
    margin: "20px 0px",
    background: "linear-gradient(224deg, #209cff 0%, #68e0cf 100%)"
  },
  copy: {
    lineHeight: "1.6",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  },
  copyBottom: {
    lineHeight: "1.6",
    marginTop: "50px",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  },
  title: {
    fontSize: "1.8rem",
    backgroundImage: "linear-gradient(224deg, #209cff 0%, #68e0cf 100%)",
    color: "transparent",
    "-webkit-background-clip": "text",
    backgroundClip: "text",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem"
    }
  },
  goalTitle: {
    color: "white",
    marginTop: "80px",
    fontSize: "1.8rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem"
    }
  },
  panel4: {
    marginBottom: "150px"
  }
});

const About = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.vhWrapper}>
        <Header noMargin backgroundColor="blueToTurquoise" />
        <Panel autoHeight className={classes.panel1}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={32}
          >
            <Grid item xs={12} sm={12} md={8}>
              <Typography
                variant="overline"
                component="h2"
                className={classes.mainTitle}
              >
                Our Story
              </Typography>
              <Typography variant="h4" className={classes.copyTop}>
                Synapse Prep (Synapse Test Prep when it's being stubborn) was
                founded all the way back in 2018 to challenge the educational
                industrial complex.
              </Typography>
            </Grid>
            <Grid item xs>
              <Grid container justify="center">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md
                  className={classes.brainImgContainer}
                >
                  <img src={brain} alt="brain" className={classes.brainImg} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Panel>
      </Grid>
      <Panel backgroundColor="blueToTurquoise" className={classes.panel2}>
        <Typography
          align="center"
          variant="overline"
          component="h3"
          className={classes.goalTitle}
        >
          Purpose
        </Typography>
        <Grid container className={classes.copyMainContainer}>
          <Typography variant="h5" color="inherit" className={classes.copy}>
            Despite both public pressure and the individual effort of many
            amazing teachers, educational reform has been slow or nonexistent.
            The impracticality of repairing such an broken institution meant a
            different approach was needed. Rather than attempt to fix our deeply
            broken educational system, our founders realized it would be more
            feasible to create a modern alternative to it.
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            className={classes.copyBottom}
          >
            Developing a comprehensive and viable alternative to traditional
            schooling is a major undertaking and will take many years to
            complete. Therefore, our short-term focus is to assist and
            supplement traditional schooling with unique curriculum, world class
            tutors, and novel tech.
          </Typography>
        </Grid>
      </Panel>
      <Panel>
        <Grid container justify="center" className={classes.didacticContainer}>
          <Grid item xs={12} sm={10} md={9}>
            <CardCustom padding>
              <Typography
                align="center"
                variant="overline"
                component="h3"
                className={classes.title}
              >
                Didactic System
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.copy}>
                Prior to conceiving Synapse Prep, our founders taught at a
                variety of tutoring companies. This provided the ideal
                environment to experiment with different didactics (including
                their own). They discovered that every company taught things
                that worked and things that didn't. So they had an idea, "What
                if we got rid of the things that don't work and keep the things
                that do work——combining them into a single, highly effective
                didactic system." This was an excellent start, but Synapse Prep
                had to be more than just the amalgamation of the most effective
                tips, tricks, and strategies from across the industry...
              </Typography>
            </CardCustom>
          </Grid>
        </Grid>
      </Panel>
      <Panel noInnerPadding>
        <img src={about} alt="brain" className={classes.aboutImg} />
      </Panel>
      <Panel className={classes.panel4}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={9}>
            <CardCustom padding>
              <Typography
                variant="overline"
                component="h3"
                align="center"
                className={classes.title}
              >
                Pedagogy
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.copy}>
                For decades, test prep companies have been churning out stale,
                monotonous, and overly-complicated guides. Why was the world of
                test prep so bleak and colorless? It wasn't on purpose. The
                personalities attracted to a career in standardized testing
                tended to be just that: 'standardized', orderly, formal,
                routine, etc. They were probably called 'squares' growing up and
                weren't invited to many parties. It's no wonder they feel at
                home in the world of test prep.
              </Typography>
              <Typography variant="h5" className={classes.copyBottom}>
                Now, there's nothing inherently wrong with this. Some people
                thrive off of dry, highly technical instruction. But it
                conflicts with the way the vast majority of students regularly
                assess and communicate ideas. Synapse Prep was going to be
                different. Our founders believe test prep can be fun,
                straight-forward, humorous, easy to follow, and even a little
                edgy. It is this unique philosophy——molded from the worldview of
                John Taylor Gatto and Richard Feynman—together with our highly
                refined didactic methods and cutting-edge tech that is helping
                transform the learning experience of students.
              </Typography>
            </CardCustom>
          </Grid>
        </Grid>
      </Panel>

      <Footer />
    </React.Fragment>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
