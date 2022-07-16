import styled from '@emotion/styled';
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
import { AuthContext } from '../../../utils/GlobalState';

function PendingVerification({pending}: any) {
  const [authState] = React.useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const users = [authState, authState];

  const Hr = styled.hr`
    width: 80%;
    margin: 0 auto;
    padding: 0;
    border: none;
    border-top: 1px solid #9998;
  `;
  return (
    <Container
      maxWidth="md"
      sx={{
        border: '1px solid #9996',
        p: 2,
        borderRadius: '1rem',
        backgroundColor: '#fff5',
      }}
    >
      <Typography variant='h5'>Pending Verifications</Typography>
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
        {users?.map((user) => (
          <>
            <Box
              sx={{ px: 2, py:1, display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography sx={{textTransform: 'capitalize'}}>{`${user?.user.name.firstname}  ${user?.user.name.lastname}`}</Typography>
              <Typography sx={{fontSize: '0.9rem', color: '#999'}}>{user?.user.email}</Typography>
              <Typography sx={{ color: '#0007'}}>{user?.user.ID}</Typography>
              <Link
                href={{
                  pathname: '/verify',
                  query: { ID: user?.user.ID },
                }}
              >
                <Button>Verify</Button>
              </Link>
            </Box>
            <Hr />
          </>
        ))}
      </Paper>
    </Container>
  );
}
export default PendingVerification;
