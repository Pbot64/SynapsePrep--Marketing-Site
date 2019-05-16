// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local Components
import Link from 'next/link';
import Header from '../components/Header';
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import Category from '../components/Category';
import ContactForm from '../components/ContactForm';

// Material UI Components
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Local Assets
import academic from '../assets/images/academic-graphic.svg';
import lightningIcon from '../assets/images/lightning-icon.svg';
import line from '../assets/images/Icon-Line.svg';
import inequality from '../assets/images/Icon-Inequality.svg';
import parabola from '../assets/images/Icon-Parabola.svg';
import flasks from '../assets/images/Icon-Flasks.svg';
import social from '../assets/images/Icon-Social.svg';
import fist from '../assets/images/Icon-Fist.svg';
import handshake from '../assets/images/Icon-HandShake.svg';
import clock from '../assets/images/Icon-Clock.svg';
import considering from '../assets/images/Icon-Considering.svg';

import ProgramsForm from '../components/ProgramsForm';

//  Style Overrides
const styles = theme => ({
  academicGraphicContainer: {},
  academicGraphic: {
    maxWidth: '900px',
  },
  panel1: {
    marginTop: '50px',
  },
  panel4Covered: {
    color: 'white',
  },
  panelHeader: {
    color: 'white',
    maxWidth: '600px',
    margin: '50px 0px',
  },
  panelTitle: {
    marginTop: '50px',
    marginBottom: '10px',
  },
  panelSubtitle: {
    fontWeight: '500',
    marginTop: '20px',
    fontSize: '12px',
  },
  smallIcon: {
    width: '80px',
  },
  topicRowContainer: {
    width: 'fit-content',
  },
  checkoutPanel: {
    marginBottom: '200px',
  },
});

const Academic = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header backgroundColor="pinkToPurple" />
      <Panel padding className={classes.panel1}>
        <Grid container justify="space-between">
          <Grid item xs className={classes.academicGraphicContainer}>
            <img src={academic} alt="academic" className={classes.academicGraphic} />
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="column"
            justify="center"
            className={classes.mainTextContainer}
          >
            <Typography variant="h2" color="textPrimary" className={classes.title}>
              The SAT is a Joke
            </Typography>
            <Grid item>
              <Typography variant="h5" color="textPrimary">
                It doesn't measure intelligence
              </Typography>
              <Typography variant="h5" color="textPrimary">
                It doesn't measure creativity
              </Typography>
              <Typography variant="h5" color="textPrimary">
                It doesn't measure aptitude
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Panel>
      <Panel backgroundColor="pinkToPurple" back className={classes.panel4Covered}>
        <Grid container justify="center">
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            className={classes.panelHeader}
          >
            <img className={classes.smallIcon} src={lightningIcon} alt="triangle icon" />
            <Typography
              variant="overline"
              color="textPrimary"
              component="h3"
              className={classes.panelSubtitle}
            >
              Comprehensively Comprehesive
            </Typography>
            <Typography variant="h2" color="inherit" align="center" className={classes.panelTitle}>
              We Have You Covered
            </Typography>
            <Typography variant="body1" color="inherit" align="center" paragraph>
              From english to science and math, from grade school to grad school.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.categoryContainer}>
          <Grid item container justify="space-between" className={classes.topicMainContainer}>
            <Grid item container direction="column" className={classes.topicRowContainer}>
              <Typography
                variant="h2"
                color="inherit"
                align="center"
                className={classes.panelTitle}
              >
                Math
              </Typography>
              <Grid item container>
                <Category src={line} title="Geometry" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={inequality} title="Algebra" />
              </Grid>
              <Grid item container>
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={parabola} title="Pre-Calculus" />
              </Grid>
            </Grid>
            <Grid item container direction="column" className={classes.topicRowContainer}>
              <Typography
                variant="h2"
                color="inherit"
                align="center"
                className={classes.panelTitle}
              >
                Natural Science
              </Typography>
              <Grid item container>
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
              </Grid>
              <Grid item container>
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
                <Category src={social} title="Social Sciences" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify="space-between" className={classes.topicMainContainer}>
            <Grid item container direction="column" className={classes.topicRowContainer}>
              <Typography
                variant="h2"
                color="inherit"
                align="center"
                className={classes.panelTitle}
              >
                Social Science
              </Typography>
              <Grid item container>
                <Category src={line} title="Geometry" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={inequality} title="Algebra" />
                <Category src={social} title="Social Sciences" />
              </Grid>
              <Grid item container>
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={social} title="Social Sciences" />
                <Category src={parabola} title="Pre-Calculus" />
              </Grid>
            </Grid>
            <Grid item container direction="column" className={classes.topicRowContainer}>
              <Typography
                variant="h2"
                color="inherit"
                align="center"
                className={classes.panelTitle}
              >
                Language Arts
              </Typography>
              <Grid item container>
                <Category src={line} title="Geometry" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={inequality} title="Algebra" />
              </Grid>
              <Grid item container>
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={parabola} title="Pre-Calculus" />
                <Category src={parabola} title="Pre-Calculus" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Panel>
      <Panel className={classes.checkoutPanel}>
        <ProgramsForm
          title="Which One Works For You?"
          subtitles={['Online Course', '1-on-1 Tutor', 'Bootcamp']}
          highlights={[
            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],

            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],
            [
              'Full access to our SAT video course.',
              'Hundreds of online practice problems',
              "Receive copy of 'Defeating the SAT' Prep Book",
            ],
          ]}
          clickable={false}
          button
        />
        />
      </Panel>
      <ContactForm />
      Two points of attack. We enure our tutors not only understand and teach their subject
      material, but can also determine why a student is having trouble on a set of problems.
      Futhermore, all our diagnostic tests use machine leaning to assit our tutors in pinpointing
      why a student is struggling.
      <Footer />
    </React.Fragment>
  );
};

Academic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Academic);
