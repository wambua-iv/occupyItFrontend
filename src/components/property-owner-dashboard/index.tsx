import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../utils/GlobalState';
import Listings from '../property-listings/Listings';
import OwnerInfo from './OwnerInfo';

export interface User {
  email?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  ID?: number;
  _id?: string;
  phone_number?: number;
}

function PropertyOwner({ listings }: any) {
  return listings == null ? (
    <Container maxWidth="lg">
      <OwnerInfo />
      <Typography variant="h4" sx={{my: 25, textAlign: 'center', color: '#0009'}}>
        You haven't posted any properties yet
      </Typography>
    </Container>
  ) : (
    <Container maxWidth="lg">
      <OwnerInfo />
      <Listings listings={listings} />
    </Container>
  );
}
export default PropertyOwner;
