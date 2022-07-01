import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import React from 'react';
import Listings from '../property-listings/Listings';
import OwnerInfo from './OwnerInfo';

function PropertyOwner() {
  const HambegerSpans = styled.span`
    height: 2px;
    width: 40px;
    background-color: #0008;
    margin: 0.25rem;
  `;
  return (
    <Container maxWidth="lg">
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        
        <Box
          sx={{
            my: 2,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <HambegerSpans />
          <HambegerSpans />
          <HambegerSpans />
        </Box>
      </Box> */}
      <OwnerInfo />
      <Listings />
    </Container>
  );
}
export default PropertyOwner;
