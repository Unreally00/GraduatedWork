import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';

import { ServicesCard } from '../../components/ServicesCard';

export const Services = ({ services, licenses, certificates }) => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h5' sx={{ mb: '2rem' }}>
        Наши Услуги
      </Typography>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={8} xl={9} justifyContent="center" spacing={3}>
          {
            services.map((service, ind) =>
              (
                <Grid item xs={12} md={12} xl={6} key={ind}>
                  <ServicesCard service={service} />
                </Grid>
              ))
          }
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
            <Typography variant='h5' sx={{ mb: '1rem' }}>
              Сертификаты
            </Typography>
            {
              certificates.map((certificate) => 
                <Button size="small" variant='outlined' color="secondary" key={certificate.id} sx={{ display: "block", mb: "1rem", width: '90%' }} onClick={() => window.open(certificate.image.url)}>{certificate.title}</Button>
              )
            }
            <Typography variant='h5' sx={{ m: '2rem 0 1rem' }}>
              Лицензии
            </Typography>
            {
              licenses.map((license) => 
                <Button size="small" variant='outlined' color="secondary" key={license.id} sx={{ display: "block", mb: "1rem", width: '90%' }} onClick={() => window.open(license.image.url)}>{license.title}</Button>
              )
            }
        </Grid>
      </Grid>
    </Container>
  )
}
