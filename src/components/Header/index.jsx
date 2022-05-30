import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from '@mui/material';

import { theme } from '../../theme';

const useStyles = makeStyles(()=>({
  outerСontainer: {
    // background: theme.palette.primary.main,
  },
  headerContentContainer: {
    height: '115px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // fontSize: '26px',
    // fontWeight: 800,
  }
}));

export const Header = ({ children }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Container maxWidth={false} className={classes.outerСontainer}>
      <Container maxWidth='xl'>
        <Grid container className={classes.headerContentContainer}>
          <Grid item container xs={12} md={5} lg={7}>
            <Grid item xs={11} md={2} lg={2}>logo</Grid>
            <Grid item xs={1} md={10} lg={10} sx={{alignItems: 'center'}}>
              {
                isMobile ? <Typography>ГОСП</Typography> : <Typography>ОАО "Институт Гомельоблстройпроект"</Typography>
              }
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} lg={5}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
