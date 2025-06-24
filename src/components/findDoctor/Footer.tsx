import { Box, Typography, Grid, Link, Stack  } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <Box sx={{background: 'white', py: 4,borderTop: '1px solid rgba(30,108,114,0.10)',}}>
                    <Box sx={{ width: '90%',mx: 'auto' }}>
                <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ margin: '0 auto' }}
            >
                {/* Left: Logo and Social */}
                <Grid>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 3 }}>
                        MedKit
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#1e6c72', fontWeight: 'bold', mb: 1}}>
                        Follow us
                    </Typography>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 1 }}>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ fontSize: 38, color: '#1e6c72', cursor: 'pointer' }} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon sx={{ fontSize: 38, color: '#1e6c72', cursor: 'pointer' }} />
                        </Link>
                    <Link href="https://www.spotify.com" aria-label="Spotify" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                        <img src="/iconmonstr-spotify-1-240.png" alt="Spotify" style={{ width: 28, height: 28 }} />
                    </Link>
                    </Stack>
                </Grid>
                {/* Right: Links */}
                <Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'flex-start', md: 'flex-end' },
                            gap: { xs: 4, md: 10 },
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        {/* Company */}
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 2 }}>
                                Company
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>About us</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Privacy policy</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Terms of use</Link>
                            </Stack>
                        </Box>
                        {/* Community */}
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 2 }}>
                                Community
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Specialists</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Patients</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Blog</Link>
                            </Stack>
                        </Box>
                        {/* Help */}
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', color: '#1e6c72', mb: 2 }}>
                                Help
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Support</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>FAQ</Link>
                                <Link href="#" underline="none" sx={{ color: '#1e6c72' }}>Mobile App</Link>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
}

export default Footer;