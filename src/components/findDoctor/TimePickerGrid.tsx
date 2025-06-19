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
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        maxWidth: 900,
        mx: 'auto',
        flex: 2,
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: '#1e6c72',
          mb: 3,
          fontSize: { xs: 18, sm: 22, md: 26 },
        }}
      >
        Pick an available time
      </Typography>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
          {times.map((time) => (
            <Grid
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                fullWidth
                variant="outlined"
                disabled={!time.available}
                onClick={() => onChange(time.label)}
                sx={{
                  borderRadius: 2,
                  fontWeight: value === time.label ? 600 : 400,
                  fontSize: { xs: 13, sm: 15, md: 16 },
                  minWidth: 0,
                  minHeight: { xs: 40, sm: 48, md: 56 },
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
                  px: { xs: 0.5, sm: 1.5, md: 2 },
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
