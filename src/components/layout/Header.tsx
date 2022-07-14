import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { AppBarTwicked, ToolBarTwicked } from '../../styles/layoutStyles';
import { CustomButton } from '../../styles';
import Link from 'next/link';
import { AuthContext } from '../../../utils/GlobalState';
import DropDown from '../utils/Modal';
import { LoadingButton } from '@mui/lab';

function Header() {
  const [authState] = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarTwicked position="static" elevation={0}>
        <Container maxWidth="xl">
          <ToolBarTwicked sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                width: '60%',
                justifyContent: 'space-between',
              }}
            >
              <Link href="/">
                <Typography
                  variant="h5"
                  sx={{
                    py: 1,
                    px: 2,
                    mb: 2,
                    fontSize: '2rem',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  Occupy <span style={{ color: '#7C28F2' }}> It</span>
                </Typography>
              </Link>
              <Box
                sx={{
                  width: '45%',
                  display: 'flex',
                  mx: 2,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#7C28F2',
                }}
              >
                <Typography variant="subtitle1" sx={{ cursor: 'pointer' }}>
                  <Link href="/listings">Homes</Link>
                </Typography>
                <Typography variant="subtitle1">Services</Typography>
                <Typography variant="subtitle1">Projects</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '30%' }}>
              {authState?.logged ? (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <LoadingButton
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpen}
                    sx={{ textTransform: 'capitalize', fontSize: '1.2rem' }}
                  >
                    Jambo {authState?.user.name.lastname}{' '}
                  </LoadingButton>
                  <Link href="/post_property">
                    <CustomButton
                      sx={{
                        borderRadius: '3rem 3rem 0 3rem',
                        backgroundColor: '#7C28F2',
                        color: '#fff',
                      }}
                    >
                      Post Property
                    </CustomButton>
                  </Link>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <Link href="/auth">
                    <CustomButton
                      sx={{
                        mr: 3,
                        borderRadius: '3rem 3rem 0 3rem',
                        backgroundColor: '#7C28F2',
                        color: '#fff',
                        position: 'relative',
                        right: 0,
                      }}
                    >
                      Sign up
                    </CustomButton>
                  </Link>
                </Box>
              )}
            </Box>
          </ToolBarTwicked>
        </Container>
      </AppBarTwicked>
      <DropDown
        open={open}
        anchorEl={anchorEl}
        id={id}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default Header;
