import React from 'react';
import { Header } from './components/Header';
import { ThemeProvider, Divider, Box } from '@material-ui/core';
import { OrderHistory } from './components/OrderHistory';
import { createMuiTheme } from '@material-ui/core/styles';
import { SearchBoxGroup } from './components/common/SearchBoxGroup';
import { Breadcrumb } from './components/common/BreadCrumb';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { ordersHistory } from './constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E71316',
    },
    secondary: {
      main: '#2c97f3'
    }
  },
  typography: {
    // fontFamily: 'Raleway, Arial',
    fontWeightMedium: 500
  },
  // overrides: {
  //   MuiInput: {
  //     input: {
  //       "&::placeholder": {
  //         color: "#000",
  //         fontWeight: 600,
  //         fontSize: 16
  //       },
  //       color: "#000",
  //       fontWeight: 500,
  //       fontSize: 14
  //     }
  //   }
  // }
});

function App() {
  return (
    <div style={{ margin: '20px 5rem' }}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Header />
          <SearchBoxGroup />
          <Box my={4} >
            <Divider />
          </Box>
          <Breadcrumb />
          <OrderHistory orders={ordersHistory} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
