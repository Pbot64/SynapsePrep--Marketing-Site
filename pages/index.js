// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local Components
import Link from 'next/link';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// Local Assets
import Header from '../components/Header';
import ButtonCustom from '../components/ButtonCustom';
import CardCustom from '../components/CardCustom';
import lightBulb from '../assets/images/lightbulb_icon.svg';
import world from '../assets/images/world_icon.svg';
import labTop from '../assets/images/labtop_icon.svg';
import mainGraphic from '../assets/images/main_graphic.svg';
import Panel from '../components/Panel';
import SlideMenu from '../components/SlideMenu';

import * as colors from '../assets/jss/colors';

//  Style Overrides
const styles = theme => ({
  root: {
    color: 'white',
  },
  panel2Inner: {
    color: theme.palette.text.primary,
  },
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
  panel1: {
    ...theme.palette.blueToGreen,
  },
  panel2: {
    paddingTop: '30px',
  },
  icon: {
    position: 'relative',
    maxWidth: '120px',
    marginTop: '-75px',
    marginBottom: '10px',
  },
  iconSubtitle: {
    marginTop: '10px',
    marginBottom: '20px',
  },
  iconWrapper: {
    marginTop: '20px',
    maxWidth: '400px',
    [theme.breakpoints.up(800)]: {
      maxWidth: '100%',
    },
    '& p': {
      textAlign: 'left',
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
  formTitle: {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '50px',
    animation: '.3s ease-in-out both slide-in,.15s linear both simple-fade',
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
    paddingBottom: '20px',
  },
  formContainer: {
    width: '800px',
  },
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

const initialMenugs = [
  {
    title: 'What Are You Looking to Defeat',
    options: [
      {
        choice: 'A) SAT',
        options: [
          {
            title: 'A) Learn more about our programs',
            options: ['A) Learn more about our programs', 'B) Just let me sign up already'],
          },
        ],
      },
      {
        choice: 'B) ACT',
      },
    ],
  },
];

const MAX_STEPS = 4;

class IndexPage extends Component {
  constructor() {
    super();
    this.state = { menu: '' };
    this.myDivToFocus = React.createRef();
  }

  handleClick = () => {
    const { menus } = this.state;
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  setMenu = newMenu => {
    this.setState({ menu: newMenu });
  };

  render() {
    const { classes } = this.props;
    const { menu } = this.state;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.panel1}>
            <Header />
            <Panel>
              <Grid container justify="space-between" className={classes.panel1Inner}>
                <Grid item container xs className={classes.textContainer}>
                  <Grid item>
                    <Typography variant="h4" color="inherit" className={classes.logoText}>
                      Creative, Fun, Interesting Test Prep
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
                    hasArrow
                    color="blue"
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
            <Grid
              item
              container
              justify="space-between"
              spacing={40}
              className={classes.iconsWrapper}
            >
              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom padding className={classes.card}>
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
                      Bad Stuff
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom padding className={classes.card}>
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
                      Awesome Fun
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>

              <Grid item container direction="column" className={classes.iconWrapper}>
                <CardCustom padding className={classes.card}>
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
                      Gone for
                    </Typography>
                  </Grid>
                </CardCustom>
              </Grid>
            </Grid>

            <div ref={this.myDivToFocus} className={classes.formWrapper}>
              <div className={classes.formContainer}>
                {(() => {
                  switch (menu) {
                    case 'SAT':
                      return (
                        <div>
                          <SlideMenu title="Make a selection" />

                          <div className={classes.formChoices}>
                            <Typography variant="h5" className={classes.button} color="inherit">
                              A) Learn more about our programs
                            </Typography>
                            <Typography
                              variant="h5"
                              onClick={() => this.setMenu('SAT_2')}
                              className={classes.button}
                              color="inherit"
                            >
                              B) Just let me sign up already
                            </Typography>
                          </div>

                          <ButtonCustom
                            color="green"
                            className={classes.button}
                            onClick={() => this.setMenu('ROOT')}
                          >
                            Back
                          </ButtonCustom>
                        </div>
                      );
                    case 'SAT_2':
                      return (
                        <div>
                          <Typography
                            variant="overline"
                            className={classes.formTitle}
                            color="inherit"
                          >
                            Nice! So which program are you interested in?
                          </Typography>
                          <div className={classes.formChoices}>
                            <Typography variant="h5" className={classes.button} color="inherit">
                              A) Online Video Course
                            </Typography>
                            <Typography
                              variant="h5"
                              onClick={() => this.setMenu('BUY')}
                              className={classes.button}
                              color="inherit"
                            >
                              B) 1 on 1 Instruction
                            </Typography>
                            <Typography variant="h5" className={classes.button} color="inherit">
                              C) In-person Bootcamp
                            </Typography>
                          </div>
                          <ButtonCustom
                            color="green"
                            className={classes.button}
                            onClick={() => this.setMenu('ROOT')}
                          >
                            Back
                          </ButtonCustom>
                        </div>
                      );
                    case 'ACT':
                      return (
                        <div>
                          <SlideMenu title="Nice! So which program are you interested in?" />

                          <button onClick={() => this.setMenu('BUY')}>BUY ACT!</button>
                          <button onClick={() => this.setMenu('ROOT')}>GO BACK</button>
                        </div>
                      );
                    case 'BUY':
                      return (
                        <div>
                          <h1>You bought SAT!</h1>
                        </div>
                      );
                    default:
                      return (
                        <div>
                          <SlideMenu title="What are you looking to defeat?" />

                          <Typography
                            variant="h5"
                            className={classes.button}
                            color="inherit"
                            onClick={() => this.setMenu('SAT')}
                          >
                            A) SAT
                          </Typography>

                          <Typography
                            variant="h5"
                            className={classes.button}
                            color="inherit"
                            onClick={() => this.setMenu('ACT')}
                          >
                            A) ACT
                          </Typography>
                          <Typography
                            variant="h5"
                            className={classes.button}
                            color="inherit"
                            onClick={() => this.setMenu('CLASS')}
                          >
                            A) A Class
                          </Typography>
                          <Typography
                            variant="h5"
                            className={classes.button}
                            color="inherit"
                            onClick={() => this.setMenu('DOMINION')}
                          >
                            A) All Those Who Oppose my dominion
                          </Typography>
                        </div>
                      );
                  }
                })()}
                <div>
                  <div className={classes.formChoices} />
                </div>
              </div>
            </div>
          </Panel>
          <Panel className={classes.footer} />

          <Grid container className={classes.panel3}>
            <Typography variant="body1" className={classes.button} color="textPrimary">
              SAT
            </Typography>
            <Typography variant="body1" className={classes.button} color="textPrimary">
              ACT
            </Typography>
            <Typography variant="body1" className={classes.button} color="textPrimary">
              A Class
            </Typography>
            <Typography variant="body1" className={classes.button} color="textPrimary">
              Synapse Prep Copyright 2019
            </Typography>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
