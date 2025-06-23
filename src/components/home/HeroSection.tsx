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
                    minHeight: '100vh',
                    backgroundColor: '#f4f8fb',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '60%' },
                        p: { xs: 2, sm: 4, md: 25 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
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
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
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
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
                        }}
                    >
                        in just a few clicks
                    </Typography>
                    <Typography
                        variant="body1"
                        mb={4}
                        sx={{
                            color: '#333',
                            fontWeight: 500,
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            maxWidth: 480,
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
                        minHeight: { xs: 320, md: '100vh' },
                        backgroundColor: { xs: 'transparent', md: '#1e6c72' },
                        p: { xs: 0, md: 4 },
                        zIndex: 0,
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <Box sx={{ position: 'relative', textAlign: 'center', width: { xs: '100%', md: 'auto' } }}>
                        <Avatar
                            src={homeImage}
                            alt="Doctor"
                            sx={{
                                width: { xs: 220, sm: 300, md: 400 },
                                height: { xs: 320, sm: 400, md: 700 },
                                mx: 'auto',
                                borderRadius: 50,
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                objectFit: 'cover'
                            }}
                        />
                        <Chip
                            icon={<TagFacesIcon color="primary" />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        200,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Registered Patients
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 20, md: 120 },
                                left: { xs: 10, md: -100 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<FiberManualRecordIcon style={{ color: '#74c9e8' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        5,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Doctors Online
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 80, md: 200 },
                                right: { xs: 10, md: -90 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<FavoriteIcon style={{ color: '#ea392b' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        Join Today!
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 80, md: 320 },
                                left: { xs: 10, md: -80 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<StarIcon style={{ color: '#f9da56' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        #1 Worldwide
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Medical Website
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 20, md: 20 },
                                right: { xs: 10, md: -40 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
    );
}

export default HeroSection;