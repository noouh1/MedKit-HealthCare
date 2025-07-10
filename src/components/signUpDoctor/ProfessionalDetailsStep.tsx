import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Stack,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

interface ProfessionalDetailsData {
    licenseNumber: string;
    specialization: string;
    yearsOfExperience: string;
    boardCertifications: string[];
}

interface ProfessionalDetailsStepProps {
    data: ProfessionalDetailsData;
    onDataChange: (data: Partial<ProfessionalDetailsData>) => void;
}

const specializations = [
    'Internal Medicine',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Surgery',
    'Psychiatry',
    'Dermatology',
    'Radiology',
    'Emergency Medicine',
    'Family Medicine',
    'Oncology',
    'Ophthalmology',
    'Other'
];

const ProfessionalDetailsStep: React.FC<ProfessionalDetailsStepProps> = ({ data, onDataChange }) => {
    const handleInputChange = (field: keyof ProfessionalDetailsData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onDataChange({ [field]: event.target.value });
    };

    const handleSpecializationChange = (event: { target: { value: string } }) => {
        onDataChange({ specialization: event.target.value });
    };

    const handleExperienceChange = (event: { target: { value: string } }) => {
        onDataChange({ yearsOfExperience: event.target.value });
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                Professional Details
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
                Please provide your professional medical information.
            </Typography>

            <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Medical License Number"
                    value={data.licenseNumber}
                    onChange={handleInputChange('licenseNumber')}
                    
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <FormControl fullWidth >
                    <InputLabel>Primary Specialization</InputLabel>
                    <Select
                        value={data.specialization}
                        label="Primary Specialization"
                        onChange={handleSpecializationChange}
                        sx={{
                            borderRadius: 2
                        }}
                    >
                        {specializations.map((spec) => (
                            <MenuItem key={spec} value={spec}>
                                {spec}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth >
                    <InputLabel>Years of Experience</InputLabel>
                    <Select
                        value={data.yearsOfExperience}
                        label="Years of Experience"
                        onChange={handleExperienceChange}
                        sx={{
                            borderRadius: 2
                        }}
                    >
                        <MenuItem value="0-1">0-1 years</MenuItem>
                        <MenuItem value="2-5">2-5 years</MenuItem>
                        <MenuItem value="6-10">6-10 years</MenuItem>
                        <MenuItem value="11-15">11-15 years</MenuItem>
                        <MenuItem value="16-20">16-20 years</MenuItem>
                        <MenuItem value="20+">20+ years</MenuItem>
                    </Select>
                </FormControl>

                <Box>
                    <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                        Board Certifications (Optional)
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                        Add any board certifications you hold
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {data.boardCertifications.map((cert, index) => (
                            <Chip
                                key={index}
                                label={cert}
                                onDelete={() => {
                                    const newCerts = data.boardCertifications.filter((_, i) => i !== index);
                                    onDataChange({ boardCertifications: newCerts });
                                }}
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                    <TextField
                        fullWidth
                        label="Add Board Certification"
                        variant="outlined"
                        sx={{
                            mt: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2
                            }
                        }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                const target = e.target as HTMLInputElement;
                                const value = target.value.trim();
                                if (value && !data.boardCertifications.includes(value)) {
                                    onDataChange({
                                        boardCertifications: [...data.boardCertifications, value]
                                    });
                                    target.value = '';
                                }
                            }
                        }}
                        helperText="Press Enter to add a certification"
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default ProfessionalDetailsStep;
