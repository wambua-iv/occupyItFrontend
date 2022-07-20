import styled from '@emotion/styled';
import { NoEncryption } from '@mui/icons-material';
import { Popover, Typography, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { AuthContext } from '../../../utils/GlobalState';

interface DropCardProp {
  open: boolean;
  handleClose(): void;
  anchorEl: HTMLButtonElement | null;
  id: string | undefined;
}

function DropDown({ open, handleClose, anchorEl, id }: DropCardProp) {
  const Hr = styled.hr`
    width: 80%;
    height: 1px;
    border: none;
    border-top: 1px solid #9995;
  `;
  const [authState] = React.useContext(AuthContext);
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box
        sx={{
          p: 2,
          width: '16rem',
          display: { sm: 'none', md: 'flex' },
          alignItems: 'center',
          flexDirection: 'column',
          color: '#7C28F2',
        }}
      >
        {authState?.user.role === 'admin' ? (
          <>
            <Link
              href={{
                pathname: '/verification',
              }}
            >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                Verify property owner
              </Typography>
            </Link>
            <Hr />
            <Link
              href={{
                pathname: '/dashboard',
              }}
            >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                verify property
              </Typography>
            </Link>{' '}
            <Hr />
          </>
        ) : authState?.user.role == 'property owner' ? (
          <>
            <Link
              href={{
                pathname: '/profile',
                query: { id: authState?.user.ID },
              }}
            >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>Profile</Typography>
            </Link>
            <Hr />
            <Link
              href={{
                pathname: '/dashboard',
                query: { ID: authState?.user.ID },
              }}
            >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                Dashboard
              </Typography>
            </Link>
            <Hr />
            <Link  href= '/view_bookings' >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>Bookings</Typography>
            </Link>
            <Hr />
          </>
        ) : (
          <>
            <Link href="/">
              <Typography sx={{ p: 1, cursor: 'pointer' }}>Profile</Typography>
            </Link>{' '}
            <Hr />
            <Link
              href={{
                pathname: '/register',
                query: { id: authState?.user.ID },
              }}
            >
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                Register as property owner.
              </Typography>
            </Link>{' '}
            <Hr />
            <Link href="/bookings">
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                Bookings 
              </Typography>
            </Link>{' '}
            <Hr />
            <Link href="/">
              <Typography sx={{ p: 1, cursor: 'pointer' }}>
                Visitations
              </Typography>
            </Link>
            <Hr />
          </>
        )}
        <Link href="/logout">
          <Typography sx={{ p: 1, cursor: 'pointer' }}>Logout</Typography>
        </Link>{' '}
      </Box>
    </Popover>
  );
}
export default DropDown;
