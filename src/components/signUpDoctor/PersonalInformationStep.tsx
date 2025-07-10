import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Avatar,
    IconButton,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import type { PersonalInfoData } from '../../types/doctorRegistration';

interface PersonalInformationStepProps {
    data: PersonalInfoData;
    onDataChange: (data: Partial<PersonalInfoData>) => void;
}

const PersonalInformationStep: React.FC<PersonalInformationStepProps> = ({ data, onDataChange }) => {
    const [touched, setTouched] = React.useState<Record<string, boolean>>({});

    const handleInputChange = (field: keyof PersonalInfoData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onDataChange({ [field]: event.target.value });
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onDataChange({ profilePhoto: file });
    };

    const handleGenderChange = (event: { target: { value: string } }) => {
        onDataChange({ gender: event.target.value });
        setTouched(prev => ({ ...prev, gender: true }));
    };

    const getFieldError = (field: keyof PersonalInfoData, value: string) => {
        if (!touched[field]) return '';
        if (!value) return 'This field is required';
        if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email';
        return '';
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Typography variant="h5" sx={{ 
                mb: 1, 
                fontWeight: 600, 
                color: '#2d6c76',
                fontSize: { xs: '1.5rem', sm: '1.75rem' }
            }}>
                Personal Information
            </Typography>
            <Typography variant="body2" sx={{ 
                mb: 5, 
                color: '#64748b',
                fontSize: { xs: '0.9rem', sm: '1rem' }
            }}>
                Please fill in all required fields to continue.
            </Typography>

            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', lg: 'row' }, 
                gap: { xs: 4, lg: 8 } 
            }}>
                {/* Profile Photo Section - Top on mobile, Left on desktop */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    minWidth: { xs: '100%', lg: 280 },
                    order: { xs: 1, lg: 1 },
                    mb: { xs: 3, lg: 0 },
                    pb: { xs: 3, lg: 0 },
                    borderBottom: { xs: '1px solid #e2e8f0', lg: 'none' }
                }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: 140,
                            height: 140,
                            mb: 3
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 140,
                                height: 140,
                                bgcolor: '#f8fafc',
                                border: '3px dashed #cbd5e1',
                                fontSize: 48,
                                color: '#94a3b8',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#3b82f6',
                                    backgroundColor: '#eff6ff'
                                }
                            }}
                            src={data.profilePhoto ? URL.createObjectURL(data.profilePhoto) : undefined}
                        >
                            <PhotoCameraIcon fontSize="large" />
                        </Avatar>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="profile-photo-upload"
                            type="file"
                            onChange={handlePhotoChange}
                        />
                        <label htmlFor="profile-photo-upload">
                            <IconButton
                                component="span"
                                sx={{
                                    position: 'absolute',
                                    bottom: 8,
                                    right: 8,
                                    bgcolor: '#3b82f6',
                                    color: 'white',
                                    width: 40,
                                    height: 40,
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    '&:hover': { 
                                        bgcolor: '#2563eb',
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            >
                                <PhotoCameraIcon />
                            </IconButton>
                        </label>
                    </Box>
                    <Typography variant="body2" sx={{ 
                        color: '#3b82f6', 
                        cursor: 'pointer', 
                        textAlign: 'center',
                        fontWeight: 500,
                        '&:hover': {
                            color: '#2563eb'
                        }
                    }}>
                        Click to upload profile photo
                    </Typography>
                </Box>

                {/* Form Fields - Bottom on mobile, Right on desktop */}
                <Box sx={{ flex: 1, order: { xs: 2, lg: 2 } }}>
                    <Stack spacing={4}>
                        {/* Name Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <TextField
                                fullWidth
                                label="First Name"
                                value={data.firstName}
                                onChange={handleInputChange('firstName')}
                                
                                variant="outlined"
                                error={!!getFieldError('firstName', data.firstName)}
                                helperText={getFieldError('firstName', data.firstName)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                value={data.lastName}
                                onChange={handleInputChange('lastName')}
                                
                                variant="outlined"
                                error={!!getFieldError('lastName', data.lastName)}
                                helperText={getFieldError('lastName', data.lastName)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                        </Box>

                        {/* Contact Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={data.email}
                                onChange={handleInputChange('email')}
                                
                                variant="outlined"
                                error={!!getFieldError('email', data.email)}
                                helperText={getFieldError('email', data.email)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                value={data.phone}
                                onChange={handleInputChange('phone')}
                                
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                        </Box>

                        {/* Date of Birth & Gender Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <TextField
                                label="Date of Birth"
                                type="date"
                                value={data.dateOfBirth}
                                onChange={handleInputChange('dateOfBirth')}
                                
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                            
                            <FormControl  sx={{ 
                                flex: 1, 
                                minWidth: 120,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    backgroundColor: '#f8fafc',
                                    '&:hover': {
                                        backgroundColor: '#f1f5f9'
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: '#ffffff'
                                    }
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#64748b',
                                    fontWeight: 500
                                }
                            }}>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    value={data.gender}
                                    label="Gender"
                                    onChange={handleGenderChange}
                                    sx={{
                                        borderRadius: 2
                                    }}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                    <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Address */}
                        <TextField
                            fullWidth
                            label="Address"
                            value={data.address}
                            onChange={handleInputChange('address')}
                            
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    backgroundColor: '#f8fafc',
                                    '&:hover': {
                                        backgroundColor: '#f1f5f9'
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: '#ffffff'
                                    }
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#64748b',
                                    fontWeight: 500
                                }
                            }}
                        />

                        {/* Location Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <TextField
                                fullWidth
                                label="City"
                                value={data.city}
                                onChange={handleInputChange('city')}
                                
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="State"
                                value={data.state}
                                onChange={handleInputChange('state')}
                                
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="ZIP Code"
                                value={data.zipCode}
                                onChange={handleInputChange('zipCode')}
                                
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9'
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#64748b',
                                        fontWeight: 500
                                    }
                                }}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default PersonalInformationStep;
