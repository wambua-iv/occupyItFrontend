import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AppBarTwicked, ToolBarTwicked } from '../../styles/layoutStyles';
import { CustomButton } from '../../styles';
import Link from 'next/link';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarTwicked position="static" elevation={0}>
        <Container maxWidth="xl">
          <ToolBarTwicked sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                width: '70%',
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
                  mx: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#7C28F2',
                }}
              >
                <Typography variant="subtitle1" sx={{ cursor: 'pointer' }}><Link href='/listings'>Homes</Link></Typography>
                <Typography variant="subtitle1">Services</Typography>
                <Typography variant="subtitle1">Projects</Typography>
              </Box>
            </Box>
            <Box>
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
          </ToolBarTwicked>
        </Container>
      </AppBarTwicked>
    </Box>
  );
}

export default Header;
