import React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

// Define steps configuration
const steps = [
    { label: 'Personal Information', icon: <PersonIcon />, color: '#667eea' },
    { label: 'Professional Details', icon: <BusinessCenterIcon />, color: '#764ba2' },
    { label: 'Education', icon: <SchoolIcon />, color: '#5a67d8' },
    { label: 'Current Practice', icon: <LocalHospitalIcon />, color: '#6366f1' },
    { label: 'Emergency Contact', icon: <ContactEmergencyIcon />, color: '#8b5cf6' }
];

interface StepperComponentProps {
    activeStep: number;
}

const StepperComponent: React.FC<StepperComponentProps> = ({ activeStep }) => {
    return (
        <Stepper 
            activeStep={activeStep} 
            alternativeLabel
            sx={{ 
                mb: { xs: 3, sm: 4, md: 6 },
                px: { xs: 0, sm: 2 },
                '& .MuiStepConnector-root': {
                    top: { xs: 16, sm: 20 },
                    left: { xs: 'calc(-50% + 16px)', sm: 'calc(-50% + 20px)' },
                    right: { xs: 'calc(50% + 16px)', sm: 'calc(50% + 20px)' },
                    '& .MuiStepConnector-line': {
                        borderColor: '#e5e7eb',
                        borderTopWidth: { xs: 1, sm: 2 },
                        borderRadius: 1
                    }
                },
                '& .MuiStepConnector-active .MuiStepConnector-line': {
                    borderColor: '#14b8a6'
                },
                '& .MuiStepConnector-completed .MuiStepConnector-line': {
                    borderColor: '#14b8a6'
                },
                '& .MuiStepLabel-root': {
                    padding: { xs: '0 2px', sm: '0 8px' },
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                // Handle overflow on very small screens
                overflowX: { xs: 'auto', sm: 'visible' },
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollbarWidth: 'none'
            }}
        >
            {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel 
                        icon={
                            <Box
                                sx={{
                                    width: { xs: 32, sm: 40 },
                                    height: { xs: 32, sm: 40 },
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: index === activeStep ? '#14b8a6' : index < activeStep ? '#14b8a6' : '#e5e7eb',
                                    color: index <= activeStep ? 'white' : '#9ca3af',
                                    transition: 'all 0.3s ease',
                                    border: 'none',
                                    flexShrink: 0
                                }}
                            >
                                {React.cloneElement(step.icon, {
                                    sx: { fontSize: { xs: 16, sm: 20 } }
                                })}
                            </Box>
                        }
                        sx={{
                            '& .MuiStepLabel-label': {
                                color: index === activeStep ? '#0f172a' : index < activeStep ? '#374151' : '#9ca3af',
                                fontWeight: index === activeStep ? 600 : 400,
                                fontSize: { 
                                    xs: '0.65rem',
                                    sm: '0.75rem',
                                    md: '0.875rem'
                                },
                                marginTop: { xs: '6px', sm: '8px' },
                                textAlign: 'center',
                                lineHeight: { xs: 1.2, sm: 1.3 },
                                transition: 'all 0.3s ease',
                                // Prevent text wrapping on small screens
                                whiteSpace: { xs: 'nowrap', sm: 'normal' },
                                overflow: { xs: 'hidden', sm: 'visible' },
                                textOverflow: { xs: 'ellipsis', sm: 'clip' },
                                maxWidth: { xs: '80px', sm: 'none' }
                            }
                        }}
                    >
                        {step.label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default StepperComponent;
