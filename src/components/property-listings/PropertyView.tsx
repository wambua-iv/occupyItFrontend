import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import TenantInfo from './TenantInfo';

interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  amenities?: any;
  tenant: any;
  img: string;
  images?: string[];
  price: number;
}

function PropertyView() {
  const property: Property = {
    id: '54',
    title: 'Executive Homes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nisi magnam sunt voluptas alias. Temporibus aperiam illum, alias necessitatibus dolorum libero, ipsum sit pariatur aliquid reiciendis distinctio quo, enim quasi?',
    location: 'Kitengela',
    tenant: true,
    price: 25000,
    img: '/homeey.jpg',
    images: ['/house3.jpg', '/house4.jpg', '/house5.jpg'],
    amenities: [
      {
        id: 0,
        name: 'Bedrooms',
        value: 2,
      },
      {
        id: 1,
        name: 'Garage',
        value: 2,
      },
      {
        id: 0,
        name: 'Basement',
        value: 'None',
      },
      {
        id: 0,
        name: 'Washroom',
        value: 'Separated',
      },
    ],
  };

  return (
    <Container>
      {/* property information */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Box
          component="img"
          src={property.img}
          sx={{
            width: '100%',
            height: '40vh',
            position: 'relative',
            borderRadius: '1rem',
          }}
        />
        <Box
          sx={{
            p: 4,
            position: 'absolute',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            top: { xs: '20%', md: '20%' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '2rem' },
              color: '#7C28F2',
            }}
          >
            {property.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#fff',
              width: '70%',
            }}
          >
            {property.description}
          </Typography>
          <Link href="/book_property" style={{ cursor: 'pointer' }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '0 3rem 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: 4,
                width: { xs: '40%', sm: '50%', md: '30%' },
              }}
            >
              Book Property
              <ArrowRight />
            </Button>
          </Link>
        </Box>
      </Box>

      {property.images ? (
        <Grid container spacing={2}>
          {property.images.map((img) => (
            <Grid key={img} item sm={8} md={4}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: '100%',
                  height: '20rem',
                  borderRadius: '1rem',
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <></>
      )}

      <Box
        sx={{
          display: { sm: 'block', md: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '50%' } }}>
          {property.amenities ? (
            <Grid container spacing={1}>
              {property.amenities.map((amenity: any) => (
                <Grid key={amenity.id} item sm={8} md={3}>
                  <Paper
                    sx={{
                      p: 2,
                      m: 4,
                      pr: 2,
                      height: { xs: '90px', sm: '90px' },
                      width: { xs: '90px', sm: '90px', md: '120px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    elevation={1}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 16 },
                        color: '#9EA1A8',
                      }}
                    >
                      {amenity.name}
                    </Typography>
                    <Typography>{amenity.value}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ width: { sm: '100%', md: '45%' } }}>
          <Paper
            sx={{
              p: 2,
              m: 4,
              pr: 2,
              height: { xs: '90px', sm: '260px' },
              width: { xs: '90px', sm: '90px', md: '90%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            elevation={2}
          >
            <Typography sx={{ my: 1, px: 1 }}>
              {property.description}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1,
                width: '80%',
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Location</Typography>
              <Typography>{property.location}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
                width: '80%',
              }}
            >
              <Typography sx={{ fontWeight: 600 }}> Price</Typography>
              <Typography>Ksh: {property.price}</Typography>
            </Box>
            <Link href={{
            pathname: "/book_visit",
            query: {id: property.id,}
          }}style={{ cursor: 'pointer' }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '0 3rem 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: 4,
                width: { xs: '40%', sm: '50%', md: '60%' },
              }}
            >
              Visit Property
              <ArrowRight />
            </Button>
          </Link>
          </Paper>
        </Box>
      </Box>

      {property.tenant ? <TenantInfo /> : <Box></Box>}
    </Container>
  );
}
export default PropertyView;
