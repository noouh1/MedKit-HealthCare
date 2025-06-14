import { Box } from '@mui/material';
import Appbar from '../../components/navbar/appbar.tsx';
import Section1 from '../../components/FindAdoctor/section1.tsx';
import Section2 from '../../components/FindAdoctor/section2.tsx';
import Footer from '../../components/FindAdoctor/Footer.tsx';

function FindADoctor() {
  return (
    <Box sx={{  display: 'flex', flexDirection: 'column', background: '#f4f8fb' }}>
      <Box sx={{ backgroundColor: '#1e6c72' }}>
        <Appbar logocolor='white' ulcolor='white'/>
      </Box>
      <Section1 />
      <Box sx={{ flex: 1 }}>
        <Section2 />
      </Box>
      <Footer />
    </Box>
  );
}

export default FindADoctor;
