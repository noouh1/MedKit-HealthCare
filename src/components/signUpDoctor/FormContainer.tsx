import React from 'react';
import { Paper, Box } from '@mui/material';

interface FormContainerProps {
    children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
    return (
        <Paper 
            elevation={0} 
            sx={{ 
                borderRadius: { xs: 2, sm: 3 },
                background: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                maxWidth: '1200px',
                mx: 'auto',
                position: 'relative',
                // Ensure proper mobile spacing
                width: { xs: '100%', sm: 'auto' }
            }}
        >
            <Box sx={{ width: '100%', p: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                {children}
            </Box>
        </Paper>
    );
};

export default FormContainer;
