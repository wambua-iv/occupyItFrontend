import { Box, Typography, styled } from '@mui/material';

export const SpacedTypograph = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const WeightedTypography = styled(Typography)({
  fontWeight: 600,
  margin: '.25rem 0',
});
