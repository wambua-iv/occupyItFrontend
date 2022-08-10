import React from 'react';
import styled from '@emotion/styled';
import { AuthContext, Authenticated } from '../../../utils/GlobalState';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Hr } from '../../styles';

const StyledMenu = styled.div`
  display: ${({ className }) =>
    className == 'open' ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ className }) =>
    className == 'open' ? 'translateX(0)' : 'translateX(-100%)'};
  height: 22vh;
  position: absolute;
  border-radius: 1rem;
  z-index: 12;
  top: 100%;
  right: 0;
  opacity: ${({ className }) => (className == 'open' ? 1 : 0)};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 576px) {
    width: 40%;
    margin: 'auto';
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 15%;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ className }) =>
      className == 'open' ? '#0D0C1D' : '#0005'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ className }) =>
        className == 'open' ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ className }) => (className == 'open' ? '0' : '1')};
      transform: ${({ className }) =>
        className == 'open' ? 'translateX(20px)' : 'translateX(0)'};
      width: 1.5rem;
    }

    :nth-of-type(3) {
      transform: ${({ className }) =>
        className == 'open' ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Burger = ({ ClassName, setClassName }: any) => {
  return (
    <StyledBurger
      className={ClassName.value}
      onClick={() =>
        setClassName((prev: any) =>
          prev.value == 'close' ? { value: 'open' } : { value: 'close' },
        )
      }
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const Menu = ({ ClassName, setClassName }: any) => {
  return (
    <StyledMenu className={ClassName.value} onMouseLeave={() => setClassName((prev: any) =>
      prev.value == 'close' ? { value: 'open' } : { value: 'close' },
    )}>
      <AuthContext.Consumer>
        {([authState]) => (
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'none' },
              alignItems: 'center',
              flexDirection: 'column',
              color: '#7C28F2',
            }}
          >
            {authState?.logged == true ? (
              <>
                <Link
                  href={{
                    pathname: '/verification',
                  }}
                >
                  <Typography sx={{ p: 2, cursor: 'pointer' }}>
                    Verify property owner
                  </Typography>
                </Link>
                <Hr />
                <Link
                  href={{
                    pathname: '/dashboard',
                  }}
                >
                  <Typography sx={{ p: 2, cursor: 'pointer' }}>
                    verify property
                  </Typography>
                </Link>{' '}
                <Hr />
              </>
            ) : (
              <>
                <Link href="/auth">
                  <Typography sx={{ p: 2, cursor: 'pointer' }}>
                    Sign In
                  </Typography>
                </Link>
                <Hr />
                <Link
                  href={{
                    pathname: '/dashboard',
                    query: { ID: authState?.user.ID },
                  }}
                >
                  <Typography sx={{ p: 2, cursor: 'pointer' }}>
                    Dashboard
                  </Typography>
                </Link>
                <Hr />
                <Link href="/view_bookings">
                  <Typography sx={{ p: 2, cursor: 'pointer' }}>
                    Bookings
                  </Typography>
                </Link>
              </>
            )}
          </Box>
        )}
      </AuthContext.Consumer>
    </StyledMenu>
  );
};
