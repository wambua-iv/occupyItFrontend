import { CircularProgress, Container } from '@mui/material';
import Router from 'next/router';
import React from 'react';

interface LoadingProps {
  redirectUrl?: string
}

export function Loading({redirectUrl}: LoadingProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 40,
      );
      if(redirectUrl) Router.push(redirectUrl)
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [redirectUrl]);
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '70vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        m: 'auto',
      }}
    >
      <CircularProgress
        variant="determinate"
        size={60}
        value={progress}
        sx={{ m: 'auto' }}
      />
    </Container>
  );
}
