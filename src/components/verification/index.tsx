import { Phone, Email } from '@mui/icons-material';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import  Router  from 'next/router';
import React from 'react';
import { AuthContext } from '../../../utils/GlobalState';

function Verification({ verify }: any) {
  console.log(verify);
  const [authState] =React.useContext(AuthContext);
  const onClick = async() => {
    let data = {ID : verify[0].ID}
     data.ID ?
    await fetch('http://127.0.0.1:3090/admin/verify_property_owner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authState?.tokens.access_token}`
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => console.log(data)) :
    Router.reload()
  }
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
            onClick={onClick}
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
          {verify?.map((user: any) => (
            <Box key={user._id}>
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
                  <Typography
                    sx={{ fontWeight: 600, fontSize: '1.5rem', mb: 2, textTransform: 'capitalize' }}
                  >
                    {`${user.name.firstname}  ${user.name.lastname}`}{' '}
                  </Typography>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    <Phone />{' '}
                    <Typography sx={{ ml: 2 }}>{user.mobile}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    <Email />{' '}
                    <Typography sx={{ ml: 2 }}>{user.email}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  mx: 'auto',
                  width: '60%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    my: 1,
                    px: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    National ID
                  </Typography>
                  <Typography sx={{ fontSize: '.95rem', color: '#0007', fontWeight: 600 }}>
                    {user.ID}
                  </Typography>
                </Box>
                
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    my: 1,
                    px: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    Property Registration
                  </Typography>
                  <Typography sx={{ fontSize: '.95rem', color: '#0007', fontWeight: 600 }}>
                    {user.properties[0]}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
export default Verification;
