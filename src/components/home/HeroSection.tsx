import { Box, Typography, Avatar, Chip } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookingBar from '../search/BookingBar.tsx';
import  homeImage from'../../../images/home.jpg'

function HeroSection() {
    return (
        <Box
                sx={{
                    minHeight: { xs: 'auto', md: '100vh' },
                    backgroundColor: '#f4f8fb',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    px: { xs: 1, sm: 2, md: 0 },
                    py: { xs: 2, md: 0 }
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        p: { xs: 1, sm: 2, md: 0 },
                        mx: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        maxWidth: { xs: '100%', md: 'none' }
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            lineHeight: 1.2,
                            mb: { xs: 1, md: 2 }
                        }}
                    >
                        Connect with top
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            lineHeight: 1.2,
                            mb: { xs: 1, md: 2 }
                        }}
                    >
                        rated doctors
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            lineHeight: 1.2,
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        in just a few clicks
                    </Typography>
                    <Typography
                        variant="body1"
                        mb={{ xs: 3, md: 4 }}
                        sx={{
                            color: '#333',
                            fontWeight: 500,
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            maxWidth: { xs: '100%', md: 480 },
                            px: { xs: 1, md: 0 }
                        }}
                    >
                        Select your doctor and preferred time slot to book your appointment
                    </Typography>

                    {/* book Bar */}
                    <BookingBar />
                    
                </Box>

                {/* Right Side */}
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        width: { xs: '100%', md: '40%' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        right: { xs: 'auto', md: 0 },
                        height: { xs: 'auto', md: '108vh' },
                        minHeight: { xs: 280, sm: 320, md: '100vh' },
                        backgroundColor: { xs: 'transparent', md: '#1e6c72' },
                        p: { xs: 1, sm: 2, md: 4 },
                        zIndex: 0,
                        mt: { xs: 3, md: 0 },
                    }}
                >
                    <Box sx={{ position: 'relative', textAlign: 'center', width: { xs: '100%', md: 'auto' } }}>
                        <Avatar
                            src={homeImage}
                            alt="Doctor"
                            sx={{
                                width: { xs: 200, sm: 250, md: 350, lg: 400 },
                                height: { xs: 280, sm: 350, md: 600, lg: 700 },
                                mx: 'auto',
                                borderRadius: { xs: 25, md: 50 },
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                objectFit: 'cover'
                            }}
                        />
                        <Chip
                            icon={<TagFacesIcon color="primary" />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 14, md: 16 } }}>
                                        200,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: { xs: 11, md: 13 } }}>
                                        Registered Patients
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 15, sm: 20, md: 120 },
                                left: { xs: 5, sm: 10, md: -100 },
                                bgcolor: 'white',
                                borderRadius: { xs: 6, md: 10 },
                                px: { xs: 0.5, md: 1 },
                                py: { xs: 0.5, md: 1 },
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto',
                                transform: { xs: 'scale(0.8)', md: 'scale(1)' }
                            }}
                        />
                        <Chip
                            icon={<FiberManualRecordIcon style={{ color: '#74c9e8' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 14, md: 16 } }}>
                                        5,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: { xs: 11, md: 13 } }}>
                                        Doctors Online
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 60, sm: 80, md: 200 },
                                right: { xs: 5, sm: 10, md: -90 },
                                bgcolor: 'white',
                                borderRadius: { xs: 6, md: 10 },
                                px: { xs: 0.5, md: 1 },
                                py: { xs: 0.5, md: 1 },
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto',
                                transform: { xs: 'scale(0.8)', md: 'scale(1)' }
                            }}
                        />
                        <Chip
                            icon={<FavoriteIcon style={{ color: '#ea392b' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 14, md: 16 } }}>
                                        Join Today!
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 60, sm: 80, md: 320 },
                                left: { xs: 5, sm: 10, md: -80 },
                                bgcolor: 'white',
                                borderRadius: { xs: 6, md: 10 },
                                px: { xs: 0.5, md: 1 },
                                py: { xs: 0.5, md: 1 },
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto',
                                transform: { xs: 'scale(0.8)', md: 'scale(1)' }
                            }}
                        />
                        <Chip
                            icon={<StarIcon style={{ color: '#f9da56' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 14, md: 16 } }}>
                                        #1 Worldwide
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: { xs: 11, md: 13 } }}>
                                        Medical Website
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 15, sm: 20, md: 20 },
                                right: { xs: 5, sm: 10, md: -40 },
                                bgcolor: 'white',
                                borderRadius: { xs: 6, md: 10 },
                                px: { xs: 0.5, md: 1 },
                                py: { xs: 0.5, md: 1 },
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto',
                                transform: { xs: 'scale(0.8)', md: 'scale(1)' }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
    );
}

export default HeroSection;