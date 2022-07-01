import {  Email, Phone, Verified } from '@mui/icons-material';
import { Container, Box, Typography, Button } from '@mui/material';
import React from 'react';

function OwnerInfo() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#7c28f2b9',
        height: { xs: '160px', md: '200px' },
        mt: { xs: 5, md: 0 },
        mb: { xs: 2, md: 2 },
        borderRadius: '10px',
        position: 'relative',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '30px', md: '96px' },
          height: { xs: '30px', md: '96px' },
          backgroundColor: '#7C28F2',
          borderRadius: '50%',
          position: 'absolute',
          top: { xs: '70%', md: '50%' },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          zIndex: 1000,
          display: 'flex',
          color: '#fff',
          top: { xs: '20%', md: '10%' },
          left: {xs: '7%', }
        }}
      >
        <Box
          component="img"
          alt='Photo by <a href="https://unsplash.com/es/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
          src="/profile.jpg"
          sx={{ width: { xs: '120px', md: '120px' }, height: { xs: '120px', md: '160px' }, borderRadius: '50%', mr: 4 }}
        />
        <Box>
          <Typography sx={{fontWeight: 600, fontSize: '1.5rem', mb: 2}}>Rita Flores <Verified /></Typography>
          <Typography sx={{fontWeight: 400, fontSize: '.9rem'}}>Makongeni,Thika.{'     '} </Typography>
          <Typography sx={{fontWeight: 600, fontSize: '1.2rem', mb: 1}}>Kiambu</Typography>
          <Box sx={{display: 'flex', mb: 1}}>
            <Phone />{' '}<Typography>{'  '} (254) 782455463</Typography>
          </Box>
          <Box sx={{display: 'flex', mb: 1}}>
            <Email />{' '}<Typography>{'  '} rita.flores@occupy.com</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: '#7C28F2',
          width: { xs: '138px', md: '360px' },
          height: { xs: '138px', md: '360px' },
          clipPath: 'circle(46.5% at 99% 99%)',
          right: 0,
          bottom: 0,
          borderBottomRightRadius: '10px',
        }}
      />
    </Container>
  );
}
export default OwnerInfo;
