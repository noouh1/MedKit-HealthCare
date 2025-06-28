import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { MonitorHeart, HealthAndSafety, MedicalServices, Psychology } from '@mui/icons-material';
import React from 'react';

const medicalSpecialties = [
    { name: "Cardiology", icon: <MonitorHeart />, color: '#ea392b' },
    { name: "Pediatrics", icon: <HealthAndSafety />, color: '#1e6c72' },
    { name: "Orthopedics", icon: <MedicalServices />, color: '#b388d9' },
    { name: "Psychiatry", icon: <Psychology />, color: '#f9da56' }
];

function MedicalSpecialties() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="#1e6c72"
                    sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}
                >
                    Our Medical Specialties
                </Typography>
                <Typography
                    variant="h6"
                    color="#6b7680"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Comprehensive healthcare services across multiple medical disciplines
                </Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="stretch">
                {medicalSpecialties.map((specialty, index) => (
                    <Paper
                    key={index}
                    sx={{
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 3,
                        boxShadow: '0 4px 16px rgba(30,108,114,0.06)',
                        transition: 'all 0.3s ease',
                        flex: 1,
                        '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 24px rgba(30,108,114,0.12)'
                        }
                    }}
                    >
                    <Box
                        sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: `${specialty.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2
                        }}
                    >
                        {React.cloneElement(specialty.icon, {
                        sx: { fontSize: 30, color: specialty.color }
                        })}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" color="#1e6c72">
                        {specialty.name}
                    </Typography>
                    </Paper>
                ))}
                </Stack>
            </Container>
        </Box>
    );
}

export default MedicalSpecialties;