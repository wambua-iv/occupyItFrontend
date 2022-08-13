import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import {
  AdvertisementIcon,
  BedandBreakfastIcon,
  LandLordIcon,
  SearchIcon,
} from '../../icons';
import { HorizontalDivider } from '../../styles';

interface CardInterface {
  category: string;
  id: number;
  title: string;
  img: any;
}

function WhatWeDo() {
  const activities = [
    {
      category: 'Availing largest property catalogue to search from.',
      id: 3,
      title: 'Find your next Home at your own convinience',
      img: <SearchIcon />,
      alt: 'Bed And Breakfast by Ben Davis from NounProject.com',
    },
    {
      category: 'House and Apartment adverstising',
      id: 0,
      title:
        'Getting your house rental and property selling business up and running',
      img: <AdvertisementIcon />,
      alt: 'Bed And Breakfast by Ben Davis from NounProject.com',
    },
    {
      category: 'AirBnB and Bed and Breakfast rentals',
      id: 2,
      title: 'Steps to ensure efficiency in your learning curve',
      img: <BedandBreakfastIcon />,
      alt: 'Advertisement by Shocho from NounProject.com',
    },
    {
      category: 'Property Management',
      id: 1,
      title: 'Steps to ensure efficiency in your learning curve',
      img: <LandLordIcon />,
      alt: 'Cost by Arthur Shlain from NounProject.com',
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <Box
        sx={{
          width: '96%',
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
          mx: 'auto',
        }}
      >
        <HorizontalDivider />
        <Typography
          sx={{
            color: '#443D5E',
            fontSize: '12px',
          }}
        >
          WHAT WE DO
        </Typography>
        <HorizontalDivider />
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: '#443D5E',
          textAlign: 'center',
        }}
      >
        The Best Solution for All Your Housing Needs
      </Typography>
      <Box>
        <Grid container spacing={1}>
          {activities.map((activity) => (
            <Grid item key={activity.id} xs={12} sm={6} md={3}>
              <ActivityCards {...activity} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

function ActivityCards({ id, title, img, category }: CardInterface) {
  return (
    <Paper
      sx={{
        p: 2,
        my: { xs: 2, sm: 2, md: 2 },
        mx: { xs: 'auto', sm: 4 },
        pr: 2,
        height: { xs: '180px', sm: '250px' },
        width: { xs: '100%', sm: '90%', md: '250px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      elevation={2}
    >
      {img}
      <Typography
        sx={{
          fontSize: { xs: 14, sm: 18, md: 20 },
          fontWeight: 600,
          color: '#9EA1A8',
          textAlign: 'center',
        }}
      >
        {category}
      </Typography>
      <Typography
        sx={{ textAlign: 'center', fontSize: { xs: 14, sm: 18, md: 20 } }}
      >
        {title}
      </Typography>
    </Paper>
  );
}

export default WhatWeDo;
