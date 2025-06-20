import { Box } from '@mui/material';
import HeroSection from '../../components/home/HeroSection.tsx';
import HowItWorks from '../../components/home/HowItWorks.tsx';
import BookingSteps from '../../components/home/BookingSteps.tsx';
import SpecialistsOverview from '../../components/home/SpecialistsOverview.tsx';
import Footer from "../../components/findDoctor/Footer.tsx";

function Home() {
    return (
        <Box>
            {/* Start Section 1 */}
            <HeroSection />
            {/* End Section 1 */}

            {/* Start Section 2 */}
            <HowItWorks />
            {/* End Section 2 */}

            {/* Start Section 3 */}
            <BookingSteps />
            {/* End Section 3 */}

            {/* Start Section 4 */}
            <SpecialistsOverview />
            {/* End Section 4 */}

            {/* Footer */}
            <Footer />

        </Box>
    );
}
export default Home;