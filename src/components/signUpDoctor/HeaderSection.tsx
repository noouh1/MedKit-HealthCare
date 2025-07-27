import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderSection: React.FC = () => {
    return (
        <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 4, sm: 6 },
            px: { xs: 1, sm: 0 }
        }}>
            <Typography variant="h3" sx={{ 
                fontWeight: 700,
                color: '#2d6c76',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 2,
                letterSpacing: '-0.02em'
            }}>
                Doctor Registration
            </Typography>
            <Typography variant="subtitle1" sx={{ 
                color: '#64748b',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
            }}>
                Join our healthcare network and start providing quality care to patients worldwide
            </Typography>
        </Box>
    );
};

export default HeaderSection;
