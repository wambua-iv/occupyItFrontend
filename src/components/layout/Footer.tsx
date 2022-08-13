import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../styles';

function Footer() {
  const styles = {
    width: '30%',
  };
  const styles2 = {
    width: '20%',
    color: '#999',
  };

  const Hr = styled.hr`
    width: 70%;
    height: 1px;
    border: none;
    border-top: 1px solid #9995;
    margin-top: 4rem;
  `;
  return (
    <>
    <Hr />
    <Container
      maxWidth="xl"
      sx={{
        mt: 2,
        px: 4,
        height: '270px',
        width: {xs: '80%', sm: '80%'},
        backgroundColor: '#',
        borderRadius: '50px 50px 0px 0px',
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
        justifyContent: 'space-between',
        textAlign: { xs: 'center', sm: 'center'}
      }}
    >
      <Box sx={{ width: '100%'}}>
        <Typography
          variant="h5"
          sx={{
            py: 1,
            px: 2,
            mb: 2,
            fontSize: '2rem',
            borderRadius: '1rem',
          }}
        >
          Occupy <span style={{ color: '#7C28F2' }}> It</span>
        </Typography>
        <Typography sx={{ lineHeight: 1.5, mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur amolestias cumque quas dolor quos.
        </Typography>
        <CustomButton
          sx={{
            borderRadius: '0 3rem 3rem  3rem',
            backgroundColor: '#7C28F2',
            color: '#fff',
            px: 6,
          }}
        >
          Find A Home
        </CustomButton>
      </Box>
      <Box style={styles2}>
        <Typography variant="subtitle1">About</Typography>
      </Box>
      <Box style={styles2}>
        <Typography variant="subtitle1">Support</Typography>
      </Box>
      <Box style={styles2}>
        <Typography variant="subtitle1">Contact</Typography>
      </Box>
    </Container>
    </>
  );
}
export default Footer;
