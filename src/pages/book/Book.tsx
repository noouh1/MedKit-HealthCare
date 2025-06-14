import { Avatar, Box, Card, IconButton, Stack, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import NavBar from '../../components/navbar/NavBar.tsx';
import Img from '../../assets/2.png';
import React from 'react';
import AppointmentTypeSelector from "../../components/findDoctor/AppointmentTypeSelector.tsx";
import Footer from "../../components/findDoctor/Footer.tsx";
import TimePickerGrid from "../../components/findDoctor/TimePickerGrid.tsx";

function Book() {
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string>('');
  const [appointmentType, setAppointmentType] = React.useState<string>('online');

  return (
    <Box sx={{ backgroundColor: '#f4f8fb' }}>
      <Box sx={{ backgroundColor: '#1e6c72' }}>
        <NavBar />
      </Box>
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            p: { xs: 2, md: 3 },
            width: '100%',
            mb: { xs: 2, md: 4 },
            background: { xs: '#fff', sm: 'transparent' },
            borderRadius: { xs: 3, sm: 0 },
            boxShadow: { xs: '0 2px 16px rgba(30,108,114,0.06)', sm: 'none' },
          }}
        >
          <Avatar
            src={Img}
            alt="Mary Weather, MD"
            sx={{ width: 80, height: 80, mr: { sm: 3, xs: 0 }, mb: { xs: 2, sm: 0 } }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e6c72' }}>
              Mary Weather, MD
            </Typography>
            <Typography sx={{ color: '#5a7d7d' }}>Endodontics</Typography>
            <Typography sx={{ color: '#222', mt: 0.5, fontSize: 15 }}>
              Mon–Fri, 8:30–11:00 AM
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}>
            <IconButton sx={{ background: '#f4f8fb', boxShadow: 1 }}>
              <PhoneIcon sx={{ color: '#1e6c72' }} />
            </IconButton>
            <IconButton sx={{ background: '#f4f8fb', boxShadow: 1 }}>
              <EmailIcon sx={{ color: '#1e6c72' }} />
            </IconButton>
            <IconButton sx={{ background: '#f4f8fb', boxShadow: 1 }}>
              <LocationOnIcon sx={{ color: '#1e6c72' }} />
            </IconButton>
          </Stack>
        </Box>
        {/* Section 3: Calendar */}
        <Card
          sx={{
            borderRadius: 4,
            py: { xs: 2, md: 4 },
            px: { xs: 1, sm: 2, md: 6 },
            background: '#fff',
            boxShadow: '0 2px 16px rgba(30,108,114,0.06)',
            minWidth: { xs: '98vw', sm: '90vw', md: '100%' },
            maxWidth: 600,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 2, md: 4 },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <CalendarMonthIcon sx={{ color: '#1e6c72', mr: 1 }} />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                slotProps={{
                  actionBar: { actions: [] },
                }}
                sx={{
                  '& .MuiPickersDay-root': {
                    fontWeight: 500,
                  },
                  '& .Mui-selected': {
                    border: '2px solid #b39ddb',
                    background: '#fff !important',
                    color: '#1e6c72',
                  },
                  '& .MuiPickersDay-today': {
                    border: '1px solid #b39ddb',
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    fontWeight: 600,
                    fontSize: 20,
                  },
                  '& .MuiPickersCalendarHeader-root': {
                    mb: 2,
                  },
                  '& .MuiPickersDay-root.Mui-disabled': {
                    color: '#bdbdbd',
                  },
                  '& .MuiPickersDay-root.Mui-selected:hover': {
                    backgroundColor: '#b39ddb',
                    color: '#1e6c72',
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Card>
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
