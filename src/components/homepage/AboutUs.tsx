import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { CustomButton } from '../../styles';
import { ArrowRight } from '@mui/icons-material';

interface Service {
  id: number;
  service: string;
  title: string;
  img: any;
}

function AboutUs() {
  const services = [
    {
      category: 'Search for a house',
      button: 'villas',
      id: 0,
      title: 'Getting yourself up and running',
      img: '/house.jpg',
      alt: 'Photo by <a href="https://unsplash.com/@naomi365photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">vu anh</a> on <a href="https://unsplash.com/s/photos/villa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      category: 'Find an apartment',
      button: 'apartments',
      id: 1,
      title: 'Steps to ensure efficiency in your learning curve',
      img: '/house2.jpg',
      alt: 'Photo by <a href="https://unsplash.com/@cytonn_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cytonn Photography</a> on <a href="https://unsplash.com/s/photos/apartment-building?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: 'space-between',
        my: 6,
      }}
    >
      <Box
        sx={{
          width: {xs: '98%', sm: '40%'},
          mb: {xs: 4}
        }}
      >
        <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: '#5D33D2' }}>About Us</Typography>
        <Typography variant="h5" sx={{ my: 2, textAlign: {xs: 'center', sm: 'left'} }}>
          We help our clients find homes by providing simplicity
        </Typography>
        <Typography sx={{ my: 2, textAlign: {xs: 'center', sm: 'left'}}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda eaque ut. Veritatis animi sequi
          optio tempora similique, dolorem hic id tempore minima ut beatae? Possimus facere quae perferendis adipisci?
        </Typography>
        <CustomButton
          sx={{
            borderRadius: '0 3rem 3rem  3rem',
            backgroundColor: '#7C28F2',
            color: '#fff',
            px: 4,
          }}
        >
          Explore to find a home <ArrowRight />
        </CustomButton>
      </Box>
      <Box
        sx={{
          width: {xs: '100%', sm: '55%'},
        }}
      >
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid key={service.id} xs={12} md={6} item>
              <Box
                sx={{
                  height: { xs: '300px', md: '300px' },
                  width: {xs: '100%'},
                  backgroundImage: `url('${service.img}')`,
                  borderRadius: '16px',
                  p: { xs: 3, md: 4 },
                  m: 'auto',
                  position: 'relative',
                  objectFit: 'cover',
                }}
              >
                <Typography variant='h6' sx={{ color: 'black', fontWeight: 600 }}>{service.category}</Typography>
                <CustomButton
                  variant="contained"
                  sx={{
                    background: '#fff8',
                    color: '#111827',
                    position: 'absolute',
                    bottom: '10%',
                    '&:hover': {
                      background: '#fff',
                      color: '#000'
                    },
                  }}
                >
                  {service.button}
                </CustomButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutUs;
