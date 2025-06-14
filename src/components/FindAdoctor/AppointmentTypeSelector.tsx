import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

interface AppointmentTypeSelectorProps {
  value: string;
  onChange: (val: string) => void;
}

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
      sx={{ mb: 4, width: '100%' }}
    >
      {/* Online Consultation */}
      <Box
        onClick={() => onChange('online')}
        sx={{
          cursor: 'pointer',
          border: value === 'online' ? '2px solid #b39ddb' : 'none',
          background: value === 'online' ? 'rgba(179,157,219,0.08)' : '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 3, sm: 4 },
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
          <VideoCameraFrontIcon sx={{ fontSize: 48, color: '#b39ddb' }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'online' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'online' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 18 },
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
          background: value === 'physical' ? 'rgba(179,157,219,0.08)' : '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 3, sm: 4 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          transition: 'border 0.2s, background 0.2s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
          <LocalHospitalIcon sx={{ fontSize: 48, color: '#1e6c72' }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'physical' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'physical' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 18 },
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
          background: value === 'home' ? 'rgba(179,157,219,0.08)' : '#fff',
          boxShadow: '0 2px 8px rgba(30,108,114,0.06)',
          borderRadius: 4,
          px: { xs: 2, sm: 6 },
          py: { xs: 3, sm: 4 },
          minWidth: { xs: '80%', sm: 200 },
          textAlign: 'center',
          transition: 'border 0.2s, background 0.2s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
          <HomeIcon sx={{ fontSize: 48, color: '#1e6c72' }} />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: value === 'home' ? '#b39ddb' : '#1e6c72',
            opacity: value === 'home' ? 1 : 0.8,
            fontSize: { xs: 16, sm: 18 },
          }}
        >
          Request home service
        </Typography>
      </Box>
    </Stack>
    {/* button */}
    <Link to={'/Finish'} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
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