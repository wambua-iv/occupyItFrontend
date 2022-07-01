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
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 4,
        p: 4,
        height: '270px',
        backgroundColor: '#',
        borderRadius: '50px 50px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box style={styles}>
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
  );
}
export default Footer;
