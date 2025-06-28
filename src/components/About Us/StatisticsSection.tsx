import { Box, Typography } from '@mui/material';
import { Groups, EmojiEvents, Star, AccessTime } from '@mui/icons-material';
import React from 'react';
const healthcareStats = [
    { number: "200,000+", label: "Patients Served", icon: <Groups /> },
    { number: "25+", label: "Years of Excellence", icon: <EmojiEvents /> },
    { number: "98%", label: "Patient Satisfaction", icon: <Star /> },
    { number: "24/7", label: "Emergency Care", icon: <AccessTime /> }
];

function AboutHeroSection() {
    return (
        <Box sx={{ py: 15, bgcolor: '#fbf9f9', mx:'auto' }}>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center" sx={{ gap: 4 }}>
                {healthcareStats.map((stat, index) => (
                    <Box key={index} sx={{ textAlign: 'center', color: '#1e6c72', flex: 1 }}>
                    <Box sx={{ mb: 2 }}>
                        {React.cloneElement(stat.icon, { sx: { fontSize: 40, color: '#1e6c72' } })}
                    </Box>
                    <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                        {stat.number}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                        {stat.label}
                    </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default AboutHeroSection;