import {Box} from '@mui/material';
import Footer from '../../components/findDoctor/Footer';
import AboutHeroSection from '../../components/About Us/AboutHeroSection';
import StatisticsSection from '../../components/About Us/StatisticsSection';
import MissionVisionSection from '../../components/About Us/MissionVisionSection';
import MedicalSpecialties from '../../components/About Us/MedicalSpecialties';
import CoreValues from '../../components/About Us/CoreValues';
import PatientTestimonials from '../../components/About Us/PatientTestimonials';

function AboutUs() {
    return (
        <Box>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Core Values Section */}
      <CoreValues/>

      {/* Medical Specialties Section */}
      <MedicalSpecialties/>

      {/* Patient Testimonials Section */}
      <PatientTestimonials />
      {/* Footer */}
      <Footer/>
    </Box>
    );
}

export default AboutUs;

