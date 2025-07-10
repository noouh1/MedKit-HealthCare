import * as React from 'react';
import { Box, Container } from '@mui/material';
import type { DoctorFormData } from '../../types/doctorRegistration';

// Import custom components
import HeaderSection from '../../components/signUpDoctor/HeaderSection';
import FormContainer from '../../components/signUpDoctor/FormContainer';
import StepperComponent from '../../components/signUpDoctor/StepperComponent';
import StepContent from '../../components/signUpDoctor/StepContent';
import NavigationButtons from '../../components/signUpDoctor/NavigationButtons';
import SuccessScreen from '../../components/signUpDoctor/SuccessScreen';

// Import custom hooks and utilities
import { useFormValidation } from '../../hooks/useFormValidation';
import { injectAnimationStyles } from '../../utils/animations';

// Inject animations on component mount
injectAnimationStyles();

function SignUpAsDoctor() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = React.useState<DoctorFormData>({
        personalInfo: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            gender: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            profilePhoto: null
        },
        professionalDetails: {
            licenseNumber: '',
            specialization: '',
            yearsOfExperience: '',
            boardCertifications: []
        },
        education: {
            medicalSchool: '',
            graduationYear: '',
            residency: '',
            fellowship: ''
        },
        currentPractice: {
            hospitalName: '',
            position: '',
            workAddress: '',
            workPhone: ''
        },
        emergencyContact: {
            name: '',
            relationship: '',
            phone: '',
            email: ''
        }
    });

    // Use custom validation hook
    const { validateStep } = useFormValidation(formData);
    
    // Total number of steps
    const totalSteps = 5;

    const handleNext = () => {
        if (!validateStep(activeStep)) {
            return;
        }

        if (activeStep === totalSteps - 1) {
            // Simple form completion - move to success screen
            setActiveStep(totalSteps);
        } else {
            // Move to next step
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFormDataChange = (stepData: Record<string, unknown>, stepName: keyof DoctorFormData) => {
        setFormData(prev => ({
            ...prev,
            [stepName]: { ...prev[stepName], ...stepData }
        }));
    };

    return (
        <Box sx={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f0f2f5 0%, #e6e9f0 50%, #dde2ea 100%)',
            py: { xs: 3, sm: 5 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 4, lg: 6 }, position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <HeaderSection />

                {/* Form Container */}
                <FormContainer>
                    {/* Stepper */}
                    <StepperComponent activeStep={activeStep} />

                    {/* Main Content */}
                    {activeStep === totalSteps ? (
                        <SuccessScreen />
                    ) : (
                        <>
                            <StepContent 
                                activeStep={activeStep}
                                formData={formData}
                                onFormDataChange={handleFormDataChange}
                            />
                            
                            <NavigationButtons
                                activeStep={activeStep}
                                totalSteps={totalSteps}
                                isStepValid={validateStep(activeStep)}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        </>
                    )}
                </FormContainer>
            </Container>
        </Box>
    );
}
export default SignUpAsDoctor;