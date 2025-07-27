import React from 'react';
import { Box, Typography } from '@mui/material';

const SuccessScreen: React.FC = () => {
    return (
        <Box sx={{ 
            textAlign: 'center', 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 1, sm: 0 },
            background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
            borderRadius: 3,
            border: '2px solid #4caf50',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid #4caf50'
            },
            '&::after': {
                content: '"🎉"',
                position: 'absolute',
                top: 20,
                right: 20,
                fontSize: '2rem',
                opacity: 0.3,
                animation: 'float 2s infinite'
            }
        }}>
            {/* Success Icon */}
            <Box sx={{ 
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                bgcolor: '#4caf50',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 12px 35px rgba(76, 175, 80, 0.4)',
                animation: 'pulse 2s infinite',
                background: 'linear-gradient(135deg, #4caf50, #66bb6a)'
            }}>
                <Typography sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    ✓
                </Typography>
            </Box>
            
            <Typography variant="h4" sx={{ 
                mb: 2, 
                color: '#2e7d32',
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                textShadow: '0 2px 4px rgba(46, 125, 50, 0.1)'
            }}>
                🎊 Registration Complete!
            </Typography>
            <Typography sx={{ 
                mb: 3, 
                color: '#1b5e20',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                px: { xs: 1, sm: 0 },
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 500
            }}>
                🌟 Congratulations! Your doctor registration has been submitted successfully. Our team will review your application and notify you once approved.
            </Typography>
            
            {/* Additional Info */}
            <Box sx={{ 
                mt: 3,
                p: 3,
                bgcolor: 'rgba(76, 175, 80, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(76, 175, 80, 0.3)'
            }}>
                <Typography variant="body1" sx={{ 
                    color: '#2e7d32',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    mb: 1
                }}>
                    📧 What's Next?
                </Typography>
                <Typography variant="body2" sx={{ 
                    color: '#2e7d32',
                    fontSize: { xs: '0.85rem', sm: '0.9rem' }
                }}>
                    You will receive a confirmation email shortly with detailed next steps and expected review timeline.
                </Typography>
            </Box>
        </Box>
    );
};

export default SuccessScreen;
