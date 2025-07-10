import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

interface EmergencyContactData {
    name: string;
    relationship: string;
    phone: string;
    email: string;
}

interface EmergencyContactStepProps {
    data: EmergencyContactData;
    onDataChange: (data: Partial<EmergencyContactData>) => void;
}

const relationships = [
    'Spouse',
    'Parent',
    'Sibling',
    'Child',
    'Friend',
    'Colleague',
    'Other'
];

const EmergencyContactStep: React.FC<EmergencyContactStepProps> = ({ data, onDataChange }) => {
    const handleInputChange = (field: keyof EmergencyContactData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onDataChange({ [field]: event.target.value });
    };

    const handleRelationshipChange = (event: { target: { value: string } }) => {
        onDataChange({ relationship: event.target.value });
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                Emergency Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
                Please provide emergency contact information.
            </Typography>

            <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Full Name"
                    value={data.name}
                    onChange={handleInputChange('name')}
                    
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <FormControl fullWidth >
                    <InputLabel>Relationship</InputLabel>
                    <Select
                        value={data.relationship}
                        label="Relationship"
                        onChange={handleRelationshipChange}
                        sx={{
                            borderRadius: 2
                        }}
                    >
                        {relationships.map((rel) => (
                            <MenuItem key={rel} value={rel}>
                                {rel}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    label="Phone Number"
                    value={data.phone}
                    onChange={handleInputChange('phone')}
                    
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2
                        }
                    }}
                />

                <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={data.email}
                    onChange={handleInputChange('email')}
                    
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

export default EmergencyContactStep;
