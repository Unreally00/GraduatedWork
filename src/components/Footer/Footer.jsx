import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { theme } from '../../theme';

const useStyles = makeStyles(()=>({
  outerСontainer: {
    bottom: 0,
    marginTop: '4rem',
    paddingBottom: '2rem',
    background: theme.palette.secondary.dark,
    color: theme.palette.text.contrastText,
  },
  sectionTitle: {
    fontSize: '1.825rem !important',
    fontWeight: '500 !important',
  },
  requisites: {
    marginBottom: '0.3rem !important'
  },
  innerContainer: {
    display: 'flex',
    margin: '0.3rem 0'
  },
  icon: {
    marginRight: '0.4rem',
  }
}));

export const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
      <Container maxWidth={false} className={classes.outerСontainer}>
        <Container maxWidth='xl'>
          <Grid container spacing={5} justifyContent="space-between">
            <Grid item xs={12} sm={12} md={5.5}>
              <Typography>gosp.by © Все права защищены, {currentYear} г.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3.5}>
              <Typography className={[classes.sectionTitle, classes.requisites].join(' ')}>Реквизиты</Typography>
              <Box>
                <Typography>p/c BY48BPSB301221121560129330000</Typography>
                <Typography>Региональная Дирекция №300</Typography>
                <Typography>ОАО 'БПС-Сбербанк', BIC BPSBBY2X</Typography>
                <Typography>УНП 40003572, ОКПО 03589140</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2.5}>
              <Typography className={classes.sectionTitle}>Контакты</Typography>
                <Box className={classes.innerContainer} >
                  <PhoneIcon className={classes.icon} />
                  <Box>
                    <Typography>(8-10-375-232) 50-93-78</Typography>
                    <Typography>Факс (8-10-375-232) 50-94-48</Typography>
                  </Box>
                </Box>
                <Box className={classes.innerContainer} >
                  <EmailIcon className={classes.icon} />
                  <Typography>org_gosp@gosp.by</Typography>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
  )
}
