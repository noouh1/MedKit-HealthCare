import {Box,Typography} from '@mui/material'
import Searchbar from './SearchBar.tsx'
function Search() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <Box sx={{ 
          backgroundColor: '#1e6c72',
          minHeight: { xs: '50vh', sm: '55vh', md: '55vh' },
          mx: 'auto',
          px: { xs: 1, sm: 2, md: 0 },
          py: { xs: 2, sm: 3, md: 0 }
        }}>    
            <Box sx={{ 
              color: 'white', 
              textAlign: 'center',
              pt: { xs: 6, sm: 8, md: 12 },
              px: { xs: 1, sm: 2, md: 0 }
            }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '50px' },
                  lineHeight: { xs: 1.2, md: 1.1 },
                  mb: { xs: 2, md: 3 }
                }}>
                    Search for a specialist and make an appointment
                </Typography>
                <Typography variant='body1' sx={{ 
                  marginY: { xs: '15px', md: '30px' }, 
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  px: { xs: 1, sm: 0 },
                  lineHeight: 1.4
                }}>
                    Select your doctor and preferred time slot to book your appointment
                </Typography>
            </Box>
            <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
              <Searchbar/>
            </Box>
        </Box>
    </Box>
  )
}

export default Search