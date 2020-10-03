
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, Popover, Grid, PopoverProps, IconButton, Box } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import { Accordion, AccordionDetails, AccordionSummary } from './common/StyledAccordion';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'hidden',
    marginTop: 6,
    height: 496,
    width: 606,
    border: '1px solid rgb(220, 220, 220)'
  },
  accordianHeaderRoot: {
    height: 40,
    minHeight: 40,
    backgroundColor: 'rgb(247, 247, 247)'
  },
  heading: {

    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    flexBasis: '33.33%',
    flexShrink: 0,
    '&$expanded': {
      fontSize: theme.typography.pxToRem(14),
    },
  },
  documentTypo: {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(14)
  },
  secondaryHeading: {

    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
  viewAllText: {
    fontSize: theme.typography.pxToRem(11)
  },
  documentIcon: {
    fontSize: theme.typography.pxToRem(18),
    padding: 0,
    paddingRight: 4
  }
}));

interface ProductDocumentTypes extends PopoverProps {
  onClose: () => void;
  documents: {
    [key: string]: any
  }
}
type ExpandState = {
  coaList: boolean,
  msdsList: boolean,
  manualList: boolean
}
const expandState = {
  coaList: true,
  msdsList: true,
  manualList: true
}
export const ProductDocuments: React.FunctionComponent<ProductDocumentTypes> = ({ documents, ...props }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<ExpandState>(expandState);

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    setExpanded((prevState) => ({
      ...prevState,
      [panel]: isExpanded
    }))
  };

  return (
    <Popover
      PaperProps={{
        classes: { root: classes.root }
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    >

      <Grid container style={{ overflowY: 'hidden' }}>
        <Grid item container xs={12} alignItems={'center'} style={{ border: '1px thin rgb(220, 220, 220)', padding: '6px 0 6px 15px' }}>
          <Grid item xs={5}>
            <Typography variant='h6'  >Product Documents</Typography>
          </Grid>
          <Grid item container xs={7} justify='flex-end' alignItems='center'>
            <Typography className={classes.viewAllText} color='secondary' >
              <Link color='inherit'>View all product documents</Link>
            </Typography>
            <Box pr={2}>

              <IconButton onClick={() => props?.onClose()}>
                <CloseIcon fontSize='small' />
              </IconButton>
            </Box>

          </Grid>

        </Grid>

        <div className='scrollbar scrollbar-primary' style={{ height: 'calc(100vh - 250px)' }}>
          <div className="force-overflow">
            <Grid item container>
              <Accordion square expanded={expanded.coaList} onChange={handleChange('coaList')} >
                <AccordionSummary
                  className={classes.accordianHeaderRoot}
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Certificates</Typography>
                </AccordionSummary>
                <AccordionDetails >
                  <Grid container>
                    <Grid item>
                      <Box display='flex' flexDirection='column' pl={3}>
                        {documents?.searchResults?.msdsList?.length > 0 && documents.searchResults.msdsList.map((item: any, idx: number) => (
                          <Box key={idx} py={0.5} display='flex' alignItems='center' >
                            <IconButton className={classes.documentIcon}>
                              <InsertDriveFileOutlinedIcon fontSize='small' color='secondary' />
                            </IconButton>
                            <Typography className={classes.documentTypo} color='secondary'>
                              <Link color='inherit' href={item?.internalURL}>
                                {item?.title}
                              </Link>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded.msdsList} onChange={handleChange('msdsList')}>
                <AccordionSummary
                  className={classes.accordianHeaderRoot}
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Safety Data Sheets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item>
                      <Box display='flex' flexDirection='column' pl={3}>
                        {documents?.searchResults?.manualList?.length > 0 && documents.searchResults.manualList.map((item: any, idx: number) => (
                          <Box key={idx} py={0.5} display='flex' alignItems='center' >
                            <IconButton className={classes.documentIcon}>
                              <InsertDriveFileOutlinedIcon fontSize='small' color='secondary' />
                            </IconButton>
                            <Typography key={idx} className={classes.documentTypo} color='secondary'>
                              <Link color='inherit' href={item?.internalURL}>
                                {item?.title}
                              </Link>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded.manualList} onChange={handleChange('manualList')}>
                <AccordionSummary
                  className={classes.accordianHeaderRoot}
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>Methods and Protocol</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item>
                      <Box display='flex' flexDirection='column' pl={3}>
                        {documents?.searchResults?.coaList?.length > 0 && documents.searchResults.coaList.map((item: any, idx: number) => (
                          <Box key={idx} py={0.5} display='flex' alignItems='center' >
                            <IconButton className={classes.documentIcon}>
                              <InsertDriveFileOutlinedIcon fontSize='small' color='secondary' />
                            </IconButton>
                            <Typography key={idx} className={classes.documentTypo} color='secondary'>
                              <Link color='inherit' href={item?.lotNoUrl}>
                                {item?.lotNo}
                              </Link>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

            </Grid>
          </div>
        </div>
        <Grid item container xs={12} direction='row' alignItems='center' >

          <Box position='absolute' width='100%' bottom={0} py={1} mb={0} pl={5}>
            <Typography color='secondary' className={classes.viewAllText}>
              <Link color='inherit'> View more</Link>
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Popover>
  );
}
