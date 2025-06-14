import { Box } from '@mui/material';
import Appbar from '../../components/navbar/appbar.tsx';
import Search from '../../components/FindAdoctor/search.tsx';
import Cardpreview from '../../components/FindAdoctor/cardpreview.tsx';
import Footer from '../../components/FindAdoctor/Footer.tsx';

function FindADoctor() {
  return (
    <Box sx={{  display: 'flex', flexDirection: 'column', background: '#f4f8fb' }}>
      <Box sx={{ backgroundColor: '#1e6c72' }}>
        <Appbar logocolor='white' ulcolor='white'/>
      </Box>
      <Search />
      <Box sx={{ flex: 1 }}>
      <Cardpreview />
      </Box>
      <Footer />
    </Box>
  );
}

export default FindADoctor;
