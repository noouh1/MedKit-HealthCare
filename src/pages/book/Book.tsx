import { Box, Typography } from '@mui/material';

import React from 'react';
import AppointmentTypeSelector from "../../components/findDoctor/AppointmentTypeSelector.tsx";
import Footer from "../../components/findDoctor/Footer.tsx";
import TimePickerGrid from "../../components/findDoctor/TimePickerGrid.tsx";
import Calendar from '../../components/Calender.tsx';
import DoctorInfo from '../../components/cards/DoctorInfo.tsx';
import { useLocation } from 'react-router-dom';


function Book() {
  const [selectedTime, setSelectedTime] = React.useState<string>('');
  const [appointmentType, setAppointmentType] = React.useState<string>('online');
  const location = useLocation();
  const { image, name, specialty } = location.state || {};
  return (
    <Box sx={{ backgroundColor: '#f4f8fb' }}>
      <Box
        sx={{
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#1e6c72',
          py: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '50px' },
            px: 2,
          }}
        >
          Book your appointment online
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginY: '30px',
            fontSize: { xs: '1rem', md: '18px' },
            px: 2,
          }}
        >
          pick date, time and appointment type
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '100%', sm: '90%', md: '60%', lg: '40%' },
          mx: 'auto',
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 8 },
        }}
      >
        {/* Section 2: Doctor Info */}
        <DoctorInfo id={0} name={name} specialty={specialty} image={image} />
        {/* Section 3: Calendar */}
        <Calendar/>
        {/* Section 4: Time Picker */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <TimePickerGrid value={selectedTime} onChange={setSelectedTime} />
        </Box>
        {/* Section 5: Appointment Type */}
        <Box sx={{ width: '100%' }}>
          <AppointmentTypeSelector
            value={appointmentType}
            onChange={setAppointmentType}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Book;
