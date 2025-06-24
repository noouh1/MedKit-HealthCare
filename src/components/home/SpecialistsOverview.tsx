import { Box, Typography, Button, Avatar, Chip } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import StarIcon from '@mui/icons-material/Star';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import home_dr1 from "../../../images/image-asset.jpeg";


function SpecialistsOverview() {
    return (
        <Box
            sx={{
                width: '90%',
                background: '#eef6fa',
                borderRadius: 6,
                mt: { xs: 4, md: 8 },
                mb: { xs: 4, md: 8 },
                py: { xs: 4, md: 6 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                mx: 'auto',
            }}
        >
            {/* Left: Text and Specialties */}
            <Box
                sx={{
                    flex: 1.2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: 'center',
                    pl: { xs: 0, md: 8 },
                    pr: { xs: 0, md: 2 },
                    mb: { xs: 4, md: 0 },
                    width: { xs: '100%', md: 'auto' },
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#225b63"
                    mb={3}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        fontSize: { xs: 22, sm: 28, md: 34 }
                    }}
                >
                    We offer a wide range<br />of specialists for your health
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: 2,
                        mb: 3,
                        width: { xs: '100%', sm: 400, md: 420 },
                    }}
                >
                    {/* Dentistry */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#fff',
                            borderRadius: 3,
                            px: { xs: 2, sm: 3 },
                            py: { xs: 1.5, sm: 2 },
                            boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#e7edfc',
                                borderRadius: '50%',
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <img src="/tooth.svg" alt="Dentistry" style={{ width: 24, height: 24 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 15, sm: 18 } }}>
                            Dentistry
                        </Typography>
                    </Box>
                    {/* General health */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#fff',
                            borderRadius: 3,
                            px: { xs: 2, sm: 3 },
                            py: { xs: 1.5, sm: 2 },
                            boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#eafaf4',
                                borderRadius: '50%',
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <img src="/stethoscope.svg" alt="General health" style={{ width: 28, height: 28 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 15, sm: 18 } }}>
                            General health
                        </Typography>
                    </Box>
                    {/* Psychiatry */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#fff',
                            borderRadius: 3,
                            px: { xs: 2, sm: 3 },
                            py: { xs: 1.5, sm: 2 },
                            boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#f4f0fa',
                                borderRadius: '50%',
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <PsychologyIcon style={{ color: '#b388d9', width: 30, height: 30, fontSize: 20 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 15, sm: 18 } }}>
                            Psychiatry
                        </Typography>
                    </Box>
                    {/* Neurology */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#fff',
                            borderRadius: 3,
                            px: { xs: 2, sm: 3 },
                            py: { xs: 1.5, sm: 2 },
                            boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                            minWidth: 0,
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: '#fcf7e7',
                                borderRadius: '50%',
                                width: { xs: 40, sm: 48 },
                                height: { xs: 40, sm: 48 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <img src="/brain.svg" alt="Neurology" style={{ width: 28, height: 28 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 15, sm: 18 } }}>
                            Neurology
                        </Typography>
                    </Box>
                </Box>
                <Link to="/find-a-doctor">
                    <Button
                    variant="text"
                    sx={{
                        color: '#225b63',
                        fontWeight: 600,
                        fontSize: { xs: 14, sm: 16 },
                        textTransform: 'none',
                        pl: 0,
                        '&:hover': { textDecoration: 'underline', bgcolor: 'transparent' },
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    endIcon={
                        <EastIcon style={{ color: '#225b63', fontSize: 25 }} />
                    }
                >
                    Show more
                </Button>
                </Link>
            </Box>
            {/* Right: Doctor image and chips */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    width: '100%',
                    mt: { xs: 4, md: 0 },
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: { xs: 4, md: 0 },
                        position: 'relative',
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <Avatar
                            src={home_dr1}
                            alt="Doctor"
                            sx={{
                                width: { xs: 220, sm: 320, md: 400 },
                                height: { xs: 220, sm: 320, md: 470 },
                                mx: 'auto',
                                borderRadius: 50,
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                objectFit: 'cover'
                            }}
                        />
                        <Chip
                            icon={<StarIcon style={{ color: '#f9da56' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        All Fields
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        of specialization
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 20, sm: 60, md: 150 },
                                left: { xs: -100, sm: -30, md: -100 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1.5,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<TagFacesIcon color='primary' />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        8.8 / 10.0
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6b7680', fontSize: 14 }}>
                                        Avg doctor rating
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 10, sm: 30, md: 60 },
                                right: { xs: -100, sm: -10, md: -40 },
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1.5,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SpecialistsOverview;