import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { AppBarTwicked, ToolBarTwicked } from '../../styles/layoutStyles';
import { CustomButton } from '../../styles';
import Link from 'next/link';
import { Authenticated } from '../../../utils/GlobalState';
import { LoadingButton } from '@mui/lab';
import { Burger, Menu } from './Menu';
import DropDown from '../utils/Modal';

interface HeaderInterface {
  authState: Authenticated;
}

function Header({ authState }: HeaderInterface) {
  const [ClassName, setClassName] = React.useState({ value: '' });
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
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Link href="/">
                <Typography
                  variant="h5"
                  sx={{
                    px: 0,
                    py: 1,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    borderRadius: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  Occupy <span style={{ color: '#7C28F2' }}> It</span>
                </Typography>
              </Link>
            </Box>
            <Box sx={{ width: '30%' }}>
              {authState?.logged ? (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
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
                <>
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'flex' },
                      width: '100%',
                    }}
                  >
                    <Link href="/auth">
                      <CustomButton
                        sx={{
                          borderRadius: '3rem 3rem 0 3rem',
                          backgroundColor: '#7C28F2',
                          color: '#fff',
                        }}
                      >
                        Sign up
                      </CustomButton>
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: 'flex', sm: 'flex', md: 'none' },
                    }}
                  >
                    <Burger ClassName={ClassName} setClassName={setClassName} />
                    <Menu ClassName={ClassName} setClassName={setClassName} />
                  </Box>
                </>
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
