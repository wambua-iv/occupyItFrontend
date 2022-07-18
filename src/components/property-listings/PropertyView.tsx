import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { ListingType } from '.';
import { AuthContext } from '../../../utils/GlobalState';


function PropertyView({ listing }: any) {
  const [authState] = React.useContext(AuthContext);
  console.log(listing);

  return listing?.map((apartment: ListingType) => (
    <Container key={apartment._id}>
      {/* property information */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <Box
          component="img"
          src={
            apartment.images?.length > 0 ? apartment.images[0] : '/homeey.jpg'
          }
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
            width: '60%',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '2rem' },
              color: '#7C28F2',
              textTransform: 'capitalize'
            }}
          >
            {apartment.property_name}
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
            {apartment.description}
          </Typography>
          <Link
            href={{
              pathname: '/book_property',
              query: { _id: apartment._id },
            }}
            style={{ cursor: 'pointer' }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: '0 3rem 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: 4,
                width: { xs: '40%', sm: '50%', md: '50%' },
              }}
            >
              Book Property
              <ArrowRight />
            </Button>
          </Link>
        </Box>
      </Box>

      {apartment.images ? (
        <Grid container spacing={2}>
          {apartment.images.map((img) => (
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

      <Container
        maxWidth="md"
        sx={{
          display: { sm: 'block', md: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '35%' } }}>
          {apartment.amenities ? (
            <Grid container spacing={1}>
              {Object.entries(apartment.amenities).map(([key, value]) => (
                <Grid key={key} item sm={8} md={6}>
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
                      {key}
                    </Typography>
                    <Typography>{value}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ width: { sm: '100%', md: '60%' } }}>
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
              {apartment?.additional_information
                ? apartment.additional_information
                : apartment.description}
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
              <Typography sx={{ color: '#0006', textTransform: 'capitalize'}}>{apartment.location}</Typography>
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
              <Typography sx={{ color: '#0006'}}>Ksh: {apartment.price}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
                width: '80%',
              }}
            >
              <Typography sx={{ fontWeight: 600 }}> Property type</Typography>
              <Typography sx={{ color: '#0006'}}>{apartment.type}</Typography>
            </Box>

            {apartment.ownerId == authState?.user.ID ? (
              <Button
                variant="contained"
                sx={{
                  cursor: 'pointer',
                  borderRadius: '0 3rem 3rem  3rem',
                  backgroundColor: '#7C28F2',
                  color: '#fff',
                  px: 4,
                  width: { xs: '40%', sm: '50%', md: '50%' },
                }}
              >
                Declare Vacant
              </Button>
            ) : (
              <Link
                href={{
                  pathname: '/book_visit',
                  query: { _id: apartment._id, property_name: apartment.property_name, type:apartment.type, location: apartment.location, price: apartment.price},
                }}
                style={{ cursor: 'pointer' }}
              >
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
            )}
          </Paper>
        </Box>
      </Container>

      {/* {apartment.ownerId == authState.ID ? <TenantOrOwnerInfo /> : <Box></Box>} */}
    </Container>
  ));
}
export default PropertyView;
