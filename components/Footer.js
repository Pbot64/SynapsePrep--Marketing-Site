// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

// Local Components
import Panel from './Panel';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Local Assets
import logoBlue from '../static/images/logo-blue.svg';
import facebook from '../static/images/facebook-icon.svg';
import linkedin from '../static/images/linkedin-icon.svg';
import youtube from '../static/images/youtube-icon.svg';
import vercelTag from '../static/images/powered-by-vercel.svg';

//  Style Overrides
const styles = theme => ({
  root: { paddingTop: '30px' },
  logoContainer: {
    flexWrap: 'nowrap',
    color: 'white',
    marginBottom: '10px',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8'
    }
  },

  logo: {
    width: '60px'
  },
  logoText: {
    marginLeft: '15px'
  },
  copyText: {
    opacity: '0.8',
    marginBottom: '20px',
    marginTop: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  divider: {
    backgroundColor: '#fff',
    opacity: '0.2',
    height: '1px',
    opacity: '0.8',
    marginTop: '30px',
    marginBottom: '30px'
  },
  title: {
    fontWeight: '500',
    letterSpacing: '1px',
    marginBottom: '24px'
  },
  subtitle: {
    cursor: 'pointer',
    marginBottom: '10px',
    opacity: '0.8'
  },
  copyrightContainer: {
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start'
    }
  },
  socialIcon: {
    height: '30px',
    marginRight: '10px'
  },
  vercelTag: {
    marginBottom: '15px',
    marginTop: '30px',
    opacity: '0.8',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px'
    }
  },
  contactSubtitle: { opacity: '0.8' },
  contactTitle: {
    marginRight: '10px',
    fontWeight: '500',
    letterSpacing: '1px'
  },
  columnContainer: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  contactContainer: {
    flexGrow: '0',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: '20px',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      marginBottom: '0px'
    }
  },
  bottomContainer: {
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  socialContainer: {
    marginBottom: '30px',
    [theme.breakpoints.up(600)]: {
      marginBottom: '0px'
    }
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit'
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Panel padding backgroundColor='darkGrey'>
        <Grid item container className={classes.root}>
          <Grid item container justify='space-between'>
            <Grid item container xs={12} sm={4}>
              <Grid item container>
                <Grid item container className={classes.logoContainer}>
                  <img src={logoBlue} className={classes.logo} alt='logo' />
                  <Link href='/'>
                    <Typography variant='overline' color='inherit' className={classes.logoText}>
                      Synapse Prep
                    </Typography>
                  </Link>
                </Grid>
                <Typography variant='body1' className={classes.copyText} color='inherit'>
                  Premiere test prep company with a unique approach that works to get students into
                  their dream school.
                </Typography>
              </Grid>
              <Grid item container xs className={classes.socialContainer}>
                <a href='https://www.facebook.com/synapseprep'>
                  <img src={facebook} alt='facebook' className={classes.socialIcon} />
                </a>
                <a href='https://www.linkedin.com/company/synapseprep'>
                  <img src={linkedin} alt='linkedin' className={classes.socialIcon} />
                </a>
                <a href='http://youtube.com'>
                  <img src={youtube} alt='youtube' className={classes.socialIcon} />
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} container>
              <Grid item xs container direction='column' className={classes.columnContainer}>
                <Typography variant='subtitle2' className={classes.title} color='inherit'>
                  Subject Areas
                </Typography>
                <Link href='/sat'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    SAT
                  </Typography>
                </Link>
                <Link href='/act'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    ACT
                  </Typography>
                </Link>
                <Link href='/academic'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    Academic Tutoring
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs container direction='column' className={classes.columnContainer}>
                <Typography variant='subtitle2' className={classes.title} color='inherit'>
                  Company
                </Typography>
                <Link href='/about'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    About
                  </Typography>
                </Link>
                <Link href='/construction'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    Become a Tutor
                  </Typography>
                </Link>
                <Link href='/legal'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    Legal
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs container direction='column' className={classes.columnContainer}>
                <Typography variant='subtitle2' className={classes.title} color='inherit'>
                  Resources
                </Typography>
                <Link href='/blog'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    Blog
                  </Typography>
                </Link>
                <a className={classes.link} href='https://app.synapseprep.net/login'>
                  <Typography variant='subtitle2' className={classes.subtitle} color='inherit'>
                    Practice Problems
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes.divider} />
          <Grid item container justify='space-between' className={classes.bottomContainer}>
            <Grid item>
              <Grid container item direction='column' className={classes.copyrightContainer}>
                <a href='https://vercel.com?utm_source=synapse-prep-app​'>
                  <img src={vercelTag} alt='Powered by Vercel' className={classes.vercelTag} />
                </a>
                <Typography variant='body1' color='inherit'>
                  © All Rights Reserved Synapse Prep 2020
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs className={classes.contactContainer}>
              <Grid item className={classes.contactSubtitleContainer}>
                <Typography variant='subtitle2' className={classes.contactTitle} color='inherit'>
                  Contact
                </Typography>
                <Typography variant='body1' className={classes.contactSubtitle} color='inherit'>
                  support@synapseprep.net
                </Typography>
                <Typography variant='body1' className={classes.contactSubtitle} color='inherit'>
                  ‪(512) 481-2485‬
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Panel>
    </React.Fragment>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
