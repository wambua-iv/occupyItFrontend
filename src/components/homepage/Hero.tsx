import React from 'react';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import { CustomButton } from '../../styles';

function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: 'url(/backdrop.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#e5e5e5',
        margin: 'auto',
        width: { xs: '100%', sm: '94%', md: '96%' },
        height: { xs: '350px', sm: '450px', md: '500px' },
        position: 'relative',
        zIndex: 1,
        borderRadius: '1rem',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 10,
          height: '90%',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '90%', md: '50%' },
            m: 'auto',
            height: '70%',
            display: 'flex',
            flexDirection: {xs: 'column'},
            my: { xs: 5, sm: 8, md: 12 },
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '3.8rem' },
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            Find your next Home with
            <Typography variant="h3" sx={{ color: '#5D33D2', fontWeight: 700 }}>
              {' '}
              Occupy It
            </Typography>
          </Typography>
          <Box
            sx={{
              width: { xs: '100%', sm: '80%', md: '80%' },
              margin: 'auto',
              ml: { xs: 0, sm: 5, md: 5 },
              my: { xs: 4, sm: 6, md: 5 },
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CustomButton
              sx={{
                borderRadius: '0 3rem 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: { xs: 2, sm: 4, md: 4 },
              }}
            >
              Find A Home
            </CustomButton>
            <CustomButton
              sx={{
                borderRadius: '3rem  0 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: { xs: 1, sm: 4, md: 4 },
              }}
            >
              Are you a LandLord
            </CustomButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: { xs: 'none', sm: 'none', md: 'flex' },
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            src="home.jpg"
            sx={{
              padding: '0.5rem',
              backgroundColor: '#e5e5e5',
              width: '12rem',
              height: '12rem',
              position: 'absolute',
              zIndex: 2,
              top: '30%',
              right: '6%',
              borderRadius: '50%',
              transform: 'translate(-30%, -30%)',
              objectFit: 'cover',
            }}
          />
          <Box
            component="img"
            sx={{
              height: { xs: 233, md: 350 },
              width: { xs: 350, md: 800 },
              position: 'relative',
              bottom: '10%',
            }}
            alt="The house from the offer."
            src="/svg/RectangleOne.svg"
          />
          <Box
            component="img"
            sx={{
              height: { xs: 233, sm: 350, md: 500 },
              width: { xs: 350, sm: 600, md: 950 },
              position: 'relative',
              bottom: '80%',
            }}
            alt="The house from the offer."
            src="/svg/RectangleTwo.svg"
          />
          <Box
            component="img"
            src="/home2.jpg"
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
              padding: '0.5rem',
              backgroundColor: '#e9e9e9',
              width: '13rem',
              height: '12.5rem',
              position: 'absolute',
              zIndex: 2,
              top: '62.5%',
              right: '-8%',
              borderRadius: '50%',
              transform: 'translate(-30%, -10%)',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      {/* <Box sx={{}}>
        <Typography
          sx={{
            m: 'auto',
            width: '6rem',
            p:1,
            background: '#fff6',
            color: '#111827',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '.6rem',
            '&:hover': {
              background: '#fff',
              color: '#000',
            },
          }}
        >
          Rentals
        </Typography>
      </Box> */}
    </Container>
  );
}
export default Hero;
