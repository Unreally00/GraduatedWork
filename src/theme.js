import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d37326',
    },
    secondary: {
      main: '#4e4949',
      dark: '#363333',
    },
    background: {
      paper: '#F7F5F3',
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
      contrastText: '#ffffff'
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  }
});