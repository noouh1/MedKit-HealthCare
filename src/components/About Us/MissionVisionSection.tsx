import { Box, Card, Typography } from '@mui/material';
import { Favorite, Star } from '@mui/icons-material';

function MissionVisionSection() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Box maxWidth="lg" sx={{ mx: 'auto', px: { xs: 2, sm: 4, md: 0 } }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
                    >
                        Our Mission & Vision
                    </Typography>
                    <Typography
                        variant="h6"
                        color="#6b7680"
                        sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                        Dedicated to transforming healthcare through innovation, compassion, and excellence
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 10,
                        alignItems: 'stretch',
                        justifyContent: 'center',
                    }}
                >
                    <Card
                        sx={{
                            flex: 1,
                            height: '100%',
                            p: 4,
                            borderRadius: 4,
                            boxShadow: '0 8px 32px rgba(30,108,114,0.08)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            mb: { xs: 4, md: 0 },
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 40px rgba(30,108,114,0.12)'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: '#eef6fa',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}
                        >
                            <Favorite sx={{ fontSize: 40, color: '#1e6c72' }} />
                        </Box>
                        <Typography variant="h4" fontWeight="bold" color="#1e6c72" sx={{ mb: 3 }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" color="#6b7680" sx={{ lineHeight: 1.7 }}>
                            To provide exceptional healthcare services that improve the quality of life
                            for our patients and communities. We are committed to delivering personalized,
                            compassionate care while advancing medical knowledge and embracing innovative treatments.
                        </Typography>
                    </Card>
                    <Card
                        sx={{
                            flex: 1,
                            height: '100%',
                            p: 4,
                            borderRadius: 4,
                            boxShadow: '0 8px 32px rgba(30,108,114,0.08)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 40px rgba(30,108,114,0.12)'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: '#f3eafd',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}
                        >
                            <Star sx={{ fontSize: 40, color: '#b388d9' }} />
                        </Box>
                        <Typography variant="h4" fontWeight="bold" color="#1e6c72" sx={{ mb: 3 }}>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" color="#6b7680" sx={{ lineHeight: 1.7 }}>
                            To be the leading healthcare provider recognized for clinical excellence,
                            innovative care, and exceptional patient experience. We envision a future
                            where every individual has access to world-class healthcare that promotes
                            healing, wellness, and hope.
                        </Typography>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default MissionVisionSection;