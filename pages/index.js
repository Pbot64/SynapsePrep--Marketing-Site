// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';

// Local Components
import SlideMenu from '../components/SlideMenu';
import ContactForm from '../components/forms/ContactForm';
import Header from '../components/Header';
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Category from '../components/Category';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Local Assets
import headgear from '../static/images/head-gear.svg';
import check from '../static/images/check-icon.svg';
import lightBulb from '../static/images/lightbulb_icon.svg';
import world from '../static/images/world_icon.svg';
import labTop from '../static/images/labtop_icon.svg';
import book from '../static/images/book.svg';
import mainGraphic from '../static/images/main_graphic.svg';
import lightningIcon from '../static/images/lightning-icon.svg';

//  Style Overrides
const styles = theme => ({
  root: {
    color: 'white'
  },
  panel2Inner: {
    paddingTop: '15px',
    color: theme.palette.text.primary
  },
  iconsWrapper: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'noWrap',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up(800)]: {
      flexDirection: 'row',
      alignItems: 'initial'
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  logoText: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '500',
    [theme.breakpoints.up('sm')]: {
      lineHeight: '42px',
      fontSize: '35px'
    }
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
      paddingRight: '20px'
    }
  },
  mainGraphic: {
    position: 'relative',
    top: '4px'
  },
  subTitle: {
    marginTop: '10px',
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px'
    }
  },
  mainGraphicContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  mainButton: {
    marginBottom: '30px',
    marginTop: '40px'
  },
  mainButtonBottom: {
    marginBottom: '20px',
    marginTop: '20px'
  },
  panel1: {
    ...theme.palette.blueToGreen
  },
  panel2: {
    paddingTop: '30px'
  },
  icon: {
    position: 'relative',
    width: '120px',
    marginTop: '-75px',
    marginBottom: '10px'
  },
  iconSubtitle: {
    marginTop: '10px',
    marginBottom: '20px'
  },
  iconWrapper: {
    maxWidth: '400px',
    [theme.breakpoints.up(800)]: {
      maxWidth: '100%'
    }
  },
  iconMiddleWrapper: {
    marginTop: '30px',
    marginBottom: '30px',
    maxWidth: '400px',
    [theme.breakpoints.up(800)]: {
      marginTop: '0px',
      marginBottom: '0px',

      maxWidth: '100%'
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    marginTop: '30px'
  },
  iconTextContainer: {
    textAlign: 'center',
    height: '100%',
    justifyContent: 'space-between'
  },
  footer: {
    height: '600px'
  },
  formWrapper: {
    alignItems: 'center',

    paddingTop: '40px',
    [theme.breakpoints.up('md')]: {}
  },
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '350px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '700px',
      height: '500px'
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '1000px'
    }
  },
  formContainerInner: {},
  '@keyframes slide-in': {
    from: {
      transform: 'translateX(100%)'
    },
    to: {
      transform: 'translateX(0)'
    }
  },
  '@keyframes simple-fade': {
    from: {
      opacity: '0'
    },
    to: {
      opacity: '1'
    }
  },
  smallIcon: {
    width: '80px'
  },
  panelHeader: {
    maxWidth: '600px',
    margin: '60px 0px',
    marginBottom: '150px'
  },
  resultsPanelHeader: {
    marginBottom: '80px',
    maxWidth: '600px'
  },
  panelTitle: {
    marginTop: '50px',
    marginBottom: '10px',
    fontSize: '50px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px'
    }
  },
  online: {
    display: 'block',
    width: '100%'
  },
  programContainer: {
    paddingRight: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '30px',
      marginBottom: '0px'
    },
    '& h3': {
      textDecoration: 'underline',
      marginBottom: '10px',
      fontSize: '25px'
    }
  },
  programContainerMiddle: {
    paddingLeft: '0px',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '30px',
      marginBottom: '0px'
    },
    '& h3': {
      textDecoration: 'underline',
      marginBottom: '10px',
      fontSize: '25px'
    }
  },
  programWrapperMiddle: {
    marginTop: '40px',
    marginBottom: '40px',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  programWrapper: {
    flexDirection: 'column',
    alignContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  resultsSatTitle: {
    marginTop: '80px',
    fontSize: '50px'
  },
  resultsSatAfter: {
    background: '#7336df',
    padding: '20px',
    paddingLeft: '50px'
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
      borderLeftColor: '#4fa3eb'
    }
  },
  panelSubtitle: {
    marginTop: '20px',
    fontSize: '12px'
  },
  resultsSatTopContainer: {
    padding: '20px',
    '& h3': {
      color: '#00BF6F',
      fontWeight: 500
    },
    '& p': {
      fontSize: '11px'
    }
  },
  resultsSatBottomContainer: {
    color: 'white',
    '& h3': {
      fontWeight: 500
    }
  },
  bookContainer: {
    marginTop: '50px'
  },
  book: { marginBottom: '-7px', width: '100%' },
  panel4Covered: {
    paddingBottom: '200px',
    overflow: 'hidden'
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
      width: '330px'
    }
  },
  categorySubContainer: {
    flexWrap: 'noWrap',

    [theme.breakpoints.up('sm')]: {
      width: '140px',
      flexWrap: 'wrap'
    }
  },
  categoryMainContainer: {
    opacity: '0.7',
    marginLeft: '-80px',
    width: '120%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-160px',
      width: 'inherit',
      flexWrap: 'wrap'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-100px'
    }
  },

  categoryContainer2: {
    height: 'fit-content',
    opacity: '0.7',
    marginRight: '-150px',
    position: 'relative',
    width: '330px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  categoryLast: {
    width: '120px',
    margin: '10px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inherit'
    }
  },
  categoryWrapper: {
    flexDirection: 'column-reverse',
    marginBottom: '200px',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginBottom: '0px'
    }
  },

  background: {
    position: 'absolute',
    backgroundImage: `url(${headgear})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom: '180px',
    height: '1000px',
    paddingTop: '50px'
  },
  learn: {
    marginTop: '10px',
    color: '#ffd474',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7
    }
  },
  mainTextContainerCovered: {
    minHeight: '400px',

    marginLeft: '0px',
    [theme.breakpoints.up(700)]: {
      minHeight: '500px',
      marginLeft: '350px'
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 'auto',
      height: 'auto',
      marginLeft: '0px'
    }
  },
  headgearContainer: {
    marginBottom: '50px',
    [theme.breakpoints.up(700)]: {
      display: 'block',
      maxWidth: 'none',
      width: '600px',
      position: 'absolute',
      left: '-300px',
      marginRight: '50px',
      marginBottom: '0px'
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit',
      position: 'initial'
    }
  },
  coveredTitles: {
    textDecoration: 'underline'
  },
  coveredTextContainerBottom: {
    marginTop: '30px'
  },
  coveredText: {
    marginBottom: '10px'
  },
  coveredMainContentContainer: {
    position: 'relative',

    [theme.breakpoints.up(700)]: {}
  },
  shimmer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(90deg,transparent,rgba(0,0,0,.05))'
  },
  panelTitleBottom: {
    marginTop: '20px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '35px'
    }
  }
});

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      menu: 'Root',
      step: 1,
      expanded1: false,
      expanded2: false
    };
    this.myDivToFocus = React.createRef();
  }

  componentDidMount() {
    axios
      .get('/api/connect')
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = () => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth'
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
      menu: newMenu
    });
  };

  handleExpand = (expanded, currentExpand) => {
    this.setState({
      [expanded]: currentExpand
    });
  };

  render() {
    const { classes } = this.props;
    const { menu, step, expanded1, expanded2 } = this.state;

    return (
      <React.Fragment>
        <Head>
          <title>Free SAT and ACT prep. The best online private tutoring.</title>
          <meta
            name='description'
            content='Free SAT practice questions. Offering affordable, top quaility in-person and online tutoring. Enroll in a 2-day SAT or ACT
            bootcamp. Our world class tutors guide students through fun and easy
            to follow curriculum. SAT | ACT | GRE | Science | English'
          />
        </Head>
        <div className={classes.root}>
          <div className={classes.panel1}>
            <Header />
            <Panel>
              <Grid item xs={4} className={classes.shimmer} />
              <Grid container justify='space-between' className={classes.panel1Inner}>
                <Grid item container xs className={classes.textContainer}>
                  <Grid item>
                    <Typography variant='h1' color='inherit' className={classes.logoText}>
                      Fun and Simple SAT Prep + Academic Tutoring
                    </Typography>
                    <Typography
                      component='p'
                      variant='h6'
                      color='inherit'
                      className={classes.subTitle}
                    >
                      Achieve Your Highest Possible Score!
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
                  <img src={mainGraphic} className={classes.mainGraphic} alt='students studying' />
                </Grid>
              </Grid>
            </Panel>
          </div>

          <Panel backgroundColor='whiteToLightBlue' className={classes.panel2Inner}>
            <Grid item container spacing={24} className={classes.iconsWrapper}>
              <Grid item container direction='column' className={classes.iconWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={world} alt='world' className={classes.icon} />
                  <Grid container direction='column' className={classes.iconTextContainer}>
                    <Typography
                      variant='overline'
                      className={classes.icontitle}
                      color='textPrimary'
                    >
                      No Useless BS*
                    </Typography>
                    <Typography
                      variant='body1'
                      component='p'
                      className={classes.iconSubtitle}
                      color='textPrimary'
                    >
                      Our curriculum only features content that will improve your score
                    </Typography>

                    <Typography variant='caption' color='textPrimary'>
                      *Bad Stuff
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction='column' className={classes.iconMiddleWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={lightBulb} alt='light bulb' className={classes.icon} />
                  <Grid container direction='column' className={classes.iconTextContainer}>
                    <Grid container direction='column' justify='space-between'>
                      <Typography
                        variant='overline'
                        className={classes.icontitle}
                        color='textPrimary'
                      >
                        Witty AF*
                      </Typography>
                      <Typography
                        variant='body1'
                        component='p'
                        className={classes.iconSubtitle}
                        color='textPrimary'
                      >
                        Playful irreverence and humor is infused into all of our courses.
                      </Typography>
                    </Grid>
                    <Typography variant='caption' color='textPrimary'>
                      *Awesome Fun
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction='column' className={classes.iconWrapper}>
                <CardCustom visible padding className={classes.card}>
                  <img src={labTop} alt='labtop' className={classes.icon} />
                  <Grid container direction='column' className={classes.iconTextContainer}>
                    <Typography
                      variant='overline'
                      className={classes.iconTitle}
                      color='textPrimary'
                    >
                      Confusion, GTFO*
                    </Typography>
                    <Typography
                      variant='body1'
                      component='p'
                      className={classes.iconSubtitle}
                      color='textPrimary'
                    >
                      Clear, concise, and comprehensive strategies that are easy to follow.
                    </Typography>

                    <Typography variant='caption' color='textPrimary'>
                      *Gone to fade off
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>
            </Grid>

            <div ref={this.myDivToFocus}>
              <Grid
                item
                container
                direction='column'
                justify='space-between'
                className={classes.formWrapper}
              >
                <Grid item className={classes.formContainer}>
                  {(() => {
                    switch (menu) {
                      case 'SAT':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Take a look around first?'
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/sat'
                                },
                                {
                                  choice: "B) No thanks, I'm ready to enroll!",
                                  menu: 'SAT_Signup_Courses'
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'SAT_Phone_Courses'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'A) Self-paced course',
                                  toExternal: 'https://app.synapseprep.net/register'
                                },
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  to: '/checkout?course=SAT&program=1-on-1',
                                  as: '/checkout/SAT/1-on-1'
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  to: '/checkout?course=SAT&program=Bootcamp',
                                  as: '/checkout/SAT/Bootcamp'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'A) Self-paced course',
                                  menu: 'SAT_Phone_Online_WhoNeeds',
                                  program: 'Self-paced'
                                },
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  menu: 'SAT_Phone_InPersonOrOnline',
                                  program: '1-on-1'
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  menu: 'SAT_Phone_InPersonOrOnline',
                                  program: 'Bootcamp'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Who needs tutoring?'
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'SAT_Phone_Online_Name',
                                  whoNeeds: 'Self'
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'SAT_Phone_Online_Name',
                                  whoNeeds: 'Child'
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'SAT_Phone_Online_Name',
                                  whoNeeds: 'Someone else'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Courses'
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
                                'maxStringLength: 30'
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 letters',
                                'Name must be shorter than 30 letters'
                              ]}
                              title="What's your name?"
                              label='Name'
                              value='name'
                              formChoice='SAT_Phone_Online_Email'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Online_WhoNeeds'
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
                              value='email'
                              label='Email'
                              formChoice='SAT_Phone_Online_Number'
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu='SAT_Phone_Online_Name'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              phone
                              form
                              title="What's your number?"
                              value='tel'
                              label='Phone 
                              Number'
                              formChoice='SAT_Phone_Online_Time'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Online_Email'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Online_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value='when'
                              title="When's best to reach you?"
                              label='Time of Day'
                              formChoice='Phone_Done'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Online_Number'
                            />
                          </React.Fragment>
                        );

                      case 'SAT_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='In-person or Online'
                              choices={[
                                {
                                  choice: 'A) In-person',
                                  menu: 'SAT_Phone_WhoNeeds',
                                  location: 'In-person'
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'SAT_Phone_WhoNeeds',
                                  location: 'Online'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Courses'
                            />
                          </React.Fragment>
                        );

                      case 'SAT_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Who needs tutoring?'
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'SAT_Phone_Name',
                                  whoNeeds: 'Self'
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'SAT_Phone_Name',
                                  whoNeeds: 'Child'
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'SAT_Phone_Name',
                                  whoNeeds: 'Someone else'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_InPersonOrOnline'
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
                                'maxStringLength: 30'
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 letters',
                                'Name must be shorter than 30 letters'
                              ]}
                              title="What's your name?"
                              label='Name'
                              value='name'
                              formChoice='SAT_Phone_Email'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_WhoNeeds'
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
                              value='email'
                              label='Email'
                              formChoice='SAT_Phone_Number'
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu='SAT_Phone_Name'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              phone
                              title="What's your number?"
                              value='tel'
                              label='Phone 
                              Number'
                              formChoice='SAT_Phone_Time'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Email'
                            />
                          </React.Fragment>
                        );
                      case 'SAT_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value='when'
                              title="When's best to reach you?"
                              label='Time of Day'
                              formChoice='Phone_Done'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='SAT_Phone_Number'
                            />
                          </React.Fragment>
                        );
                      case 'Phone_Done':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title="Awesome! You're all set. We'll give you a call within 48hrs."
                              onClickHandler={this.setMenu}
                              resetButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );

                      case 'ACT':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Take a look around first?'
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/act'
                                },
                                {
                                  choice: "B) No thanks, I'm ready to enroll!",
                                  menu: 'ACT_Signup_Courses'
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'ACT_Phone_Courses'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  to: '/checkout?course=ACT&program=1-on-1',
                                  as: '/checkout/ACT/1-on-1'
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  to: '/checkout?course=ACT&program=Bootcamp',
                                  as: '/checkout/ACT/Bootcamp'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'B) 1-on-1 instruction',
                                  menu: 'ACT_Phone_InPersonOrOnline',
                                  program: '1-on-1'
                                },
                                {
                                  choice: 'C) Bootcamp',
                                  menu: 'ACT_Phone_InPersonOrOnline',
                                  program: 'Bootcamp'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='In-person or Online'
                              choices={[
                                {
                                  choice: 'A) In-person',
                                  menu: 'ACT_Phone_WhoNeeds',
                                  location: 'In-person'
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'ACT_Phone_WhoNeeds',
                                  location: 'Online'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT_Phone_Courses'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Who needs tutoring?'
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'ACT_Phone_Name',
                                  whoNeeds: 'Self'
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'ACT_Phone_Name',
                                  whoNeeds: 'Child'
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'ACT_Phone_Name',
                                  whoNeeds: 'Someone else'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT_Phone_InPersonOrOnline'
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
                                'maxStringLength: 30'
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 letters',
                                'Name must be shorter than 30 letters'
                              ]}
                              title="What's your name?"
                              label='Name'
                              value='name'
                              formChoice='ACT_Phone_Email'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT_Phone_WhoNeeds'
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
                              value='email'
                              label='Email'
                              formChoice='ACT_Phone_Number'
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu='ACT_Phone_Name'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              phone
                              title="What's your number?"
                              value='tel'
                              label='Phone 
                              Number'
                              formChoice='ACT_Phone_Time'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT_Phone_Email'
                            />
                          </React.Fragment>
                        );
                      case 'ACT_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value='when'
                              title="When's best to reach you?"
                              label='Time of Day'
                              formChoice='Phone_Done'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='ACT_Phone_Number'
                            />
                          </React.Fragment>
                        );
                      case 'Academic':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Take a look around first?'
                              choices={[
                                {
                                  choice: 'A) Show me what you got!',
                                  to: '/academic'
                                },
                                {
                                  choice: "B) No thanks, I'm ready to enroll!",
                                  menu: 'Academic_Signup_Courses'
                                },
                                {
                                  choice: "C) Let's chat on the phone first.",
                                  menu: 'Academic_Phone_Courses'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Signup_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'A) 1-on-1 instruction',
                                  to: '/checkout?course=Academic&program=1-on-1',
                                  as: '/checkout/Academic/1-on-1'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic'
                            />
                          </React.Fragment>
                        );

                      case 'Academic_Phone_Courses':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'A) 1 on 1 instruction',
                                  menu: 'Academic_Phone_InPersonOrOnline',
                                  program: '1-on-1'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic'
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_InPersonOrOnline':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='In-person or online'
                              choices={[
                                {
                                  choice: 'A) In-person',
                                  menu: 'Academic_Phone_WhoNeeds',
                                  location: 'In-person'
                                },
                                {
                                  choice: 'B) Online ',
                                  menu: 'Academic_Phone_WhoNeeds',
                                  location: 'Online'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic_Phone_Courses'
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_WhoNeeds':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Who needs Tutoring?'
                              choices={[
                                {
                                  choice: 'A) Me, myself, and I',
                                  menu: 'Academic_Phone_Name',
                                  whoNeeds: 'Self'
                                },
                                {
                                  choice: "B) My lil puddin'",
                                  menu: 'Academic_Phone_Name',
                                  whoNeeds: 'Child'
                                },
                                {
                                  choice: 'C) Someone else I care about',
                                  menu: 'Academic_Phone_Name',
                                  whoNeeds: 'Someone else'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic_Phone_InPersonOrOnline'
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
                                'maxStringLength: 30'
                              ]}
                              currentErrorMessages={[
                                'Name is required',
                                'Name must be longer than 2 letters',
                                'Name must be shorter than 30 letters'
                              ]}
                              title="What's your name?"
                              label='Name'
                              value='name'
                              formChoice='Academic_Phone_Email'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic_Phone_WhoNeeds'
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
                              value='email'
                              label='Email'
                              formChoice='Academic_Phone_Number'
                              onClickHandler={this.setMenu}
                              checkbox
                              backButton
                              backMenu='Academic_Phone_Name'
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_Number':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              form
                              phone
                              title="What's your number?"
                              value='tel'
                              label='Phone 
                              Number'
                              formChoice='Academic_Phone_Time'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic_Phone_Email'
                            />
                          </React.Fragment>
                        );
                      case 'Academic_Phone_Time':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              selectMenu
                              value='when'
                              title="When's best to reach you?"
                              label='Time of Day'
                              formChoice='Phone_Done'
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Academic_Phone_Number'
                            />
                          </React.Fragment>
                        );
                      case 'Will':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='Which program interests you?'
                              choices={[
                                {
                                  choice: 'A) World domination',
                                  menu: 'Will_1'
                                },
                                {
                                  choice: 'B) The therapy I so obviously need',
                                  menu: 'Therapy'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      case 'Will_1':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='You sure about this?'
                              choices={[
                                {
                                  choice: 'Yes, I want everyone to bow before my wealth and power!',
                                  menu: 'Will_2'
                                },
                                {
                                  choice: 'No, I want to live humbly and make genuine friends.',
                                  menu: 'Root'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      case 'Will_2':
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='OK then! Our course is just few clicks away.'
                              choices={[
                                {
                                  choice: 'Proceed',
                                  menu: 'Will_3'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
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
                                  menu: 'Will_4'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
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
                                  menu: 'Will_5'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
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
                                  menu: 'Will_2'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                              backButton
                              backMenu='Root'
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
                              backMenu='Root'
                            />
                          </React.Fragment>
                        );
                      default:
                        return (
                          <React.Fragment>
                            <SlideMenu
                              title='What are you looking to defeat?'
                              choices={[
                                {
                                  choice: 'A) SAT',
                                  menu: 'SAT',
                                  course: 'SAT'
                                },
                                {
                                  choice: 'B) ACT',
                                  menu: 'ACT',
                                  course: 'ACT'
                                },
                                {
                                  choice: 'C) A class',
                                  menu: 'Academic',
                                  course: 'Academic'
                                },
                                {
                                  choice: 'D) The will of those who oppose me',
                                  menu: 'Will'
                                }
                              ]}
                              onClickHandler={this.setMenu}
                            />
                          </React.Fragment>
                        );
                    }
                  })()}
                </Grid>
                <Grid container justify='center' className={classes.bookContainer}>
                  <Grid item xs={8} sm={6} md={4}>
                    <img src={book} alt='book' className={classes.book} />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Panel>
          <Panel
            backgroundColor='pinkToPurple'
            className={classes.panel4Covered}
            header
            paddingTop
            smallIcon={lightningIcon}
            title='High-Tech Tech'
            subtitle='Advanced learning tools at your fingertips'
            body='Personalized curriculum and cutting-edge diagnostics give our students the upper hand.'
          >
            <Grid item container justify='center' className={classes.coveredMainContentContainer}>
              <Grid item xs={12} sm={8} md={5} className={classes.headgearContainer}>
                <img src={headgear} alt='artifical intelligence' />
              </Grid>
              <Grid
                item
                container
                direction='column'
                justify='space-around'
                xs={12}
                sm={8}
                md={5}
                className={classes.mainTextContainerCovered}
              >
                <Grid item className={classes.coveredTextContainerTop}>
                  <Typography variant='h5' color='inherit' className={classes.coveredTitles}>
                    Personalized Learning
                  </Typography>
                  {expanded1 && (
                    <React.Fragment>
                      <Typography variant='body1' color='inherit' className={classes.coveredText}>
                        Our practice questions dynamically adjust to student performance. This both
                        helps our students avoid feeling overwhelmed on new or difficult material
                        and keeps them from wasting time on concepts they already know.
                      </Typography>

                      <Typography
                        className={classes.learn}
                        variant='subtitle2'
                        color='inherit'
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
                      <Typography variant='body1' color='inherit' className={classes.coveredText}>
                        Our curriculum dynamically adjusts to student performance. This both helps
                        our students avoid feeling overwhelmed on new or difficult material...
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant='subtitle2'
                        color='inherit'
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
                  <Typography variant='h5' color='inherit' className={classes.coveredTitles}>
                    In Analysis We Trust
                  </Typography>
                  {expanded2 && (
                    <React.Fragment>
                      <Typography
                        display='block'
                        variant='body1'
                        color='inherit'
                        className={classes.coveredText}
                      >
                        We believe in data-driven instruction. We start by establishing a baseline
                        with existing student data and/or our own pre-course diagnostic test. We
                        then use the resulting assessment during an initial parent/student
                        consultation to custom fit the course, and later, for a summative assessment
                        after the student completes a post-course diagnostic test. Throughout their
                        course, a series of benchmark tests are provided to help monitor student
                        progress and refine course parameters.
                      </Typography>
                      <Typography
                        display='block'
                        variant='body1'
                        color='inherit'
                        className={classes.coveredText}
                      >
                        These benchmarks are themselves composed of questions that have been
                        meticulously designed to gather key data on a student's relevant content
                        knowledge, foundational skills, and test taking strategies, which is then
                        used to generate a qualitative analysis that provides further insight into
                        the reasons why a student may be struggling on particular question types or
                        testing areas.
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant='subtitle2'
                        color='inherit'
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
                      <Typography variant='body1' color='inherit' className={classes.coveredText}>
                        When it comes to assessing student progress, we don't leave anything to
                        guesswork. First, every course starts with a comprehensive diagnostic test.
                        This is followed by a series of progress tests...
                      </Typography>
                      <Typography
                        className={classes.learn}
                        variant='subtitle2'
                        color='inherit'
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
          <Panel
            skewed
            forward
            skewedBackgroundColor='blueToPurple'
            header
            smallIcon={check}
            title='Proven Results'
            subtitle='Higher Test Score Guaranteed*'
            body="Our programs work. If your SAT score doesn't improve by at least 100 points, then we'll give you your money back!"
          >
            {step === 1 && (
              <Results
                title='SAT'
                difference={226}
                before={1042}
                after={1268}
                stepBack={this.stepBack}
                stepForward={this.stepForward}
                step={step}
              />
            )}
            {step === 2 && (
              <Results
                title='ACT'
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
                title='Class'
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
            <Grid container justify='center'>
              <Grid
                container
                item
                direction='column'
                alignItems='center'
                className={classes.panelHeader}
              >
                <Typography variant='h4' align='center' className={classes.panelTitleBottom}>
                  Join the thousands of students and parents who love us!
                </Typography>
                <Typography variant='body2' align='center'>
                  (or possibily the 3 or 4 who don't)
                </Typography>
                <ButtonCustom className={classes.mainButtonBottom} onClick={this.handleClick}>
                  Get Started
                </ButtonCustom>
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

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndexPage);
