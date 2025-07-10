import React from 'react';
import { Box, Button } from '@mui/material';

interface NavigationButtonsProps {
    activeStep: number;
    totalSteps: number;
    isStepValid: boolean;
    onBack: () => void;
    onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    activeStep,
    totalSteps,
    isStepValid,
    onBack,
    onNext
}) => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mt: { xs: 3, sm: 4, md: 6 }, 
            pt: { xs: 3, sm: 4 }, 
            borderTop: '1px solid #e2e8f0',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 }
        }}>
            <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={onBack}
                sx={{ 
                    minWidth: { xs: '100%', sm: 120 },
                    height: 44,
                    borderRadius: 2,
                    borderColor: '#d1d5db',
                    color: '#6b7280',
                    fontWeight: 500,
                    textTransform: 'none',
                    order: { xs: 2, sm: 1 },
                    '&:hover': {
                        borderColor: '#9ca3af',
                        backgroundColor: '#f9fafb'
                    },
                    '&:disabled': {
                        borderColor: '#e5e7eb',
                        color: '#d1d5db'
                    }
                }}
            >
                ← Back
            </Button>
            <Button
                variant="contained"
                onClick={onNext}
                disabled={!isStepValid}
                sx={{ 
                    minWidth: { xs: '100%', sm: 140 },
                    height: 44,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    order: { xs: 1, sm: 2 },
                    backgroundColor: isStepValid ? '#2563eb' : '#e5e7eb',
                    color: isStepValid ? 'white' : '#9ca3af',
                    boxShadow: isStepValid ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none',
                    '&:hover': {
                        backgroundColor: isStepValid ? '#1d4ed8' : '#e5e7eb',
                        boxShadow: isStepValid ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    },
                    '&:disabled': {
                        backgroundColor: '#e5e7eb',
                        color: '#9ca3af'
                    }
                }}
            >
                {activeStep === totalSteps - 1 ? 'Submit Registration' : 'Next →'}
            </Button>
        </Box>
    );
};

export default NavigationButtons;
