import { Box, Typography, Card, TextField, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountrySelect2 from './ChooseCountry_2';

const queryClient = new QueryClient();

function BookingBar() {
    return (
        <Card
            elevation={0}
            sx={{
                border: '2px solid #1e6c72',
                borderRadius: 2,
                background: '#f9fcff',
                p: { xs: 2, md: 3 },
                maxWidth: 700,
                mb: 4,
                boxShadow: '0 2px 8px rgba(30,108,114,0.04)',
                width: '100%',
                mx: { xs: 'auto', md: 0 },
            }}
        >
            <Typography variant="h6" fontWeight="bold" color="#1e6c72" mb={2}
                sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Book your appointment
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row' },
                    gap: 2,
                }}
            >
                <TextField
                    select
                    label="Specialty"
                    size="small"
                    sx={{ flex: 1, minWidth: 120 }}
                >
                    <MenuItem value="general-practitioner">General Practitioner</MenuItem>
                    <MenuItem value="dentist">Dentist</MenuItem>
                    <MenuItem value="psychologist">Psychologist</MenuItem>
                    <MenuItem value="neurology">Neurology</MenuItem>
                </TextField>
                <QueryClientProvider client={queryClient}>
                    <CountrySelect2 label="Location" width={160}/>
                </QueryClientProvider>
                <TextField
                    label="Date"
                    type="date"
                    size="small"
                    sx={{ flex: 1, minWidth: 120 }}
                    InputLabelProps={{ shrink: true }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SearchIcon />}
                    sx={{
                        px: 3,
                        height: 40,
                        alignSelf: { xs: 'stretch', sm: 'center' },
                        bgcolor: '#b388d9',
                        color: 'white',
                        '&:hover': { bgcolor: '#a06cc1' },
                        minWidth: 100,
                        boxShadow: 'none',
                        fontWeight: 600,
                        fontSize: 16,
                    }}
                >
                    Search
                </Button>
            </Box>
        </Card>
    );
}

export default BookingBar;