import { useMemo } from 'react';
import type { DoctorFormData } from '../types/doctorRegistration';

export const useFormValidation = (formData: DoctorFormData) => {
    const validateStep = useMemo(() => (step: number): boolean => {
        switch (step) {
            case 0: { // Personal Information
                const { firstName, lastName, email, phone, dateOfBirth, gender, address, city, state, zipCode } = formData.personalInfo;
                return !!(firstName && lastName && email && phone && dateOfBirth && gender && address && city && state && zipCode);
            }
            case 1: { // Professional Details
                const { licenseNumber, specialization, yearsOfExperience } = formData.professionalDetails;
                return !!(licenseNumber && specialization && yearsOfExperience);
            }
            case 2: { // Education
                const { medicalSchool, graduationYear, residency } = formData.education;
                return !!(medicalSchool && graduationYear && residency);
            }
            case 3: { // Current Practice
                const { hospitalName, position, workAddress, workPhone } = formData.currentPractice;
                return !!(hospitalName && position && workAddress && workPhone);
            }
            case 4: { // Emergency Contact
                const { name, relationship, phone: emergencyPhone, email: emergencyEmail } = formData.emergencyContact;
                return !!(name && relationship && emergencyPhone && emergencyEmail);
            }
            default:
                return true;
        }
    }, [formData]);

    return { validateStep };
};
