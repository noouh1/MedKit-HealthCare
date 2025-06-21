import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import type { AppointmentTypeSelectorProps } from '../../types/Book.tsx';

const transition = 'all 0.35s cubic-bezier(0.4,0,0.2,1)';

const AppointmentTypeSelector: React.FC<AppointmentTypeSelectorProps> = ({
  value,
  onChange,
}) => (
  <Box sx={{ width: '100%', mt: 3 }}>
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
          boxShadow: value === 'online'
            ? '0 8px 32px rgba(179,157,219,0.18)'
            : '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
          transform: value === 'online' ? 'scale(1.06)' : 'scale(1)',
          transition,
          boxShadowColor: value === 'online' ? '#b39ddb' : undefined,
          '&:hover': {
            boxShadow: '0 8px 32px rgba(179,157,219,0.18)',
            transform: 'scale(1.04)',
          },
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
            transition,
            boxShadow: value === 'online'
              ? '0 4px 16px rgba(179,157,219,0.18)'
              : 'none',
          }}
        >
          <VideoCameraFrontIcon sx={{ fontSize: 35, color: value === 'online' ? '#b39ddb' : '#1e6c72', transition }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'online' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'online' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
            transition,
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
          boxShadow: value === 'physical'
            ? '0 8px 32px rgba(179,157,219,0.18)'
            : '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
          transform: value === 'physical' ? 'scale(1.06)' : 'scale(1)',
          transition,
          boxShadowColor: value === 'physical' ? '#b39ddb' : undefined,
          '&:hover': {
            boxShadow: '0 8px 32px rgba(179,157,219,0.18)',
            transform: 'scale(1.04)',
          },
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
            transition,
            boxShadow: value === 'physical'
              ? '0 4px 16px rgba(179,157,219,0.18)'
              : 'none',
          }}
        >
          <LocalHospitalIcon sx={{ fontSize: 35, color: value === 'physical' ? '#b39ddb' : '#1e6c72', transition }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'physical' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'physical' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
            transition,
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
          boxShadow: value === 'home'
            ? '0 8px 32px rgba(179,157,219,0.18)'
            : '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 2, sm: 2 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
          transform: value === 'home' ? 'scale(1.06)' : 'scale(1)',
          transition,
          boxShadowColor: value === 'home' ? '#b39ddb' : undefined,
          '&:hover': {
            boxShadow: '0 8px 32px rgba(179,157,219,0.18)',
            transform: 'scale(1.04)',
          },
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
            transition,
            boxShadow: value === 'home'
              ? '0 4px 16px rgba(179,157,219,0.18)'
              : 'none',
          }}
        >
          <HomeIcon sx={{ fontSize: 35, color: value === 'home' ? '#b39ddb' : '#1e6c72', transition }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'home' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'home' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 16 },
            transition,
          }}
        >
          Request home service
        </Typography>
      </Box>
    </Stack>
    {/* button */}
    <Link to={'/finish'}  style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          background: '#b39ddb',
          color: '#fff',
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 1,
          py: 1.5,
          my: 2,
          boxShadow: 'none',
          transition: 'background 0.3s, transform 0.3s',
          '&:hover': {
            background: '#a084ca',
            transform: 'scale(1.03)',
          },
        }}
      >
        Confirm appointment
      </Button>
    </Link>
  </Box>
);

export default AppointmentTypeSelector;