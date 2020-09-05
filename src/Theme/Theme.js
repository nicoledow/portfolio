import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#97c8eb' //pale cerulean
    },
    secondary: {
      main: '#3aafb9' //verdigris
    },
    error: {
        main: '#64e9ee' //electric blue
    },
    info: {
        main: '#001011' //rich black fogra 29
    }
  },
  typography: {
      fontFamily: ['Lustria', 'Lato'],
      h1 : {
        fontFamily: 'Lustria'
      },
      h4: {
          fontFamily: 'Lato'
      },
      h6: {
          fontFamily: 'Lato'
      }
  }
});

export default theme;