import { CircularProgress, Container } from '@mui/material';
import React from 'react';

export function Loading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
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
