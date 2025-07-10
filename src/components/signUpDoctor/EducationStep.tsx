import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Stack
} from '@mui/material';

interface EducationData {
    medicalSchool: string;
    graduationYear: string;
    residency: string;
    fellowship: string;
}

interface EducationStepProps {
    data: EducationData;
    onDataChange: (data: Partial<EducationData>) => void;
}

const EducationStep: React.FC<EducationStepProps> = ({ data, onDataChange }) => {
    const handleInputChange = (field: keyof EducationData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onDataChange({ [field]: event.target.value });
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                Education
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
                Please provide your educational background.
            </Typography>

            <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Medical School"
                    value={data.medicalSchool}
                    onChange={handleInputChange('medicalSchool')}
                    
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Graduation Year"
                    type="number"
                    value={data.graduationYear}
                    onChange={handleInputChange('graduationYear')}
                    
                    variant="outlined"
                    inputProps={{ min: 1950, max: new Date().getFullYear() }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Residency Program"
                    value={data.residency}
                    onChange={handleInputChange('residency')}
                    
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Fellowship (Optional)"
                    value={data.fellowship}
                    onChange={handleInputChange('fellowship')}
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />
            </Stack>
        </Box>
    );
};

export default EducationStep;
