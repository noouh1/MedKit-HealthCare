import {Box,Typography} from '@mui/material'
import Searchbar from './SearchBar.tsx'
function Search() {
  return (
    <Box>
        <Box sx={{ backgroundColor: '#1e6c72' ,minHeight: {xs:'60vh',md:'55vh'},mx: 'auto'}}>    
            <Box sx={{ color: 'white', textAlign: 'center',pt:12}}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: {md:'50px',xs:'30px'} }}>
                    Search for a specialist and make an appointment
                </Typography>
                <Typography variant='body1' sx={{ marginY: '30px', fontSize: {md:'18px'} }}>
                    Select your doctor and preferred time slot to book your appointment
                </Typography>
            </Box>
            <Searchbar/>
        </Box>
    </Box>
  )
}

export default Search