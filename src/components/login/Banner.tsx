import { Box, Chip, Typography } from '@mui/material';
import {RegisteredPatientsIcon,JoinNowIcon,LiveConsultationsIcon,DoctorsOnlineIcon} from '../../types/Login.tsx';
import image from '../../../images/1.png';

function Banner() {
  return (
    <Box
      sx={{
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#1e6c72',
        width: { xs: '100%', md: '40%' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4 },
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', display: 'inline-block', mt: 4 }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: { xs: 220, sm: 300, md: 400 },
            height: { xs: 350, sm: 400, md: 700 },
            mx: 'auto',
            borderRadius: 50,
            backgroundColor: '#fff',
            boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
            objectFit: 'cover',
          }}
        />

        {/* CHIP: Registered Patients */}
        <Box sx={{ position: 'absolute', top: 40, left: -100, zIndex: 2 }}>
          <Chip
            icon={<RegisteredPatientsIcon/>}
            label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1 }}>200,000+</Typography>
                <Typography sx={{ fontSize: 13, color: '#555', lineHeight: 1 }}>Registered Patients</Typography>
              </Box>
            }
            sx={{
              bgcolor: 'white',
              borderRadius: 999,
              px: 3,
              py: 1,
              minHeight: 48,
              boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
              alignItems: 'center',
            }}
          />
        </Box>

        {/* CHIP: Doctors Online */}
        <Box sx={{ position: 'absolute', top: 200, right: -100, zIndex: 2 }}>
          <Chip
            icon={<DoctorsOnlineIcon />}
            label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1 }}>5,000+</Typography>
                <Typography sx={{ fontSize: 13, color: '#555', lineHeight: 1 }}>Doctors Online</Typography>
              </Box>
            }
            sx={{
              bgcolor: 'white',
              borderRadius: 999,
              px: 3,
              py: 1,
              minHeight: 48,
              boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
              alignItems: 'center',
            }}
          />
        </Box>

        {/* CHIP: Live Consultations */}
        <Box sx={{ position: 'absolute', bottom: 200, left: -100, zIndex: 2 }}>
          <Chip
            icon={<LiveConsultationsIcon />}
            label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1 }}>24/7</Typography>
                <Typography sx={{ fontSize: 13, color: '#555', lineHeight: 1 }}>Live Consultations</Typography>
              </Box>
            }
            sx={{
              bgcolor: 'white',
              borderRadius: 999,
              px: 3,
              py: 1,
              minHeight: 48,
              boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
              alignItems: 'center',
            }}
          />
        </Box>

        {/* CHIP: Join Now */}
        <Box sx={{ position: 'absolute', bottom: 30, right: -30, zIndex: 2 }}>
          <Chip
            icon={<JoinNowIcon />}
            label={
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1 }}>Join Now</Typography>
                <Typography sx={{ fontSize: 13, color: '#555', lineHeight: 1 }}>Free Signup</Typography>
              </Box>
            }
            sx={{
              bgcolor: 'white',
              borderRadius: 999,
              px: 3,
              py: 1,
              minHeight: 48,
              boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
              alignItems: 'center',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
