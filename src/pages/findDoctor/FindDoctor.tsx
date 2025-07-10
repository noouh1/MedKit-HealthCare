import { Box } from '@mui/material';
import Footer from "../../components/findDoctor/Footer.tsx";
import CardPreview from "../../components/cards/CardPreview.tsx";
import Search from "../../components/search/Search.tsx";

function FindDoctor() {
  return (
    <Box sx={{  
      display: 'flex', 
      flexDirection: 'column', 
      background: '#f4f8fb',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Search Section */}
      <Box sx={{ 
        width: '100%',
        
      }}>
        <Search />
      </Box>
      
      {/* Main Content */}
      <Box sx={{ 
        flex: 1,
        width: '100%',
        px: { xs: 1, sm: 2, md: 3 },
        py: { xs: 2, sm: 3 },
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <CardPreview />
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default FindDoctor;
