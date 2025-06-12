import { Box, Typography, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box
            sx={{
                width: '100%',
                background: '#fff',
                display: 'flex',
                maxWidth: 1500,
                mx: 'auto',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: { xs: 4, md: 0 },
                mt: 15,
                mb:20
            }}
        >
            {/* Left: Logo and Social */}
            <Box>
                <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 22, mb: 2 }}>
                    MedKit
                </Typography>
                <Typography fontWeight={600} color="#225b63" sx={{ mb: 1, fontSize: 16 }}>
                    Follow us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link href="https://www.instagram.com" aria-label="Instagram">
                        <InstagramIcon style={{ color :'#225b63'}} />
                    </Link>
                    <Link href="https://www.X.com" aria-label="Twitter">
                        <TwitterIcon style={{ color :'#225b63'}} />
                    </Link>
                    <Link href="https://www.spotify.com" aria-label="Spotify">
                        <img src="../../public/iconmonstr-spotify-1-240.png" alt="Spotify" style={{ width: 24, height: 24, color:'#225b63' }} />
                    </Link>
                </Box>
            </Box>
            {/* Center: Company & Community */}
            <Box sx={{ display: 'flex', gap: { xs: 6, md: 10 }, mt: { xs: 4, md: 0 } }}>
                <Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ mb: 1, fontSize: 17 }}>
                        Company
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>About us</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>Privacy policy</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, '&:hover': { textDecoration: 'underline' } }}>Terms of use</Link>
                    </Box>
                </Box>
                <Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ mb: 1, fontSize: 17 }}>
                        Community
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>Specialists</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>Patients</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, '&:hover': { textDecoration: 'underline' } }}>Blog</Link>
                    </Box>
                </Box>
                <Box>
                    <Typography fontWeight="bold" color="#225b63" sx={{ mb: 1, fontSize: 17 }}>
                        Help
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>Support</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, mb: 0.5, '&:hover': { textDecoration: 'underline' } }}>FAQ</Link>
                        <Link href="#" color="#225b63" underline="none" sx={{ fontSize: 15, '&:hover': { textDecoration: 'underline' } }}>Mobile App</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;