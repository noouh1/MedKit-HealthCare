import { Box, Typography } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function Section2() {
    return (
        <Box sx={{ width: '100%', py: { xs: 5, md: 10 }, background: '#fff' }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                color="#1e6c72"
                align="center"
                mb={6}
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
            >
                How it works
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    gap: { xs: 3, sm: 2, md: 8 },
                    maxWidth: 1200,
                    mx: 'auto',
                    px: { xs: 1, sm: 2 },
                }}
            >
                {/* 1 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        flex: 1,
                        mb: { xs: 2, sm: 0 },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 80, sm: 100, md: 120 },
                            height: { xs: 80, sm: 100, md: 120 },
                            mx: 'auto',
                            mb: 2,
                            borderRadius: '50%',
                            background: '#eaf3fa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <PersonSearchIcon sx={{ color: '#2e7d6b', fontSize: { xs: 36, sm: 48, md: 56 } }} />
                    </Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                        Find your doctor
                    </Typography>
                    <Typography color="#6b7680" sx={{ mt: 1, fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        Choose from a variety of our<br />medical specialists
                    </Typography>
                </Box>
                {/* 2 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        flex: 1,
                        mb: { xs: 2, sm: 0 },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 80, sm: 100, md: 120 },
                            height: { xs: 80, sm: 100, md: 120 },
                            mx: 'auto',
                            mb: 2,
                            borderRadius: '50%',
                            background: '#e7edfc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <LocationOnIcon sx={{ color: '#4f6be8', fontSize: { xs: 36, sm: 48, md: 56 } }} />
                    </Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                        Choose location
                    </Typography>
                    <Typography color="#6b7680" sx={{ mt: 1, fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        Find doctors and medical<br />offices in your area
                    </Typography>
                </Box>
                {/* 3 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        flex: 1,
                        mb: { xs: 2, sm: 0 },
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 80, sm: 100, md: 120 },
                            height: { xs: 80, sm: 100, md: 120 },
                            mx: 'auto',
                            mb: 2,
                            borderRadius: '50%',
                            background: '#f4f0fa',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <EventAvailableIcon sx={{ color: '#a678e4', fontSize: { xs: 36, sm: 48, md: 56 } }} />
                    </Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                        Find free time slot
                    </Typography>
                    <Typography color="#6b7680" sx={{ mt: 1, fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        Choose a time that is the<br />most convenient for you
                    </Typography>
                </Box>
                {/* 4 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        flex: 1,
                        px: { xs: 1, sm: 0 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 80, sm: 100, md: 120 },
                            height: { xs: 80, sm: 100, md: 120 },
                            mx: 'auto',
                            mb: 2,
                            borderRadius: '50%',
                            background: '#fcfaf4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <MedicalServicesIcon sx={{ color: '#e4c96a', fontSize: { xs: 36, sm: 48, md: 56 } }} />
                    </Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>
                        Get a solution
                    </Typography>
                    <Typography color="#6b7680" sx={{ mt: 1, fontSize: { xs: 13, sm: 14, md: 15 } }}>
                        We can hold an appointment<br />either on video or chat
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Section2;