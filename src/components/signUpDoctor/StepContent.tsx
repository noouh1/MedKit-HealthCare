import React from 'react';
import { Box } from '@mui/material';
import type { DoctorFormData } from '../../types/doctorRegistration';

import PersonalInformationStep from './PersonalInformationStep';
import ProfessionalDetailsStep from './ProfessionalDetailsStep';
import EducationStep from './EducationStep';
import CurrentPracticeStep from './CurrentPracticeStep';
import EmergencyContactStep from './EmergencyContactStep';

interface StepContentProps {
    activeStep: number;
    formData: DoctorFormData;
    onFormDataChange: (stepData: Record<string, unknown>, stepName: keyof DoctorFormData) => void;
}

const StepContent: React.FC<StepContentProps> = ({ activeStep, formData, onFormDataChange }) => {
    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <PersonalInformationStep
                        data={formData.personalInfo}
                        onDataChange={(data: Record<string, unknown>) => onFormDataChange(data, 'personalInfo')}
                    />
                );
            case 1:
                return (
                    <ProfessionalDetailsStep
                        data={formData.professionalDetails}
                        onDataChange={(data: Record<string, unknown>) => onFormDataChange(data, 'professionalDetails')}
                    />
                );
            case 2:
                return (
                    <EducationStep
                        data={formData.education}
                        onDataChange={(data: Record<string, unknown>) => onFormDataChange(data, 'education')}
                    />
                );
            case 3:
                return (
                    <CurrentPracticeStep
                        data={formData.currentPractice}
                        onDataChange={(data: Record<string, unknown>) => onFormDataChange(data, 'currentPractice')}
                    />
                );
            case 4:
                return (
                    <EmergencyContactStep
                        data={formData.emergencyContact}
                        onDataChange={(data: Record<string, unknown>) => onFormDataChange(data, 'emergencyContact')}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ py: { xs: 2, sm: 3 } }}>
            {renderStepContent(activeStep)}
        </Box>
    );
};

export default StepContent;
