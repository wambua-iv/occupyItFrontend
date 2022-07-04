import { Box, Typography } from '@mui/material';
import React from 'react';
import { BookPropertyFormInterface } from '.';
import {
  CustomButton,
  SpacedTypograph,
  WeightedTypography,
} from '../../styles';

function ConfirmBooking({
  handleData,
  handleNext,
  steps,
  step,
}: BookPropertyFormInterface) {
  const property = {
    title: 'Executive ApartMent',
    type: 'Rental',
    price: 25000,
    location: 'Kitengela',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam illum temporibus quo quis laborum, repellat nesciunt numquam recusandae error? Necessitatibus impedit, non facilis aliquam vitae totam? Quo libero distinctio nesciunt.',
    img: '/home.jpg',
    availability: '02/20/2022',
  };
  return (
    <Box>
      <Typography>Confirm Booking Details</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <Box
          component="img"
          src={property.img}
          alt="home"
          sx={{
            width: '14rem',
            height: '13rem',
            borderRadius: '1rem',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ width: '55%' }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.5rem', md: '1.6rem' },
              mb: 2,
            }}
          >
            {property.title}
          </Typography>
          <Typography>{property.description}</Typography>
        </Box>
      </Box>
      <hr />
      <Box>
        <SpacedTypograph>
          <WeightedTypography>Property Type: </WeightedTypography>
          <Typography>{property.type}</Typography>
        </SpacedTypograph>
        <SpacedTypograph>
          <WeightedTypography>Price</WeightedTypography>
          <Typography>ksh {property.price}</Typography>
        </SpacedTypograph>
        <SpacedTypograph>
          <WeightedTypography>Location</WeightedTypography>
          <Typography>{property.location}</Typography>
        </SpacedTypograph>
        <SpacedTypograph>
          <WeightedTypography>Property Availability</WeightedTypography>
          <Typography>{property.availability}</Typography>
        </SpacedTypograph>
      </Box>

      <CustomButton variant="outlined" type="submit" onClick={handleNext}>
        {step === steps.length - 1 ? 'Finish' : 'Next'}
      </CustomButton>
    </Box>
  );
}
export default ConfirmBooking;
