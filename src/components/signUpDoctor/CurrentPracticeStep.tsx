import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Stack
} from '@mui/material';

interface CurrentPracticeData {
    hospitalName: string;
    position: string;
    workAddress: string;
    workPhone: string;
}

interface CurrentPracticeStepProps {
    data: CurrentPracticeData;
    onDataChange: (data: Partial<CurrentPracticeData>) => void;
}

const CurrentPracticeStep: React.FC<CurrentPracticeStepProps> = ({ data, onDataChange }) => {
    const handleInputChange = (field: keyof CurrentPracticeData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onDataChange({ [field]: event.target.value });
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                Current Practice
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
                Please provide details about your current practice.
            </Typography>

            <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Hospital/Clinic Name"
                    value={data.hospitalName}
                    onChange={handleInputChange('hospitalName')}
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Position/Title"
                    value={data.position}
                    onChange={handleInputChange('position')}
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Work Address"
                    value={data.workAddress}
                    onChange={handleInputChange('workAddress')}
                    variant="outlined"
                    multiline
                    rows={3}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Work Phone Number"
                    value={data.workPhone}
                    onChange={handleInputChange('workPhone')}
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

export default CurrentPracticeStep;
