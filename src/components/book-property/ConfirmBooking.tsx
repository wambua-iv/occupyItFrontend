import { Paper, Box, Grid, Typography } from '@mui/material';
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
  property,
}: BookPropertyFormInterface) {
  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {' '}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
        }}
      >
        Confirm Property Details
      </Typography>
      <Box sx={{ width: '90%' }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.6rem' },
            mb: 2,
          }}
        >
          {property.property_name}
        </Typography>
        <Typography>{property.description}</Typography>
        <Typography>{property.additional_information}</Typography>
      </Box>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {property.images ? (
          property.images.map((img: string) => (
            <Grid key={img} xs={12} md={6} item>
              <Box
                component="img"
                src={img}
                sx={{
                  my: 0.5,
                  height: { xs: '200px', md: '250px' },
                  width: { xs: '200px', md: '250px' },
                  borderRadius: '2rem',
                  position: 'relative',
                  objectFit: 'cover',
                }}
              />
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
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
        {property.contact_information ? (
          <>
            <WeightedTypography>Contact information</WeightedTypography>
            <SpacedTypograph>
              <WeightedTypography>Owner</WeightedTypography>
              <Typography>{property.contact_information.name}</Typography>
            </SpacedTypograph>
            <SpacedTypograph>
              <WeightedTypography>Email</WeightedTypography>
              <Typography>{property.contact_information.email}</Typography>
            </SpacedTypograph>
            <SpacedTypograph>
              <WeightedTypography>Mobile</WeightedTypography>
              <Typography>
                {property.contact_information.phone_number}
              </Typography>
            </SpacedTypograph>
          </>
        ) : (
          <></>
        )}
      </Box>
      {steps ? (
        <CustomButton variant="outlined" type="submit" onClick={handleNext}>
          {step === steps.length - 1 ? 'Finish' : 'Next'}
        </CustomButton>
      ) : (
        <CustomButton onClick={handleData}>Submit</CustomButton>
      )}
    </Paper>
  );
}
export default ConfirmBooking;
