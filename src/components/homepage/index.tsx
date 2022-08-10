import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../styles';
import { SearchBar } from '../utils';
import AboutUs from './AboutUs';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';

function HomePage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        overflow: 'hidden',
      }}
    >
      <Hero />
      <SearchBar /> 
      <WhatWeDo />
      <AboutUs />
      <Container
        maxWidth="md"
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: {xs: 'column', sm: 'row', md: 'row'},
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="img"
          src="/svg/Saly-10.svg"
          sx={{
            width: {xs: '100%', sm: 'row', md: 'row'},
            height: '400px',
            backgroundColor: '#e5e5e5',
          }}
        />
        <Box sx={{ width: '50%' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#7C28F2', position: 'relative', top: '40%' }}>
            Give your House Hunt a boost.
          </Typography>
          <CustomButton
            sx={{
              borderRadius: '0 3rem 3rem  3rem',
              backgroundColor: '#7C28F2',
              color: '#fff',
              px: 6,
              position: 'relative',
              top: '40%',
            }}
          >
            Find a Home today
          </CustomButton>
        </Box>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#7c28f247',
          height: { xs: '160px', md: '250px' },
          mt: { xs: 5, md: 15 },
          borderRadius: '10px',
          position: 'relative',
          width: '90%',
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
            flexDirection: 'column',
            alignItems: 'flex-end',
            right: '20%',
            top: { xs: '20%', md: '40%' },
          }}
        >
          <SearchBar />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '2rem' },
              color: '#fff',
              width: { xs: '60%', md: 'auto' },
            }}
          >
            Find your desired space !!
          </Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: '0 3rem 3rem  3rem', backgroundColor: '#7C28F2', color: '#fff', px: 4 }}
          >
            Explore
            <ArrowRight />
          </Button>
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
    </Container>
  );
}

export default HomePage;
