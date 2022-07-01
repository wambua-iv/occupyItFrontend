import { Verified, Phone, Email } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';

function Verification() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
      <Paper
        sx={{
          m: 'auto',
          height: { xs: '90px', sm: '60vh' },
          width: { xs: '90px', sm: '90px', md: '80%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '1rem',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#9998',
            height: { xs: '250px', md: '250px' },
            width: '100%',
            p: 4,
            borderRadius: '1rem  1rem 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h5">Property Owner Verification</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                mx: 2,
                backgroundColor: '#fff',
                color: '#000',
                px: 2,
                width: { md: '150px' },
                height: '40px',
              }}
            >
              Deny
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: '3rem 0 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: 2,
                width: { md: '150px' },
                height: '40px',
              }}
            >
              Verify
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: '250px', md: '450px' },
            width: '100%',
            p: 4,
          }}
        >
          <Box
            sx={{
              mt: -10,
              p: 2,
              mx: 'auto',
              width: '70%',
              height: '140px',
              backgroundColor: '#fff',
              border: '1px solid #999',
              borderRadius: '.5rem',
              display: 'flex',
            }}
          >
            <Box
              component="img"
              alt='Photo by <a href="https://unsplash.com/es/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
              src="/profile.jpg"
              sx={{
                width: { xs: '120px', md: '100px' },
                height: { xs: '120px', md: '100px' },
                borderRadius: '50%',
                mr: 4,
                objectFit: 'cover',
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '1.5rem', mb: 2 }}>Rita Flores </Typography>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Phone /> <Typography>{'  '} (254) 782455463</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Email /> <Typography>{'  '} rita.flores@occupy.com</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              mx: 'auto',
              width: '60%'
            }}
          >
            <Box>
            <Typography sx={{ fontWeight: 600, mb: 2, }}>National ID</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>Property Type</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
export default Verification;
