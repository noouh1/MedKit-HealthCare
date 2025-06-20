import { Box } from '@mui/material';
import Footer from "../../components/findDoctor/Footer.tsx";
import CardPreview from "../../components/cards/CardPreview.tsx";
import Search from "../../components/search/Search.tsx";

function FindDoctor() {
  return (
    <Box sx={{  display: 'flex', flexDirection: 'column', background: '#f4f8fb' }}>
      <Search />
      <Box sx={{ flex: 1 }}>
      <CardPreview />
      </Box>
      <Footer />
    </Box>
  );
}

export default FindDoctor;
