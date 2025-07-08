import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function AboutHeroSection() {
    return (
        <Box
            sx={{
                background: '#1e6c72',
                color: 'white',
                py: { xs: 8, md: 12 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                overflow: 'hidden'
            }}
        >
            {/* Left Side */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    p: { xs: 2, sm: 4, md: 0 },
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                        lineHeight: 1.2,
                        mb: 3
                    }}
                >
                    Caring for Your Health & Wellbeing
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        lineHeight: 1.6,
                        mb: 4,
                        opacity: 0.9
                    }}
                >
                    For over 25 years, MedKit Healthcare has been dedicated to providing
                    exceptional medical care with compassion, innovation, and excellence
                    at the heart of everything we do.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        width: '100%',
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}
                >
                    <Link to="/find-a-doctor" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'white',
                                color: '#1e6c72',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            Booking Appointment
                        </Button>
                    </Link>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                        }}
                        endIcon={<ArrowForward />}
                    >
                        Learn More
                    </Button>
                </Box>
            </Box>
            {/* Right Side */}
            <Box
                sx={{
                    display: 'flex',
                    width: { xs: '100%', md: '40%' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    p: { xs: 0, md: 4 },
                    mt: { xs: 4, md: 0 },
                }}
            >
                <Box
                    sx={{
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(20px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        animation: 'pulse 3s ease-in-out infinite'
                    }}
                >
                    <LocalHospitalIcon sx={{ fontSize: 200, color: 'rgba(255,255,255,0.8)' }} />
                    {/* Floating elements */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 50,
                            right: 50,
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            bgcolor: '#ffd700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'float 3s ease-in-out infinite',
                            boxShadow: '0 8px 32px rgba(255,215,0,0.4)'
                        }}
                    >
                        <FavoriteIcon sx={{ fontSize: 24, color: '#333' }}/>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 80,
                            left: 40,
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'float 3s ease-in-out infinite 1s',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                    >
                        <MedicalServicesIcon sx={{ fontSize: 24, color: '#667eea' }} />
                    </Box>
                </Box>
            </Box>
            {/* Animations */}
            <style>
                {`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                `}
            </style>
        </Box>
    );
}

export default AboutHeroSection;