import { Box, Typography, Avatar, Chip, Button } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';

function BookingSteps() {
    return (
        <Box
            sx={{
                width: '100%',
                py: { xs: 4, md: 8 },
                px: { xs: 0, md: 0 },
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1500,
                    mx: 'auto',
                    background: '#eef6fa',
                    borderRadius: 6,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: { xs: 1, sm: 2, md: 8 },
                    boxSizing: 'border-box',
                }}
            >
                {/* Left: Doctor Avatar and Chips */}
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
                    <Box sx={{ position: 'relative', textAlign: 'center', width: { xs: '100%', md: 'auto' } }}>
                        <Avatar
                            src="../../../images/home-dr.jpg"
                            alt="Doctor"
                            sx={{
                                width: { xs: 220, sm: 320, md: 430 },
                                height: { xs: 240, sm: 320, md: 460 },
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
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 12, sm: 12, md: 16 }}}>
                                        Sign up now
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: { xs: 12, sm: 12, md: 12 } }}>
                                        for your regular check up!
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: { xs: 1, sm: 30, md: 110 },
                                left: { xs: -10, sm: -30, md: -110 },
                                width: { xs: 210, sm: 'auto', md: 'auto' },
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
                            icon={<FavoriteIcon style={{ color: '#ea392b' }} />}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: { xs: 12, sm: 12, md: 16 } }}>
                                        Dr. Andrew Eyeball
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 10, sm: 20, md: 20 },
                                right: { xs: 10, sm: -10, md: -30 },
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
                {/* Right: Booking Steps */}
                <Box
                    sx={{
                        flex: 1.2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-center' },
                        justifyContent: 'center',
                        pl: { xs: 4, md: 8 },
                        pr: { xs: 4, md: 2 },
                        mt: { xs: 4, md: 0 },
                        width: { xs: '100%', md: 'auto' },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="#225b63"
                        mb={3}
                        sx={{ textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: 22, sm: 28, md: 34 } }}
                    >
                        Booking made easy
                    </Typography>
                    <Box sx={{ mb: 4, width: { xs: '100%', md: 'auto' } }}>
                        {[
                            'Find your specialist',
                            'Describe your problem',
                            'Set a meeting type',
                            'book your time',
                        ].map((step) => (
                            <Box key={step} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                <CheckIcon sx={{ color: '#b388d9', fontSize: { xs: 20, sm: 22, md: 24 }, mr: 1 }} />
                                <Typography sx={{ color: '#225b63', fontSize: { xs: 15, sm: 16, md: 18 } }}>
                                    {step}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#225b63',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: 15, sm: 16, md: 17 },
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1, sm: 1.5 },
                            borderRadius: 2,
                            boxShadow: 'none',
                            '&:hover': { bgcolor: '#18474a' },
                            alignSelf: { xs: 'center', md: 'left' },
                        }}
                    >
                        Book an appointment
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default BookingSteps;