import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
}

const DoctorCard = ({ image, name, specialty }: DoctorCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ py: 2, px: 10, borderRadius: 2, boxShadow: '0 4px 8px rgba(30,108,114,0.10)', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        image={image}
        sx={{ width: 150, height: 150, borderRadius: '50%', mx: 'auto' }}
        alt={name}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e6c72' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#757575' }}>
          {specialty}
        </Typography>
        {expanded && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: '#757575' }}>
              Location: Copenhagen, Denmark
            </Typography>
            <Typography variant="body2" sx={{ color: '#757575' }}>
              Specialty: Senior at Endodontics
            </Typography>
            <Button variant="contained" sx={{ mt: 1, backgroundColor: '#1e6c72', color: 'white' }}>
              <Link to="/Book">
                Book Appointment
              </Link>
            </Button>
          </Box>
        )}
        <Button onClick={handleExpandClick} sx={{ mt: 1, color: '#1e6c72' }}>
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;