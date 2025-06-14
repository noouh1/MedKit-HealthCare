import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const times = [
  { label: '8:30 AM', available: false },
  { label: '8:45 AM', available: true },
  { label: '9:00 AM', available: true },
  { label: '9:15 AM', available: true },
  { label: '9:30 AM', available: false },
  { label: '9:45 AM', available: true },
  { label: '10:00 AM', available: false },
  { label: '10:15 AM', available: true },
  { label: '10:30 AM', available: true },
  { label: '10:45 AM', available: true },
  { label: '11:00 AM', available: true },
  { label: '11:15 AM', available: true },
  { label: '11:30 AM', available: false },
  { label: '11:45 AM', available: false },
  { label: '1:00 PM', available: true },
];

interface TimePickerGridProps {
  value: string;
  onChange: (val: string) => void;
}

const TimePickerGrid: React.FC<TimePickerGridProps> = ({ value, onChange }) => (
  <Box sx={{ textAlign: 'center', width: '100%' }}>
    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 3 }}>
      Pick an available time
    </Typography>
    <Box sx={{ width: '100%', mx: 'auto' }}>
      <Grid
        container
        spacing={2}
        columns={5}
        sx={{
          width: '100%',
          margin: 0,
        }}
        justifyContent="center"
      >
        {times.map((time) => (
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          >
            <Button
              fullWidth
              variant="outlined"
              disabled={!time.available}
              onClick={() => onChange(time.label)}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                minWidth: 120,
                minHeight: 56,
                maxWidth: 180,
                color: !time.available ? '#bdbdbd' : '#1e6c72',
                borderColor: value === time.label ? '#b39ddb' : '#e0e0e0',
                background: value === time.label ? 'rgba(179,157,219,0.08)' : '#fff',
                boxShadow: value === time.label
                  ? '0 2px 8px rgba(179,157,219,0.10)'
                  : '0 2px 8px rgba(30,108,114,0.06)',
                position: 'relative',
                '&:hover': {
                  background: time.available ? 'rgba(179,157,219,0.15)' : undefined,
                  borderColor: '#b39ddb',
                },
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              {time.label}
              {value === time.label && (
                <CheckCircleIcon
                  sx={{
                    color: '#b39ddb',
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    fontSize: 24,
                    background: '#fff',
                    borderRadius: '50%',
                  }}
                />
              )}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default TimePickerGrid;