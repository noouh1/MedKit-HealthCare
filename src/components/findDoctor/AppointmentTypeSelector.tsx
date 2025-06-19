import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import type { AppointmentTypeSelectorProps } from '../../types/Book.tsx';


const AppointmentTypeSelector: React.FC<AppointmentTypeSelectorProps> = ({
  value,
  onChange,
}) => (
  <Box sx={{ width: '100%', mt: 6 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        color: '#1e6c72',
        mb: 3,
        textAlign: 'center',
      }}
    >
      Appointment type
    </Typography>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 6, width: '100%' }}
    >
      {/* Online Consultation */}
      <Box
        onClick={() => onChange('online')}
        sx={{
          cursor: 'pointer',
          border: value === 'online' ? '2px solid #b39ddb' : 'none',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            background: value === 'online' ? '#f3eafd' : '#f4f8fb',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <VideoCameraFrontIcon sx={{ fontSize: 35, color: value=== 'online'? '#b39ddb' : '#1e6c72' } }/>
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'online' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'online' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
          }}
        >
          Online Consultation
        </Typography>
      </Box>
      {/* Physical consultation */}
      <Box
        onClick={() => onChange('physical')}
        sx={{
          cursor: 'pointer',
          border: value === 'physical' ? '2px solid #b39ddb' : 'none',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            background: value === 'physical' ? '#f3eafd' : '#f4f8fb',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <LocalHospitalIcon sx={{ fontSize: 35, color: value=== 'physical'? '#b39ddb' : '#1e6c72' } } />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'physical' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'physical' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
          }}
        >
          Physical consultation
        </Typography>
      </Box>
      {/* Request home service */}
      <Box
        onClick={() => onChange('home')}
        sx={{
          cursor: 'pointer',
          border: value === 'home' ? '2px solid #b39ddb' : 'none',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            background: value === 'home' ? '#f3eafd' : '#f4f8fb',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <HomeIcon sx={{ fontSize: 35, color: value=== 'home'? '#b39ddb' : '#1e6c72' } } />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'home' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'home' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
          }}
        >
          Request home service
        </Typography>
      </Box>
    </Stack>
    {/* button */}
    <Link to={'/finish'} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          background: '#b39ddb',
          color: '#fff',
          fontWeight: 600,
          fontSize: 18,
          borderRadius: 2,
          py: 1.5,
          mt: 2,
          boxShadow: 'none',
          '&:hover': {
            background: '#a084ca',
          },
        }}
      >
        Confirm appointment
      </Button>
    </Link>
  </Box>
);

export default AppointmentTypeSelector;