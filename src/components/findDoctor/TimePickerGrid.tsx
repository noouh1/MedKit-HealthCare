import React from 'react';
import { Box, Typography, Grid, Button, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { TimePickerGridProps } from '../../types/Book';
import { useTimeSlots } from '../../service/timesService';

const TimePickerGrid: React.FC<TimePickerGridProps> = ({ value, onChange }) => {
  const { data: times = [], isLoading, isError } = useTimeSlots();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ color: 'red', textAlign: 'center', p: 4 }}>
        Failed to load time slots.
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: 'center', minWidth: 800, flex: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 3 }}>
        Pick an available time
      </Typography>
      <Box sx={{ mx: 'auto' }}>
        <Grid container spacing={2} justifyContent="center">
          {times.map((time) => (
            <Grid key={time.label}>
              <Button
                fullWidth
                variant="outlined"
                disabled={!time.available}
                onClick={() => onChange(time.label)}
                sx={{
                  borderRadius: 2,
                  fontWeight: value === time.label ? 600 : 400,
                  fontSize: 16,
                  minWidth: 110,
                  minHeight: 56,
                  color: !time.available ? '#bdbdbd' : '#1e6c72',
                  borderColor: value === time.label ? '#b39ddb' : 'white',
                  background: value === time.label ? 'rgba(179,157,219,0.08)' : '#fff',
                  boxShadow: value === time.label
                    ? '0 2px 8px rgba(179,157,219,0.10)'
                    : '0 4px 16px rgba(30, 108, 114, 0.10)',
                  '&:hover': {
                    background: time.available ? 'rgba(179,157,219,0.15)' : undefined,
                    borderColor: '#b39ddb',
                  },
                  transition: 'background 0.2s, border-color 0.2s',
                  position: 'relative',
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
};

export default TimePickerGrid;
