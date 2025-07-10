import { Box } from '@mui/material';
import HeroSection from '../../components/home/HeroSection.tsx';
import HowItWorks from '../../components/home/HowItWorks.tsx';
import BookingSteps from '../../components/home/BookingSteps.tsx';
import SpecialistsOverview from '../../components/home/SpecialistsOverview.tsx';
import Footer from "../../components/findDoctor/Footer.tsx";

function Home() {
    return (
        <Box sx={{ 
            width: '100%', 
            overflowX: 'hidden',
            minHeight: '100vh'
        }}>
            {/* Start Section 1 */}
            <HeroSection />
            {/* End Section 1 */}

            {/* Start Section 2 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                <HowItWorks />
            </Box>
            {/* End Section 2 */}

            {/* Start Section 3 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                <BookingSteps />
            </Box>
            {/* End Section 3 */}

            {/* Start Section 4 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                <SpecialistsOverview />
            </Box>
            {/* End Section 4 */}

            {/* Footer */}
            <Footer />

        </Box>
    );
}
export default Home;