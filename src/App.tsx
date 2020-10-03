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
import "./scrollbar.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(231, 19, 22)',
    },
    secondary: {
      main: 'rgb(30, 138, 231)'
    }
  },
  typography: {
    h6: {
      fontSize: 16,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 12
    }
  }
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
