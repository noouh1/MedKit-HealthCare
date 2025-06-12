import { Box } from '@mui/material';
import Section1 from '../../components/home/section1';
import Section2 from '../../components/home/section2';
import Section3 from '../../components/home/section3';
import Section4 from '../../components/home/section4';
import Footer from '../../components/home/footer';

function Home() {
    return (
        <Box>
            {/* Start Section 1 */}
            <Section1 />
            {/* End Section 1 */}

            {/* Start Section 2 */}
            <Section2 />
            {/* End Section 2 */}

            {/* Start Section 3 */}
            <Section3 />
            {/* End Section 3 */}

            {/* Start Section 4 */}
            <Section4 />
            {/* End Section 4 */}

            {/* Footer */}
            <Footer />

        </Box>
    );
}
export default Home;