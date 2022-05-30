import React, { useState } from "react";
import { Card, ListItemText, Typography, CardMedia, Button, Modal, Box, List, ListItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '1px solid #333',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export const ServicesCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{
      display: 'flex',
      height: '150px',
      padding: '1rem 1rem 2rem',
    }}>
      <CardMedia
        component="img"
        image={service.image.url}
        alt={service.title}
        sx={{ width: '30%' }}
      />
      <ListItemText
        sx={{ padding: '0 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        primary={<React.Fragment>
          <Typography
            sx={{fontSize: '18px', fontWeight: 'bold' }}
          >
            {service.title}
          </Typography>
        </React.Fragment>}
        secondary={
            <React.Fragment>
              <Button variant="outlined" color="secondary" onClick={handleOpen} endIcon={<SendIcon />}>
                Узнать больше
              </Button>
            </React.Fragment>
          }
        />
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography
              variant="h5" gutterBottom
            >
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: 18 }}>
              {service.description}
            </Typography>
            <List sx={{ width: '100%', }}>
              {service.servicesList.map((value, ind) => (
                <ListItem
                  disableGutters
                  key={value}
                  sx={{ padding: 0 }}
                >
                  <ListItemText primary={`${ind + 1}. ${value}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Modal>
      </Card>
  );
}
