import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, FormControlLabel, RadioGroup, Radio, Box, Divider, IconButton, TablePagination, TableFooter, Collapse, GridList, Chip } from '@material-ui/core';
import { TabBar } from './TabBar';
import { DropDown } from './common/DropDown';
import { ButtonGroup } from './common/ToggleButtonGroup';
import DatePicker from './common/DatePicker';
import PrimaryButton from './common/PrimaryButton';
import SecondaryButton from './common/SecondaryButton';
import { SearchBox } from './common/SearchBox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { format } from 'date-fns';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import LocalShippingIcon from '@material-ui/icons/LocalShippingOutlined';
import AddIcon from '@material-ui/icons/Add';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5)
  },
  title: {
    fontWeight: 500
  },
  table: {
    minWidth: 700
  },
  tabelCell: {

  },
  icon: {
    // padding: 5
  },
  shippingIcon: {
    color: 'green'
  },
  tableRow: {
    height: 86
  },
  specList: {
    paddingLeft: 0,
    flexFlow: 'wrap column'
  },
  chip: {
    backgroundColor: '#F7F7F7',
    fontWeight: theme.typography.fontWeightMedium
  },
  dropdownSecondarColor: {
    color: theme.palette.secondary.main
  },
  downArrowStyle: {
    width: 20,
    padding: 0,
    color: theme.palette.common.black
  }
}));

type ItemType = {
  brandName: string,
  title: string,
  price: number,
  totalPrice: number
  quantity: number,
  specifications: {
    name: string,
    value: string
  }[]
}
type OrderItem = {
  orderDate: Date,
  orderNumber: number,
  payment: string | number,
  orderSource: string,
  total: number,
  status: string,
  items?: ItemType[]
};

interface OrderHistoryProps {
  orders: OrderItem[]
}

