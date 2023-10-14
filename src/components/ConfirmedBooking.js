import React from 'react'
import { Typography } from '@mui/material';

const ConfirmedBooking = () => {
  return (
    <Typography className="green" component="h1"
    sx={{
        fontSize: '40px',
        fontFamily: 'Markazi Text',
    }}>
        Your table is reseved
    </Typography>
  );
};

export default ConfirmedBooking