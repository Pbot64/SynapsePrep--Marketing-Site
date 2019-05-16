// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import axios from 'axios';

// Local Components
import SlideMenu from '../components/SlideMenu';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Category from '../components/Category';

// Material UI Components
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// Local Assets
import curve from '../assets/images/curve-white.svg';
import headgear from '../assets/images/head-gear.svg';
import check from '../assets/images/check-icon.svg';
import lightBulb from '../assets/images/lightbulb_icon.svg';
import world from '../assets/images/world_icon.svg';
import labTop from '../assets/images/labtop_icon.svg';
import laptop from '../assets/images/laptop.svg';
import book from '../assets/images/book.svg';
import line from '../assets/images/Icon-Line.svg';
import inequality from '../assets/images/Icon-Inequality.svg';
import parabola from '../assets/images/Icon-Parabola.svg';
import flasks from '../assets/images/Icon-Flasks.svg';
import social from '../assets/images/Icon-Social.svg';
import fist from '../assets/images/Icon-Fist.svg';
import handshake from '../assets/images/Icon-HandShake.svg';
import clock from '../assets/images/Icon-Clock.svg';
import considering from '../assets/images/Icon-Considering.svg';
import mainGraphic from '../assets/images/main_graphic.svg';
import lightningIcon from '../assets/images/lightning-icon.svg';
import * as colors from '../assets/jss/colors';

