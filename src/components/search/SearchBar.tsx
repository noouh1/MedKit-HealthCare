import {Box,TextField,MenuItem,Typography, Button, InputAdornment} from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

function SearchBar() {
  return (
    <Box>
            <Box
            sx={{
            width: { xs: '95%', sm: '90%', md: '70%' },
            mx: 'auto',
            my: 8,
            backgroundColor: '#fff',
            borderRadius: 3,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            p: { xs: 2, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#39686b',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Book your appointment
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 2,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              mt: 1,
            }}
          >
            <TextField
              select
              fullWidth
              label="Specialty / Doctor / Hospital"
              size="small"
              sx={{ backgroundColor: '#fafbfc' }}
              defaultValue=""
            >
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Hospital">Hospital</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Location"
              size="small"
              sx={{ backgroundColor: '#fafbfc' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <GpsFixedIcon sx={{ color: '#bdbdbd', cursor: 'pointer' }} />
                        </InputAdornment>
                    ),          
                }}
            />
            <TextField
              fullWidth
              label="Date"
              size="small"
              type="date"
              sx={{ backgroundColor: '#fafbfc' }}
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#b388c3',
                color: 'white',
                fontWeight: 600,
                px: 4,
                borderRadius: 1,
                '&:hover': { backgroundColor: '#a06eb5' },
                minWidth: 100,
              }}
            >
              Search
            </Button>
          </Box>
            </Box>
                </Box>
  )
}

export default SearchBar
