import React from 'react';
import styled from '@emotion/styled';
import { AuthContext } from '../../../utils/GlobalState';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Hr } from '../../styles';

const StyledMenu = styled.div`
  width: 100%;
  margin: 0 auto;
  display: ${({ className }) => (className == 'open' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ className }) =>
    className == 'open' ? 'translateX(0)' : 'translateX(-100%)'};
  height: 28vh;
  position: ${({ className }) => (className == 'open' ? 'fixed' : 'absolute')};
  overflow: hidden;
  border-radius: 1rem;
  z-index: 12;
  top: ${({ className }) => (className == 'open' ? '3rem' : '100%')};
  right: 0;
  opacity: ${({ className }) => (className == 'open' ? 1 : 0)};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 80%;
    margin: 0 10%;
  }

  @media screen and (min-width: 576px) {
    width: 40%;
    margin: 'auto';
  }
`;

const StyledBurger = styled.button`
  position: ${({ className }) => (className == 'open' ? 'fixed' : 'absolute')};
  top: .5rem;
  right: ${({ className }) => (className == 'open' ? '2.5rem' : '.5rem')};
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

export function Burger({ ClassName, handleClick }: any) {
  return (
    <StyledBurger className={ClassName.value} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

function MenuLinks({ handleClick, children, route, query }: any) {
  return (
    <>
      <Link
        href={{
          pathname: `${route}`,
          query: query ? `${query}` : '',
        }}
      >
        <Typography sx={{ p: 2, cursor: 'pointer' }} onClick={handleClick}>
          {children}
        </Typography>
      </Link>
    </>
  );
}

export function Menu({ ClassName, handleClick }: any) {
  return (
    <StyledMenu className={ClassName.value}>
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
            <>
              {authState?.logged == true ? (
                <>
                  <MenuLinks handleClick={handleClick} route="/auth">
                    Sign In
                  </MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick} route="/listings">
                    Properties
                  </MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick}>Services</MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick}>About</MenuLinks>
                </>
              ) : (
                <>
                  <MenuLinks handleClick={handleClick} route="/auth">
                    Sign In
                  </MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick} route="/listings">
                    Properties
                  </MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick}>Services</MenuLinks>
                  <Hr />
                  <MenuLinks handleClick={handleClick}>About</MenuLinks>
                </>
              )}
            </>
          </Box>
        )}
      </AuthContext.Consumer>
    </StyledMenu>
  );
}
