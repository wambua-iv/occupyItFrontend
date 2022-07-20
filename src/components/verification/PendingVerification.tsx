import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Hr } from '../../styles';
import { Loading } from '../utils';

function PendingVerification({ pending }: any) {
  const {
    control,
  } = useForm();
  return pending.length > 0 ? (
    <Container
      maxWidth="md"
      sx={{
        border: '1px solid #9996',
        p: 2,
        borderRadius: '1rem',
        backgroundColor: '#fff5',
      }}
    >
      <Typography variant="h5">Pending Verifications</Typography>
      <Box sx={{ m: 1, p: 2, borderRadius: '1rem', backgroundColor: 'white' }}>
        <Controller
          control={control}
          name="Search"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              type="email"
              variant="standard"
              sx={{ width: { sm: '70%', md: '80%' }, border: 'none' }}
            />
          )}
        />
      </Box>
      <Paper>
        {pending?.map((user: any) => (
          <Box key={user._id}>
            <Box
              sx={{
                px: 2,
                py: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ textTransform: 'capitalize' }}
              >{`${user.name.firstname}  ${user.name.lastname}`}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#999' }}>
                {user.email}
              </Typography>
              <Typography sx={{ color: '#0007' }}>{user.ID}</Typography>
              <Link
                href={{
                  pathname: '/verify',
                  query: { ID: user.ID },
                }}
              >
                <Button>Verify</Button>
              </Link>
            </Box>
            <Hr />
          </Box>
        ))}
      </Paper>
    </Container>
  ) : (
    <Loading />
  );
}
export default PendingVerification;