//  Style Overrides
const styles = theme => ({
  root: {
    color: 'white',
  },
  panel2Inner: { paddingTop: '15px', color: theme.palette.text.primary },
  iconsWrapper: {
    display: 'flex',
    flexWrap: 'noWrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up(800)]: {
      maxWidth: '1200px',
      flexDirection: 'row',
      alignItems: 'initial',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  logoText: {
    fontSize: '25px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '34px',
    },
  },
  textContainer: {
    marginTop: '20px',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: '0px',
      textAlign: 'left',
      alignItems: 'flex-start',
      paddingRight: '20px',
    },
  },
  mainGraphic: {
    position: 'relative',
    top: '4px',
  },
  subTitle: {
    marginTop: '10px',
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  mainGraphicContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  mainButton: {
    marginBottom: '30px',
    marginTop: '40px',
  },
  mainButtonBottom: {
    marginBottom: '15px',
    marginTop: '20px',
  },
  panel1: {
    ...theme.palette.blueToGreen,
  },
  panel2: {
    paddingTop: '30px',
  },
  icon: {
    position: 'relative',
    width: '120px',
    marginTop: '-75px',
    marginBottom: '10px',
  },
  iconSubtitle: {
    marginTop: '10px',
    marginBottom: '20px',
  },
  iconWrapper: {
    padding: '10px',
    marginTop: '20px',
    maxWidth: '400px',
    [theme.breakpoints.up(800)]: {
      maxWidth: '100%',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    marginTop: '30px',
  },
  iconTextContainer: {
    textAlign: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  footer: {
    height: '600px',
  },
  formWrapper: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    justifyContent: 'center',
    paddingTop: '40px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  formContainer: {
    padding: '10px',
    height: '350px',
    flexBasis: 'auto',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      height: '350px',
      alignItems: 'flex-start',
      flexBasis: '0',
      width: 'auto',
    },
  },
  formContainerInner: {},
  '@keyframes slide-in': {
    from: {
      transform: 'translateX(100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  '@keyframes simple-fade': {
    from: {
      opacity: '0',
    },
    to: {
      opacity: '1',
    },
  },
  smallIcon: {
    width: '80px',
  },
  panelHeader: {
    maxWidth: '600px',
    margin: '50px 0px',
    marginBottom: '80px',
  },
  resultsPanelHeader: {
    marginBottom: '80px',
    maxWidth: '600px',
  },
  panelTitle: {
    marginTop: '50px',
    marginBottom: '10px',
    fontSize: '50px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
  },
  online: {
    display: 'block',
    width: '100%',
  },
  programContainer: {
    paddingRight: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '30px',
      marginBottom: '0px',
    },
    '& h3': {
      textDecoration: 'underline',
      marginBottom: '10px',
      fontSize: '25px',
    },
  },
  programContainerMiddle: {
    paddingLeft: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
      marginBottom: '0px',
    },
    '& h3': {
      textDecoration: 'underline',
      marginBottom: '10px',
      fontSize: '25px',
    },
  },
  programWrapperMiddle: {
    marginTop: '40px',
    marginBottom: '40px',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  programWrapper: {
    flexDirection: 'column',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  resultsSatTitle: {
    marginTop: '80px',
    fontSize: '50px',
  },
  resultsSatAfter: {
    background: '#7336df',
    padding: '20px',
    paddingLeft: '50px',
  },
  resultsSatBefore: {
    position: 'relative',
    background: '#4fa3eb',
    padding: '20px',
    '&:after': {
      content: '""',
      width: '0',
      height: '0',
      borderTop: '45px solid #7336df',
      borderBottom: '44px solid #7336df',
      borderLeft: '44px solid #7336df',
      position: 'absolute',
      right: '-24px',
      top: '0px',
      zIndex: '1',
      borderRightColor: '#4fa3eb',
      borderLeftColor: '#4fa3eb',
    },
  },
  panelSubtitle: {
    marginTop: '20px',
    fontSize: '12px',
  },
  resultsSatTopContainer: {
    padding: '20px',
    '& h3': {
      color: '#00BF6F',
      fontWeight: 500,
    },
    '& p': {
      fontSize: '11px',
    },
  },
  resultsSatBottomContainer: {
    color: 'white',
    '& h3': {
      fontWeight: 500,
    },
  },
  bookContainer: {
    opacity: '1',
    marginBottom: '-7px',
    position: 'inherit',
    [theme.breakpoints.up('md')]: {
      opacity: '0.7',
      marginBottom: '130px',
      top: '137px',
      position: 'relative',
    },
  },
  book: {},
  panel4Covered: {
    paddingBottom: '200px',
    overflow: 'hidden',
  },
  programImgContainer: { borderRadius: '10px' },
  categoryContainer: {
    opacity: '0.7',
    justifyContent: 'center',
    width: '170%',
    marginLeft: '-100px',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginLeft: '-100px',
      width: '330px',
    },
  },
  categorySubContainer: {
    flexWrap: 'noWrap',

    [theme.breakpoints.up('sm')]: {
      width: '140px',
      flexWrap: 'wrap',
    },
  },
  categoryMainContainer: {
    opacity: '0.7',
    marginLeft: '-80px',
    width: '120%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-160px',
      width: 'inherit',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-100px',
    },
  },

  categoryContainer2: {
    height: 'fit-content',
    opacity: '0.7',
    marginRight: '-150px',
    position: 'relative',
    width: '330px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  categoryLast: {
    width: '120px',
    margin: '10px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inherit',
    },
  },
  categoryWrapper: {
    flexDirection: 'column-reverse',
    marginBottom: '200px',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginBottom: '0px',
    },
  },

  background: {
    position: 'absolute',
    backgroundImage: `url(${headgear})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom: '180px',
    height: '1000px',
    paddingTop: '50px',
  },
  coveredMainTextWrapper: {},
  coveredMainTextContainer: {},
  coveredMainTextContainer2: {},
  bottomPanelText: {
    marginBottom: '70px',
  },
  learn: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  mainTextContainerCovered: {
    minHeight: '400px',

    marginLeft: '0px',
    [theme.breakpoints.up(700)]: {
      minHeight: '500px',
      marginLeft: '350px',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 'auto',
      height: 'auto',
      marginLeft: '0px',
    },
  },
  headgearContainer: {
    display: 'none',
    [theme.breakpoints.up(700)]: {
      display: 'block',
      maxWidth: 'none',
      width: '600px',
      position: 'absolute',
      left: '-300px',
      marginRight: '50px',
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit',
      position: 'initial',
    },
  },
  coveredTitles: {
    textDecoration: 'underline',
  },
  coveredText: {
    fontSize: '16px',
  },
  coveredTextContainerTop: {},
  coveredTextContainerBottom: {
    marginTop: '30px',
  },
  coveredMainContentContainer: {
    position: 'relative',

    [theme.breakpoints.up(700)]: {},
  },
  shimmer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(90deg,transparent,rgba(0,0,0,.05))',
  },
  panelTitleBottom: {
    marginTop: '20px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '35px',
    },
  },
});
const initialSubMenus = [
  {
    option: 'A) SAT',
    subMenu: [
      {
        option: 'A) Learn more about our programs',
      },
      {
        option: 'B) Just let me sign up already',
        subMenu: [
          { option: 'BootCamp!' },
          { option: '1 on 1 Tutoring' },
          { option: 'Online Course' },
        ],
      },
    ],
  },
  {
    option: 'B) ACT',
  },
];

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      menu: 'SAT_Signup_Courses',
      step: 2,
      expanded1: false,
      expanded2: false,
    };
    this.myDivToFocus = React.createRef();
  }

  handleClick = () => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  stepBack = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  stepForward = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  setMenu = newMenu => {
    this.setState({
      menu: newMenu,
    });
  };

  handleExpand = (expanded, currentExpand) => {
    this.setState({
      [expanded]: currentExpand,
    });
  };

  render() {
    const { classes } = this.props;
    const { menu, step, expanded1, expanded2 } = this.state;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.panel1}>
            <Header />
            <Panel>
              <Grid item xs={4} className={classes.shimmer} />
              <Grid container justify="space-between" className={classes.panel1Inner}>
                <Grid item container xs className={classes.textContainer}>
                  <Grid item>
                    <Typography variant="h4" color="inherit" className={classes.logoText}>
                      Creative, Relatively Fun, and Straight-forward Test Prep.
                    </Typography>
                    <Typography
                      component="h1"
                      variant="h6"
                      color="inherit"
                      className={classes.subTitle}
                    >
                      Achieve Your Highest Possible Score
                    </Typography>
                  </Grid>

                  <ButtonCustom
                    hasArrowRight
                    className={classes.mainButton}
                    onClick={this.handleClick}
                  >
                    Get Started
                  </ButtonCustom>
                </Grid>
                <Grid item xs={7} className={classes.mainGraphicContainer}>
                  <img src={mainGraphic} className={classes.mainGraphic} alt="students studying" />
                </Grid>
              </Grid>
            </Panel>
          </div>

          <Panel backgroundColor="whiteToLightBlue" className={classes.panel2Inner}>
            <Grid item container justify="space-between" className={classes.iconsWrapper}>
              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={world} alt="world" className={classes.icon} />
                  <Grid container direction="column" className={classes.iconTextContainer}>
                    <Typography
                      variant="overline"
                      className={classes.icontitle}
                      color="textPrimary"
                    >
                      No Useless BS*
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.iconSubtitle}
                      color="textPrimary"
                    >
                      Only contains stuff that will improve your score
                    </Typography>

                    <Typography variant="caption" color="textPrimary">
                      *Bad Stuff
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={lightBulb} alt="light bulb" className={classes.icon} />
                  <Grid container direction="column" className={classes.iconTextContainer}>
                    <Grid container direction="column" justify="space-between">
                      <Typography
                        variant="overline"
                        className={classes.icontitle}
                        color="textPrimary"
                      >
                        Witty AF*
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        className={classes.iconSubtitle}
                        color="textPrimary"
                      >
                        Written by smart alecks for smart alecks
                      </Typography>
                    </Grid>
                    <Typography variant="caption" color="textPrimary">
                      *Awesome Fun
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={labTop} alt="labtop" className={classes.icon} />
                  <Grid container direction="column" className={classes.iconTextContainer}>
                    <Typography
                      variant="overline"
                      className={classes.iconTitle}
                      color="textPrimary"
                    >
                      Confusion, GTFO*
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.iconSubtitle}
                      color="textPrimary"
                    >
                      Straight-forward strategies that avoid complicated wording.
                    </Typography>

                    <Typography variant="caption" color="textPrimary">
                      *Gone for
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>
            </Grid>

            <div ref={this.myDivToFocus}>
              <Grid item container justify="space-between" className={classes.formWrapper}>
                <Grid
                  item
                  sm={12}
                  md
                  container
                  direction="column"
                  alignItems="center"
                  justify="space-between"
                  className={classes.formContainer}
                >
                  {(() => {
                    switch (menu) {
                      case 'SAT':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Want to take a look around first?"
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/sat',
                                },
                                {
                                  choice: "B) No thanks, I'm ready to see pricing/sign up.",
                                  menu: 'SAT_Signup_Courses',
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'SAT_Phone_Courses',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'A) Online video course',
                                  to: '/login',
                                },
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  to: '/checkout?name=1-on-1 SAT',
                                  as: '/checkout/sat/1-on-1',
                                },
                                {
                                  choice: 'C) In-person bootcamp',
                                  to: '/checkout?name=Find Bootcamp Near You',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'A) Online video course',
                                  menu: 'SAT_Phone_Online_WhoNeeds',
                                },
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  menu: 'SAT_Phone_InPersonOrOnline',
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  menu: 'SAT_Phone_InPersonOrOnline',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Who needs tutoring?"
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'SAT_Phone_Online_Name',
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'SAT_Phone_Online_Name',
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'SAT_Phone_Online_Name',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Courses"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Name':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={[
                                'required',
                                'minStringLength: 2',
                                'maxStringLength: 30',
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 characters',
                                'Name must be shorter than 30 characters',
                              ]}
                              title="What's your name?"
                              label="Name"
                              value="name"
                              formChoice="SAT_Phone_Online_Email"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Online_WhoNeeds"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Email':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={['required', 'isEmail']}
                              currentErrorMessages={['Email is required', 'Email is not valid']}
                              title="What's your email?"
                              value="email"
                              label="Email"
                              formChoice="SAT_Phone_Online_Number"
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu="SAT_Phone_Online_Name"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              title="What's your number?"
                              value="tel"
                              label="Phone 
                              Number"
                              formChoice="SAT_Phone_1on1_Time"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Online_Email"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value="when"
                              title="When's best to reach you?"
                              label="Time of Day"
                              formChoice="Phone_Done"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Online_Number"
                            />
                          </React.Fragment>
                        );

                      case 'SAT_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="In-person or Online"
                              choices={[
                                {
                                  choice: 'A) In-person (currently only offered near Austin, TX)',
                                  menu: 'SAT_Phone_WhoNeeds',
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'SAT_Phone_WhoNeeds',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Courses"
                            />
                          </React.Fragment>
                        );

                      case 'SAT_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Who needs tutoring?"
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'SAT_Phone_Name',
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'SAT_Phone_Name',
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'SAT_Phone_Name',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_InPersonOrOnline"
                            />
                          </React.Fragment>
                        );

                      case 'SAT_Phone_Name':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={[
                                'required',
                                'minStringLength: 2',
                                'maxStringLength: 30',
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 characters',
                                'Name must be shorter than 30 characters',
                              ]}
                              title="What's your name?"
                              label="Name"
                              value="name"
                              formChoice="SAT_Phone_Email"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_WhoNeeds"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Email':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={['required', 'isEmail']}
                              currentErrorMessages={['Email is required', 'Email is not valid']}
                              title="What's your email?"
                              value="email"
                              label="Email"
                              formChoice="SAT_Phone_Number"
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu="SAT_Phone_Name"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              title="What's your number?"
                              value="tel"
                              label="Phone 
                              Number"
                              formChoice="SAT_Phone_Time"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Email"
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value="when"
                              title="When's best to reach you?"
                              label="Time of Day"
                              formChoice="Phone_Done"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="SAT_Phone_Number"
                            />
                          </React.Fragment>
                        );
                      case 'Phone_Done':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Awesome! You're all set. We'll give you a call within 24hrs."
                              onClickHandler={this.setMenu}
                              resetButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );

                      case 'ACT':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Want to take a look around first?"
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/act',
                                },
                                {
                                  choice: "B) No thanks, I'm ready to sign up.",
                                  menu: 'ACT_Signup_Courses',
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'ACT_Phone_Courses',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  to: '/checkout?name=1-on-1 ACT',
                                  as: '/checkout/act/1-on-1',
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  to: '/checkout',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  menu: 'ACT_Phone_InPersonOrOnline',
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  menu: 'ACT_Phone_InPersonOrOnline',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="In-person or Online"
                              choices={[
                                {
                                  choice: 'A) In-person (currently only offered near Austin, TX)',
                                  menu: 'ACT_Phone_WhoNeeds',
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'ACT_Phone_WhoNeeds',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT_Phone_Courses"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Who needs tutoring?"
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'ACT_Phone_Name',
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'ACT_Phone_Name',
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'ACT_Phone_Name',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT_Phone_InPersonOrOnline"
                            />
                          </React.Fragment>
                        );

                      case 'ACT_Phone_Name':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={[
                                'required',
                                'minStringLength: 2',
                                'maxStringLength: 30',
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 characters',
                                'Name must be shorter than 30 characters',
                              ]}
                              title="What's your name?"
                              label="Name"
                              value="name"
                              formChoice="ACT_Phone_Email"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT_Phone_WhoNeeds"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Email':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={['required', 'isEmail']}
                              currentErrorMessages={['Email is required', 'Email is not valid']}
                              title="What's your email?"
                              value="email"
                              label="Email"
                              formChoice="ACT_Phone_Number"
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu="ACT_Phone_Name"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              title="What's your number?"
                              value="tel"
                              label="Phone 
                              Number"
                              formChoice="ACT_Phone_Time"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT_Phone_Email"
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value="when"
                              title="When's best to reach you?"
                              label="Time of Day"
                              formChoice="Phone_Done"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="ACT_Phone_Number"
                            />
                          </React.Fragment>
                        );
                      case 'Academic':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Want to take a look around first?"
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/academic',
                                },
                                {
                                  choice: "B) No thanks, I'm ready to sign up.",
                                  menu: 'Academic_Signup_Courses',
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'Academic_Phone_Courses',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'A) 1-on-1 instruction',
                                  to: '/checkout',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic"
                            />
                          </React.Fragment>
                        );

                      case 'Academic_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'A) 1 on 1 instruction',

                                  menu: 'Academic_Phone_InPersonOrOnline',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="In-person or online"
                              choices={[
                                {
                                  choice: 'A) In-person (currently only offered near Austin, TX)',
                                  menu: 'Academic_Phone_WhoNeeds',
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'Academic_Phone_WhoNeeds',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic_Phone_Courses"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Who needs Tutoring?"
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'Academic_Phone_Name',
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'Academic_Phone_Name',
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'Academic_Phone_Name',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic_Phone_InPersonOrOnline"
                            />
                          </React.Fragment>
                        );

                      case 'Academic_Phone_Name':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={[
                                'required',
                                'minStringLength: 2',
                                'maxStringLength: 30',
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 characters',
                                'Name must be shorter than 30 characters',
                              ]}
                              title="What's your name?"
                              label="Name"
                              value="name"
                              formChoice="Academic_Phone_Email"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic_Phone_WhoNeeds"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_Email':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              currentValidators={['required', 'isEmail']}
                              currentErrorMessages={['Email is required', 'Email is not valid']}
                              title="What's your email?"
                              value="email"
                              label="Email"
                              formChoice="Academic_Phone_Number"
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu="Academic_Phone_Name"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              title="What's your number?"
                              value="tel"
                              label="Phone 
                              Number"
                              formChoice="Academic_Phone_Time"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic_Phone_Email"
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value="when"
                              title="When's best to reach you?"
                              label="Time of Day"
                              formChoice="Phone_Done"
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Academic_Phone_Number"
                            />
                          </React.Fragment>
                        );
                      case 'Will':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Which program interests you?"
                              choices={[
                                {
                                  choice: 'A) World domination',
                                  menu: 'Will_1',
                                },
                                {
                                  choice: 'B) The therapy I so obviously need',
                                  menu: 'Therapy',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Will_1':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="You sure about this?"
                              choices={[
                                {
                                  choice: 'Yes, I want everyone to bow before my wealth and power!',
                                  menu: 'Will_2',
                                },
                                {
                                  choice: 'No, I want to live humbly and make genuine friends.',
                                  menu: 'Root',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Will_2':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="OK then! Our course is just few clicks away."
                              choices={[
                                {
                                  choice: 'Proceed',
                                  menu: 'Will_3',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Will_3':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="You're almost there!"
                              choices={[
                                {
                                  choice: 'Proceed',
                                  menu: 'Will_4',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Will_4':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="You're so close that your enemies can feel it!"
                              choices={[
                                {
                                  choice: 'Proceed',
                                  menu: 'Will_5',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Will_5':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Don't quit now! It's just a little further."
                              choices={[
                                {
                                  choice: 'Proceed',
                                  menu: 'Will_2',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      case 'Therapy':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Glad you think so too. Just seach "therapists in my area."'
                              choices={[]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu="Root"
                            />
                          </React.Fragment>
                        );
                      default:
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="What are you looking to defeat?"
                              choices={[
                                {
                                  choice: 'A) SAT',
                                  menu: 'SAT',
                                },
                                {
                                  choice: 'B) ACT',
                                  menu: 'ACT',
                                },
                                {
                                  choice: 'C) A class',
                                  menu: 'Academic',
                                },
                                {
                                  choice: 'D) The will of those who oppose me',
                                  menu: 'Will',
                                },
                              ]}
                              onClickHandler={this.setMenu}
                            />
                          </React.Fragment>
                        );
                    }
                  })()}
                </Grid>
                <Grid item xs={7} sm={6} md={5} className={classes.bookContainer}>
                  <img src={book} alt="book" className={classes.book} />
                </Grid>
              </Grid>
            </div>
          </Panel>

          <Panel backgroundColor="pinkToPurple" className={classes.panel4Covered}>
            <Grid container justify="center">
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                className={classes.panelHeader}
              >
                <img className={classes.smallIcon} src={lightningIcon} alt="triangle icon" />
                <Typography variant="overline" align="center" className={classes.panelSubtitle}>
                  We're even smarter than we are funny.
                </Typography>
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  className={classes.panelTitle}
                >
                  High-Tech Tech
                </Typography>
                <Typography variant="body1" color="inherit" align="center">
                  Access to advanced tools and in-depth diagostics give our students the upper hand.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify="center" className={classes.coveredMainContentContainer}>
              <Grid item xs={12} sm={8} md={5} className={classes.headgearContainer}>
                <img src={headgear} />
              </Grid>
              <Grid
                item
                container
                direction="column"
                justify="space-around"
                xs={12}
                sm={8}
                md={5}
                className={classes.mainTextContainerCovered}
              >
                <Grid item className={classes.coveredTextContainerTop}>
                  <Typography variant="h5" color="inherit" className={classes.coveredTitles}>
                    Personalized Learning
                  </Typography>
                  {expanded1 && (
                    <React.Fragment>
                      <Typography variant="body1" color="inherit" className={classes.coveredText}>
                        By leveraging the latest in AI, our curriculum dynamically adjusts to
                        student performance. This ensures you avoid both wasting time on concepts
                        you've already mastered and feeling overwelmed on difficult material. It
                        gets even cooler though! As you progress, our software learns the extent of
                        your related knowledge. This empowers us to precisely diagnose 'why' you're
                        struggling on certain problem types and what knowledge is needed to correct
                        for it.
                      </Typography>

                      <Typography
                        className={classes.learn}
                        variant="subtitle2"
                        color="inherit"
                        onClick={() => {
                          this.handleExpand('expanded1', false);
                        }}
                      >
                        Show Less
                      </Typography>
                    </React.Fragment>
                  )}
                  {!expanded1 && (
                    <React.Fragment>
                      <Typography variant="body1" color="inherit" className={classes.coveredText}>
                        By leveraging the latest in AI, our curriculum dynamically adjusts to
                        student performance. This ensures you avoid wasting time on concepts you've
                        already mastered...
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant="subtitle2"
                        color="inherit"
                        onClick={() => {
                          this.handleExpand('expanded1', true);
                        }}
                      >
                        Learn More
                      </Typography>
                    </React.Fragment>
                  )}
                </Grid>

                <Grid item className={classes.coveredTextContainerBottom}>
                  <Typography variant="h5" color="inherit" className={classes.coveredTitles}>
                    In Analysis We Trust
                  </Typography>
                  {expanded2 && (
                    <React.Fragment>
                      <Typography variant="body1" color="inherit" className={classes.coveredText}>
                        When it comes to assessing student progress, we don't leave anything to
                        guesswork. First, every course starts with a comprehensive diagnostic test.
                        This is followed by a series of progress tests you'll take throughout the
                        course. A final 'completion test' is then administered at the course's end.
                        An AI assisted qualitiative analysis is prepared after each test and is made
                        avialable to the student/parent to moniter progress and to show which areas
                        still neef work.
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant="subtitle2"
                        color="inherit"
                        onClick={() => {
                          this.handleExpand('expanded2', false);
                        }}
                      >
                        Show Less
                      </Typography>
                    </React.Fragment>
                  )}
                  {!expanded2 && (
                    <React.Fragment>
                      <Typography variant="body1" color="inherit" className={classes.coveredText}>
                        When it comes to assessing student progress, we don't leave anything to
                        guesswork. First, every course starts with a comprehensive diagnostic test.
                        This is followed by a series of progress tests...
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant="subtitle2"
                        color="inherit"
                        onClick={() => {
                          this.handleExpand('expanded2', true);
                        }}
                      >
                        Learn More
                      </Typography>
                    </React.Fragment>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Panel>
          <Panel skewed forward skewedBackgroundColor="blueToPurple">
            <Grid container justify="center">
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                className={classes.resultsPanelHeader}
              >
                <img className={classes.smallIcon} src={check} alt="checkmark icon" />
                <Typography
                  variant="overline"
                  align="center"
                  className={classes.panelSubtitle}
                  color="textPrimary"
                >
                  Higher Test Score Guaranteed*
                </Typography>
                <Typography
                  variant="h2"
                  color="inherit"
                  align="center"
                  className={classes.panelTitle}
                >
                  Proven Results
                </Typography>
                <Typography
                  variant="body1"
                  color="inherit"
                  align="center"
                  paragraph
                  color="inherit"
                >
                  We're so confident in our programs that we'll give you your money back if your SAT
                  score doesn't improve by at least 100 points!
                </Typography>
              </Grid>
            </Grid>
            {step === 2 && (
              <Results
                title="SAT"
                difference={226}
                before={1042}
                after={1268}
                stepBack={this.stepBack}
                stepForward={this.stepForward}
                step={step}
              />
            )}
            {step === 1 && (
              <Results
                title="ACT"
                difference={5.3}
                before={22.4}
                after={27.7}
                stepBack={this.stepBack}
                stepForward={this.stepForward}
                step={step}
              />
            )}
            {step === 3 && (
              <Results
                title="Class"
                difference={17.7}
                before={74.1}
                after={91.8}
                stepBack={this.stepBack}
                stepForward={this.stepForward}
                step={step}
              />
            )}
          </Panel>
          <Panel>
            <Grid container justify="center">
              <Grid
                container
                item
                direction="column"
                alignItems="center"
                className={classes.panelHeader}
              >
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  color="textPrimary"
                  className={classes.panelTitleBottom}
                >
                  Join the thousands of students and parents who love us!
                </Typography>

                <ButtonCustom className={classes.mainButtonBottom} onClick={this.handleClick}>
                  Get Started
                </ButtonCustom>
                <Typography
                  variant="body1"
                  color="inherit"
                  paragraph
                  align="center"
                  color="textPrimary"
                  className={classes.bottomPanelText}
                >
                  Warning! You should only press this button if you have a sense of humor.
                </Typography>
              </Grid>
            </Grid>
          </Panel>
          <ContactForm />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

// IndexPage.getInitialProps = async ({ req }) => {
//   axios
//     .get('./api/contact/test')
//     .then(res => {
//       return { res: 'hello' };
//     })
//     .catch(err => {
//       return { err: 'hello' };
//     });
//   return { test: 'hello' };
// };

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
