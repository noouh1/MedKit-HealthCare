import { Box } from '@mui/material';
import HeroSection from '../../components/home/heroSection';
import HowItWorks from '../../components/home/howItWorks';
import BookingSteps from '../../components/home/bookingSteps';
import SpecialistsOverview from '../../components/home/specialistsOverview';
import Footer from '../../components/home/footer';

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