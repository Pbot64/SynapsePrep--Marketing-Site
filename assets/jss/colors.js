import wavePattern from '../images/wavePattern.png';
import { withStyles } from '@material-ui/core/styles';

export const blueToPurple = {
  background:
    'url(' +
    wavePattern +
    '), linear-gradient(45deg, #4fa3eb 15%, #9c6bdf 62%, #9866df 76%, #7336df 110%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(45deg, #4fa3eb 15%, #9c6bdf 62%, #9866df 76%, #7336df 110%)',
  },
};

export const blueToGreen = {
  background:
    'url(' + wavePattern + '), linear-gradient(45deg, #2980ba 0%, #238E9B 50%, #00BF6F 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(45deg, #2980ba 0%, #238E9B 50%, #00BF6F 100%)',
  },
};

export const blueToTurquoise = {
  background: 'url(' + wavePattern + '), linear-gradient(224deg, #209cff 0%, #68e0cf 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(224deg, #209cff 0%, #68e0cf 100%)',
  },
};

export const blueToTurquoise1 = {
  background: 'url(' + wavePattern + '), linear-gradient(45deg, #3692f6 0%, #52ade7 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(45deg, #3692f6 0%, #52ade7 100%)',
  },
};

export const blueToTurquoise2 = {
  background: 'url(' + wavePattern + '), linear-gradient(45deg, #51ace7 0%, #6ac5d8 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(45deg, #51ace7 0%, #6ac5d8 100%)',
  },
};

export const blueToTurquoise3 = {
  background: 'url(' + wavePattern + '), linear-gradient(45deg, #64c0d8 0%, #68e0cf 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(45deg, #64c0d8 0%, #68e0cf 100%)',
  },
};

export const pinkToYellow = {
  background:
    'url(' +
    wavePattern +
    '), linear-gradient(224deg, #ee5087, #ef5186 1%, #f05784 7%, #ffbe5f 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(224deg, #ee5087, #ef5186 1%, #f05784 7%, #ffbe5f 100%)',
  },
};

export const pinkToPurple = {
  background:
    'url(' +
    wavePattern +
    '), linear-gradient(224deg,  #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
  backgroundBlendMode: 'color-burn',
  '@media (max-width: 600px)': {
    background: 'linear-gradient(224deg,  #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
  },
};

export const whiteToLightBlue = {
  background: 'linear-gradient(#fff 0%, #e8f5ff 50%)',
};
