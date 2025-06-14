import {Link} from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home','Find a doctor', 'About Us', 'Client zone'];
interface navprops {
  logocolor: string;
  ulcolor: string;
}
const Appbar = ({ logocolor,ulcolor }: navprops) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Box >
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py:4  }}>
                <Typography className='Logo' variant="h6" sx={{ fontWeight: 'bold', color: logocolor }}>
                    MedKit
                </Typography>
        <Box
            component="ul"
            sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 8,
            listStyle: 'none',
            m: 0,
            p: 0,
            alignItems: 'center',
            fontWeight: 600,
            }}
        >
            {pages.map((page) => (
            <Box component="li" key={page} sx={{ m: 0, p: 0 }}>
                <Link
                to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                    color: ulcolor,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                }}
                >
                {page}
                </Link>
            </Box>
            ))}
        </Box>
        <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}
            onClick={() => setOpen(true)}
        >
            <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 220, mt: 4 }}>
            <List>
                {pages.map((page) => (
                <ListItem key={page} disablePadding>
                    <ListItemButton onClick={() => setOpen(false)} component={Link} to={`/${page.toLowerCase().replace(/\s+/g, '-')}`} sx={{ color: '#1e6c72', fontWeight: 600 }}>
                    <ListItemText primary={page} />
                    </ListItemButton>
                </ListItem>
                ))}
          </List>
        </Box>
      </Drawer>
        </Container>
         
        </Box>
    );
}

export default Appbar;