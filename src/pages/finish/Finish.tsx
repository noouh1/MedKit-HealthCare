import { Box, Typography, Button, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NavBar from '../../components/navbar/NavBar.tsx';
import { Link } from 'react-router-dom';

const Finish = () => {

  return (
    <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#1e6c72'}}>
        <Box sx={{ backgroundColor: '#1e6c72' }}>
            <NavBar />
        </Box>
        <Box
        sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        }}
        >
            <Box sx={{textAlign: 'center',}}>
                <CheckCircleIcon sx={{ fontSize: 80, color: '#fff' }} />
                <Typography variant="h4" sx={{ color: '#fff', mt: 2, fontWeight: 'bold',my:4 }}>
                    Your book is now confirmed!
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff' }}>
                    Mary Weather, Endodontics Clinic
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff' }}>
                    Thursday, 17 August 2023
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff' }}>
                    9:15 AM Online Consultation
                </Typography>
            </Box>
            <Stack spacing={2} sx={{ width: 350, mx: 'auto', mt: 4 }}>
              <Link to={'/client-zone'}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: '#b39ddb',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 14,
                    borderRadius: 2,
                    py: 1.5,
                    boxShadow: 'none',
                    '&:hover': { background: '#a084ca' },
                  }}
                >
                  Go back to Client zone
                </Button>
              </Link>
              <Link to={'/home'}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    fontWeight: 600,
                    fontSize: 14,
                    borderRadius: 2,
                    py: 1.5,
                    '&:hover': { borderColor: '#b39ddb', color: '#b39ddb' },
                  }}
                >
                  Go to Homepage
                </Button>
              </Link>
            </Stack>
        </Box>
    </Box>
  );
};

export default Finish;