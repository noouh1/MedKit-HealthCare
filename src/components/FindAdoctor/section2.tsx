import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Pagination, Select, Stack, TextField, Typography, type SelectChangeEvent} from '@mui/material'
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import EmergencyIcon from '@mui/icons-material/Emergency';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ToothIcon from '@mui/icons-material/MedicalServices' 
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SpaIcon from '@mui/icons-material/Spa'
import WcIcon from '@mui/icons-material/Wc'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import doctorImg1 from '../../assets/1.png';
import doctorImg2 from '../../assets/2.png';
import doctorImg3 from '../../assets/3.png';
import doctorImg4 from '../../assets/4.png';
import doctorImg5 from '../../assets/5.png';
import doctorImg6 from '../../assets/6.png';
import doctorImg7 from '../../assets/7.png';
import doctorImg8 from '../../assets/8.png';
import doctorImg9 from '../../assets/9.png';
import DoctorCard from '../../components/doctorCard/doctorcard';
import React from 'react';

function Section2() {
    const [value, setvalue] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
    setvalue(event.target.value);
  };
    return (
    <Box sx={{ backgroundColor: '#f4f8fb', mx: 'auto', display: 'flex',flexDirection: 'row' }}>
        {/* Right panel */}
        <Box sx={{backgroundColor:'white',px:10,py:6,display: { xs: 'none', md: 'block' }}} >
            <Typography variant="h5" sx={{ fontWeight: 'bold',color: '#1e6c72', my: 1, fontSize: {md:'20px',xs:'20px'} }}>
                    Refine Your Search
            </Typography>
        <TextField
              fullWidth
              label="Search"
              size="small"
              sx={{ backgroundColor: '#fafbfc',my: 1 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <SearchIcon sx={{ color: '#bdbdbd', cursor: 'pointer' }} />
                        </InputAdornment>
                    ),          
                }}
            />
            {/* spiciality */}
            <Box sx={{ my: 3 }}>
                <Typography variant="body1" sx={{ color: '#1e6c72', my: 1, fontSize: {md:'15px',xs:'15px'}, fontWeight:'bold'}}>
                    Spiciality
            </Typography>
            {/* checkboxes */}
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmergencyIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                General practitioner
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false}
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ToothIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                Dentistry
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false}
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }} />} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessibilityNewIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                Neurology
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false} 
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalHospitalIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                X-Ray
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false} 
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SpaIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                Dermatology
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false} 
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WcIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                Urology
            </Typography>
            </Box>}
            />
            <FormControlLabel control={<Checkbox defaultChecked={false} 
            sx={{
            color:'secondary.main',
            '&.Mui-checked': {
            color: 'secondary.main',
            },
            }}/>} 
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PsychologyIcon sx={{ color: '#757575' }} />
            <Typography variant="body1" sx={{ color: '#1e6c72' }}>
                Psychiaty
            </Typography>
            </Box>}
            />
            </FormGroup>
            {/* checkboxes end */}
            <Typography
                sx={{
                    color: '#757575',
                    mt: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 500,
                    fontSize: 16,
                    width: 'fit-content',
                    userSelect: 'none'
                }}
                >
                Show more
                <ExpandMoreIcon sx={{ ml: 1 }} />
                </Typography>
            </Box>
            {/* spicilaity end */}
            {/* qualifcation */}
            <Box sx={{my: 3}}>
                <Typography variant="body1" sx={{ color: '#1e6c72', my: 1, fontSize: {md:'15px',xs:'15px'}, fontWeight:'bold'}}>
                    Qualifcation
            </Typography>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="MBBS" />
            <FormControlLabel control={<Checkbox />} label="MBBch" />
            <FormControlLabel control={<Checkbox />} label="MD" />
            <FormControlLabel control={<Checkbox />} label="DO" />
            </FormGroup>
            </Box>
            {/* qualifcation end */}
            <Box sx={{my: 3}}>
            <Typography variant="body1" sx={{ color: '#1e6c72', my: 1, fontSize: {md:'15px',xs:'15px'}, fontWeight:'bold'}}>
                Country
            </Typography>
            <TextField
              fullWidth
              label="Denmark[DK]"
              size="small"
              sx={{ backgroundColor: 'white' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <GpsFixedIcon sx={{ color: '#bdbdbd', cursor: 'pointer' }} />
                        </InputAdornment>
                    ),          
                }}
            />
            <Typography variant="body1" sx={{ color: '#1e6c72', my: 1, fontSize: {md:'15px',xs:'15px'}, fontWeight:'bold'}}>
                Disctrict
            </Typography>
            <TextField
            select
            fullWidth
            label="Copenhagen[CPH]"
            size="small"
            sx={{ backgroundColor: 'white' }}
            />
            </Box>
            <Button
            fullWidth
              variant="contained"
              sx={{
                mb: 2,
                backgroundColor: '#b388c3',
                color: 'white',
                fontWeight: 600,
                px: 4,
                borderRadius: 1,
                '&:hover': { backgroundColor: '#a06eb5' },
                minWidth: 100,
              }}
            >
            Update Search
            </Button>
        </Box>
        {/* Left panel */}
        <Box sx={{mx:'auto',mt:{sm:0,md:6} }}>
            <Box className="smallnav" sx={{ my: 2, display:'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: '#1e6c72', my: 1, fontSize: {md:'15px',xs:'20px'}  }}>
                    Showing 175 search results
            </Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200  }}>
            <InputLabel id="demo-simple-select-standard-label" sx={{color:'#1e6c72'}}>Sort by:Highest Rated</InputLabel>
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={value}
            onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
        </Select>
        </FormControl>
            </Box>
            {/* cards */}
            <Box className="Cards">
            <Grid container columnSpacing={4}sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {/* first column */}
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <DoctorCard image={doctorImg1} name="Duncan Pitt" specialty="Orthodontics" />
                <DoctorCard image={doctorImg2} name="Mary Weather" specialty="Endodontics" />
                <DoctorCard image={doctorImg3} name="Jacob Abel" specialty="Periodontics" />
                </Grid>
                {/* second column */}
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <DoctorCard image={doctorImg4} name="Gill Hames" specialty="Pediatric dentistry" />
                <DoctorCard image={doctorImg5} name="Finn McDonald" specialty="Dentistry" />
                <DoctorCard image={doctorImg6} name="Donna Summer" specialty="Prosthodontics" />
                </Grid>
                {/* third column */}
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <DoctorCard image={doctorImg7} name="Dagmar McLean" specialty="Psychiatry" />
                <DoctorCard image={doctorImg8} name="Richard Kicker" specialty="Urology" />
                <DoctorCard image={doctorImg9} name="Millie Billie" specialty="Dermatology" />
                </Grid>
            </Grid>
            </Box>
            <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', my: 6 }}>
                <Pagination count={10} size="large" />
            </Stack>
        </Box>
    </Box>
  )
}

export default Section2