export const OrderHistory: React.FunctionComponent<OrderHistoryProps> = ({ orders }): JSX.Element => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [orderOption, setOrderOption] = React.useState('xls');

  const [openState, setOpen] = React.useState<{ [key: number]: boolean }>({});
  // const classes = useRowStyles();

  const onRadioOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderOption((event.target as HTMLInputElement).value);
  };
  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, orders.length - page * rowsPerPage);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'Shipped':
        return <LocalShippingIcon className={classes.icon} htmlColor='#7FBA00' fontSize="small" />
      case 'In progress':
        return <ScheduleIcon className={classes.icon} htmlColor='#ED7700' />
      case 'Cancelled':
        return <ErrorOutlineIcon className={classes.icon} color='error' />
      default:
        return null
    }
  }
  return (
    <div className={classes.root}>

      <Typography className={classes.title} variant="h4" component="h4" >
        Order History
      </Typography>

      <Grid container className={classes.root}>
        <Grid item lg={4} xs={12}>
          <TabBar />
        </Grid>

        <Grid item lg={8} xs={12}>
          <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
            <Grid item>
              <Box pr={2}>
                <Typography>
                  Export orders as:
          </Typography>
              </Box>
            </Grid>
            <Grid item>
              <RadioGroup row aria-label="position" name="position" defaultValue="top" value={orderOption} onChange={onRadioOptionChange}>
                <FormControlLabel value="xls" control={<Radio color="secondary" />} label="XLS" />
                <FormControlLabel value="csv" control={<Radio color="secondary" />} label="CSV" />
              </RadioGroup>
            </Grid>
            <Grid item>
              <Box pr={2}>
                <Typography>
                  From Page:
          </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xs={6}>
              <DropDown options={[{ name: '', value: '' }]} />
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box my={4} >
        <Divider />
      </Box>

      <Grid container spacing={2} >
        <Grid item xs={10}>
          <SearchBox />
        </Grid>
        <Grid item xs={2} container justify='flex-end'>
          <DropDown options={[{ name: 'Advanced Search', value: -1 }]} classes={{ root: classes.dropdownSecondarColor }} />
        </Grid>
      </Grid>

      <Box my={4} />

      <Grid container direction='column' spacing={1} >
        <Grid item xs={12}>
          <Typography>
            Order date range
          </Typography>
        </Grid>
        <Grid item xs={12}   >
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Box pr={2}>
              <ButtonGroup />
            </Box>
            <Box pr={2} display='flex' flexDirection='row' alignItems='center'>
              <DatePicker />
              <Typography>  to </Typography>
              <DatePicker />
            </Box>
            <Box pr={2}>
              <SecondaryButton text='Clear' color='inherit' width={170} />
            </Box>
            <PrimaryButton text='Apply' width={170} />
          </Box>
        </Grid>
      </Grid>

      <Box my={4} />

      <TableContainer>
        <Table className={classes.table} style={{ width: "auto", tableLayout: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell >
                <Box display='block' width='max-content'>
                  Order Date <IconButton className={classes.downArrowStyle} ><ArrowDropDownIcon /></IconButton>
                </Box>
              </TableCell>
              <TableCell  >
                <Box display='block' width='max-content'>
                  Order number <IconButton className={classes.downArrowStyle}><ArrowDropDownIcon /></IconButton>
                </Box>
              </TableCell>
              <TableCell  >
              <Box display='block' width='max-content'>
              Payment <IconButton className={classes.downArrowStyle}><ArrowDropDownIcon /></IconButton>

              </Box>

              </TableCell>
              <TableCell  ><DropDown options={[{ name: 'Order source', value: -1 }]} color='inherit' fullWidth={false} /></TableCell>
              <TableCell >
              <Box display='block' width='max-content'>
              Total (USD) <IconButton className={classes.downArrowStyle}><ArrowDropDownIcon /></IconButton>
                
              </Box>
                </TableCell>
              <TableCell ><DropDown options={[{ name: 'Status', value: -1 }]} color='inherit' fullWidth={false} /></TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : orders
            ).map((row: OrderItem, idx: number) => (
              <React.Fragment key={idx}>
                {
                  !openState[idx] ? (
                    <TableRow key={row.orderNumber} className={classes.tableRow} >
                      <TableCell >
                        {format(new Date(), "dd-MMM-yyyy")}
                      </TableCell>
                      <TableCell >{row.orderNumber}</TableCell>
                      <TableCell >{row.payment}</TableCell>
                      <TableCell >{row.orderSource}</TableCell>
                      <TableCell >{row.total}</TableCell>
                      <TableCell className={classes.tabelCell} >
                        <IconButton style={{ padding: 8 }}>
                          {renderStatusIcon(row.status)}
                        </IconButton>
                        {row.status}
                      </TableCell>
                      <TableCell >
                        <SecondaryButton text='Track shipped items' width={180} />
                      </TableCell>
                      <TableCell >
                        <SecondaryButton text='Reorder' />
                      </TableCell>
                      <TableCell>
                        <IconButton style={{ padding: 8 }} onClick={() => setOpen((prevState) => ({ ...prevState, [idx]: true }))}>
                          <AddIcon className={classes.icon} color='secondary' fontSize="large" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ) : (
                      <TableRow key={row.orderNumber} className={classes.tableRow} >
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell />
                        <TableCell className={classes.tabelCell} >
                          <IconButton style={{ padding: 8 }}>
                            {renderStatusIcon(row.status)}
                          </IconButton>
                          {row.status}
                        </TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell>
                          <IconButton style={{ padding: 8 }} onClick={() => setOpen((prevState) => ({ ...prevState, [idx]: true }))} >
                            <AddIcon className={classes.icon} color='secondary' fontSize="large" />
                          </IconButton>
                        </TableCell>
                      </TableRow>

                    )
                }
                <TableRow>

                  <TableCell style={{ padding: 0 }} colSpan={12}>
                    <Collapse in={openState[idx]} timeout="auto" unmountOnExit>
                      <Box boxShadow={2} >
                        <Paper variant='outlined' square elevation={8} style={{ borderTop: '2px solid #636363' }} >
                          <Grid container style={{ backgroundColor: '#F7F7F7', padding: 18 }} alignItems='center' >
                            <Grid item xs={11}>
                              <Box display='flex' flexDirection='row'>

                                <Box pr={1} >
                                  <IconButton size='small'>
                                    {renderStatusIcon(row.status)}
                                  </IconButton>
                                </Box>
                                <Box pr={1}>
                                  <Typography variant="h6">{row.status}</Typography>
                                </Box>
                                <Typography variant="h6" color='textSecondary'>(6 items)</Typography>
                              </Box>

                            </Grid>

                            <Grid item xs={1}>
                              <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                                <IconButton style={{ padding: 8 }} onClick={() => setOpen((prevState) => ({ ...prevState, [idx]: false }))}>
                                  <RemoveIcon className={classes.icon} color='secondary' fontSize="large" />
                                </IconButton>
                              </Box>
                            </Grid>

                          </Grid>
                          {row.items && row.items.map((item, idx) => {
                            return (
                              <Box mx={4} my={3} key={idx}>
                                <Grid container>

                                  <Grid item container xs={9}>
                                    <Grid item xs={12}>
                                      <Box margin={1} ml={0}>
                                        <Typography variant="subtitle2" gutterBottom >{item.brandName}</Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Box margin={1} ml={0}>
                                        <Typography variant="h6" color='secondary' gutterBottom >{item.title}</Typography>
                                      </Box>
                                    </Grid>
                                    <Grid item direction='row' container xs={12}>

                                      <Grid item container direction='column' component='ul' className={classes.specList} xs={8}>
                                        <GridList cellHeight={'auto'} cols={2}>
                                          {item.specifications.map((spec, idx) => (
                                            <Grid component='li' item xs={6} key={idx}>
                                              <Box display='flex' flexDirection='row' >
                                                <Box display="inline" pr={1}>
                                                  <Typography variant="subtitle2" color='textPrimary' gutterBottom >{spec.name}:</Typography>
                                                </Box>
                                                <Box display="inline">
                                                  <Typography variant="subtitle2" color='textSecondary' gutterBottom >{spec.value}</Typography>
                                                </Box>
                                              </Box>

                                            </Grid>
                                          ))}
                                        </GridList>
                                      </Grid>
                                      <Grid item xs={1} container>
                                        <Box padding={0} mr={1} >
                                          <Divider orientation="vertical" />
                                        </Box>
                                      </Grid>
                                      <Grid item container direction='column' component='ul' className={classes.specList} xs={3}>
                                        <GridList cellHeight={'auto'} cols={1}>

                                          <Box display="flex" pr={1} component='li'>
                                            <Typography variant="subtitle2" color='textPrimary' gutterBottom >Your Price:</Typography>
                                            <Box pr={1} />
                                            <Typography variant="subtitle2" color='textSecondary' gutterBottom >{item.price}</Typography>
                                          </Box>

                                          <Box display="flex" pr={1} component='li'>
                                            <Typography variant="subtitle2" color='textPrimary' gutterBottom >Quantity:</Typography>
                                            <Box pr={1} />

                                            <Typography variant="subtitle2" color='textSecondary' gutterBottom >{item.quantity}</Typography>
                                          </Box>

                                          <Box display="flex" pr={1} component='li'>
                                            <Typography variant="subtitle2" color='textPrimary' gutterBottom >Total Price:</Typography>
                                            <Box pr={1} />

                                            <Typography variant="subtitle2" color='textSecondary' gutterBottom >{item.totalPrice}</Typography>
                                          </Box>

                                        </GridList>

                                      </Grid>
                                    </Grid>

                                    <Grid item container xs={12} spacing={2}>

                                      <Grid item>
                                        <Box pt={2}>
                                          <Chip label="Certificates" clickable className={classes.chip} />
                                        </Box>
                                      </Grid>
                                      <Grid item>
                                        <Box pt={2}>
                                          <Chip label="SDS" clickable className={classes.chip} />
                                        </Box>
                                      </Grid>
                                      <Grid item>
                                        <Box pt={2}>
                                          <Chip label="Product Documents" clickable className={classes.chip} deleteIcon={<ArrowDropDownIcon />} onDelete={() => null} />
                                        </Box>
                                      </Grid>
                                      <Grid item>
                                        <Box pt={2} >
                                          <Chip label="Save to list" clickable className={classes.chip} deleteIcon={<ArrowDropDownIcon />} onDelete={() => null} />
                                        </Box>
                                      </Grid>
                                      <Grid item>
                                        <Box pt={2} >
                                          <Chip label="Reorder" clickable className={classes.chip} />
                                        </Box>
                                      </Grid>

                                    </Grid>
                                  </Grid>

                                  <Grid item container direction='column' xs={3} spacing={2} justify='flex-end' alignItems='flex-end'>
                                    <Grid item>
                                      <SecondaryButton text='Request invoice' width={200} />
                                    </Grid>
                                    <Grid item>
                                      <SecondaryButton text='Request dispatch notes' width={200} />
                                    </Grid>
                                    <Grid item>
                                      <SecondaryButton text='Return' width={200} />
                                    </Grid>
                                    <Grid item>
                                      <SecondaryButton text='Report an issue' width={200} />
                                    </Grid>
                                  </Grid>

                                  <Grid item xs={12}>
                                    <Box my={3}>
                                      <Divider />
                                    </Box>
                                  </Grid>

                                </Grid>
                              </Box>
                            )
                          })}
                        </Paper>
                      </Box>
                    </Collapse>
                  </TableCell>

                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={12}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
              {/* <Pagination count={orders.length} page={page} onChange={handleChangePage} variant="outlined" color="primary" shape="rounded" /> */}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

    </div >
  )
}
