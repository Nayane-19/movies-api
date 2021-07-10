import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { THEMES } from '../../utils/constants';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      logo: '#000',
      background: {
        default: 'rgba(255, 255, 255, 0.54)',
        dark: '#EEEE',
        light: '#fff',
        paper: '#e6e5e8', 
        faq: './bg.jpg',
        bannerMake: '#C4C4C4',
      },
     
      text: {
        primary: '#000',
        secondary: '#adb0bb',
        third: '#999',
        titles: '#D65333',
      },
    },
  },
  {
    name: THEMES.DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      logo: '#fff',
      background: {
        default: '#282C34',
        dark: '#1c2025',
        light: '#0C0C0C',
        paper: '#282C34',
        faq: './bg-dark.jpg',
        bannerMake: '#282C34',
      },
      
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
        third: '#999',
        titles: '#D65333',
      },
    },
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  const theme = createMuiTheme(themeOptions);

  return theme;
};

export default createTheme;