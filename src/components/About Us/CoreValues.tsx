import { Box, Card, Typography, Stack } from '@mui/material';
import { Favorite, Security, EmojiEvents, Groups } from '@mui/icons-material';


function CoreValues() {
    const coreValues = [
        {
            icon: <Favorite sx={{ fontSize: 40, color: '#ea392b' }} />,
            title: "Compassionate Care",
            description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing and recovery."
        },
        {
            icon: <Security sx={{ fontSize: 40, color: '#1e6c72' }} />,
            title: "Safety First",
            description: "Your safety is our top priority with state-of-the-art facilities and rigorous safety protocols."
        },
        {
            icon: <EmojiEvents sx={{ fontSize: 40, color: '#f9da56' }} />,
            title: "Medical Excellence",
            description: "We maintain the highest standards of medical care through continuous learning and innovation."
        },
        {
            icon: <Groups sx={{ fontSize: 40, color: '#b388d9' }} />,
            title: "Collaborative Approach",
            description: "Our multidisciplinary team works together to provide comprehensive, coordinated care."
        }
    ];
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f4f8fb', px: { xs: 2, sm: 4, md: 12 } }} >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="#1e6c72"
                    sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
                    >
                    Our Core Values
                </Typography>
                <Typography
                    variant="h6"
                    color="#6b7680"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                    >
                    The principles that guide every decision we make and every service we provide
                </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
                {coreValues.map((value, index) => (
                <Card
                    key={index}
                    sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(30,108,114,0.06)',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(30,108,114,0.12)'
                    }
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        {value.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" color="#1e6c72" sx={{ mb: 2 }}>
                        {value.title}
                    </Typography>
                    <Typography variant="body2" color="#6b7680" sx={{ lineHeight: 1.6 }}>
                        {value.description}
                    </Typography>
                </Card>
                ))}
            </Stack>
        </Box>
    );
}

export default CoreValues;