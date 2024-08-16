'use client'
import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E4A28E',
    },
    secondary: {
      main: '#A08C82',
    },
    background: {
      default: '#232627',
      paper: '#2B2727',
    },
    text: {
      primary: '#ebf4f1',
    },
  },
});

export default theme;