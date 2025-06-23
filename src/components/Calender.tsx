import React from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers';

const Calendar = () => {
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
        <Box
          sx={{
            borderRadius: 4,
            py: { xs: 2, md: 4 },
            px: { xs: 1, sm: 2, md: 4 },
            background: '#fff',
            boxShadow: '0 2px 16px rgba(30,108,114,0.06)',
            minWidth: { xs: '100vw', sm: '90vw', md: '100%' },
            maxWidth: 1200,
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 2, md: 4 },
          }}
        >
          <Box sx={{ width: '100%' ,display: 'flex', justifyContent: 'center', mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
              <StaticDatePicker
              showDaysOutsideCurrentMonth fixedWeekNumber={6}
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                slotProps={{
                  actionBar: { actions: [] },
                }}
                sx={{
                '& .MuiDayCalendar-weekDayLabel': {
                    fontSize: 20,        
                    fontWeight: 500,     
                    },
                    '& .MuiDayCalendar-daysContainer': {
                        justifyContent: 'space-between', 
                    },
                    '& .MuiPickersDay-root': {
                        fontWeight: 500,
                        fontSize: 14,
                        px:2,
                        gap: 4, 
                    },
                  '& .Mui-selected': {
                    border: '2px solid #b39ddb',
                    background: '#1e6c72 !important',
                    color: 'white',
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    fontWeight: 600,
                    fontSize: 20,
                    mx: 0.5,
                    maxwidth: 900,
                  },
                  '& .MuiPickersCalendarHeader-root': {
                    mb: 2,
                  },
                  '& .MuiPickersDay-root.Mui-disabled': {
                    color: '#bdbdbd',
                  },
                  '& .MuiPickersDay-root.Mui-selected:hover': {
                    color: '#1e6c72',
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>
  );
};

export default Calendar;