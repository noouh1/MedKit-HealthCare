import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { CardData } from '../../types/FindDoctor';
import { Link } from 'react-router-dom';
import { imgs, names, specialties } from '../../types/FindDoctor';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';

const cardsData: CardData[] = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: names[i],
  specialty: specialties[i],
  image: imgs[i],
}));

const DoctorCard: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const cardsPerRow = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const shouldHide = (index: number): boolean => {
    if (expandedIndex === null || isSmallScreen) return false;

    const isSameRow = Math.floor(index / 3) === Math.floor(expandedIndex / 3);
    if (!isSameRow || index === expandedIndex) return false;

    const position = expandedIndex % 3;

    if (position === 0 && index === expandedIndex + 1) return true;
    if (position === 1 && index === expandedIndex + 1) return true;
    if (position === 2 && index === expandedIndex - 1) return true;

    return false;
  };

const rows: CardData[][] = [];
for (let i = 0; i < cardsData.length; i += cardsPerRow) {
  rows.push(cardsData.slice(i, i + cardsPerRow));
}

return (
  <Box >
    {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: 4,
            mb: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {row.map((card, indexInRow) => {
            const index = rowIndex * 3 + indexInRow;
            if (shouldHide(index)) return null;

            const isExpanded = expandedIndex === index;

            return (
              <Box
                key={card.id}
                onClick={() => handleCardClick(index)}
                sx={{
                  flex: isExpanded && !isSmallScreen ? 2 : 1,
                  transition: 'all 800ms cubic-bezier(0.4,0,0.2,1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                  transform: isExpanded ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: isExpanded ? 'white' : '#f5f5f5',
                    borderRadius: '18px',
                    py: 2,
                    px: isExpanded ? (isSmallScreen ? 4 : 10) : 12,
                    textAlign: isExpanded ? 'left' : 'center',
                    boxShadow: '0 4px 16px rgba(30, 108, 114, 0.10)',
                    transition:'all 800ms ease' ,
                    minHeight: 320,
                    width: '100%',
                    display: 'flex',
                    flexDirection: isExpanded && !isSmallScreen ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isExpanded ? 6 : 2,
                    '&:hover img': {
                      transform: 'scale(1.09) rotate(-2deg)',
                      boxShadow: '0 12px 32px rgba(30, 108, 114, 0.22)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.name}
                      sx={{
                        width: isExpanded ? 100 : 150,
                        height: isExpanded ? 100 : 150,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mb: 2,
                        transition: 'all 0.5s ease',
                        boxShadow: '0 2px 8px rgba(30, 108, 114, 0.1)',
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e6c72', fontSize: isExpanded ? 17 : 19 }}>
                      {card.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', fontSize: 14 }}>
                      {card.specialty}
                    </Typography>
                    <Box className="icons" sx={{ display: isExpanded ? 'flex' : 'none', gap: 1, mt: 2 }}>
                      {[LocalPhoneOutlinedIcon, EmailOutlinedIcon, CalendarTodayOutlinedIcon].map((Icon, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e6c72', borderRadius: '50%', width: 40, height: 40 }}>
                          <Icon sx={{ color: '#1e6c72', fontSize: 17 }} />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  {isExpanded && (
                    <>
                      {!isSmallScreen && (
                        <Box sx={{ width: '1px', height: '250px', backgroundColor: '#3333', mx: 2 }} />
                      )}
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                          mt: isSmallScreen ? 3 : 0,
                          alignItems: isSmallScreen ? 'center' : 'flex-start',
                          textAlign: isSmallScreen ? 'center' : 'left',
                        }}
                      >
                        <Box>
                          <Typography variant="h6" sx={{ color: '#333333c4', fontSize: 16 }}>
                            <LocationOnOutlinedIcon sx={{ color: '#333333c4' }} /> Location
                          </Typography>
                          <Typography sx={{ color: '#1e6c72', fontWeight: 'bold', fontSize: 18 }}>
                            Copenhagen, Denmark
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ color: '#333333c4', fontSize: 16 }}>
                            <MedicationOutlinedIcon sx={{ color: '#333333c4' }} /> Specialty
                          </Typography>
                          <Typography sx={{ color: '#1e6c72', fontWeight: 'bold', fontSize: 18 }}>
                            Senior at Endodontics
                          </Typography>
                        </Box>
                        <Link to="/book" state={{
                                  image: card.image,
                                  name: card.name,
                                  specialty: card.specialty,
                                }}style={{ textDecoration: 'none' }}>
                          <Button
                            variant="contained"
                            sx={{
                              mt: 2,
                              bgcolor: '#1e6c72',
                              fontSize: { xs: 12, sm: 14 },
                              px: { xs: 3, sm: 4 },
                              py: { xs: 1, sm: 1.5 },
                              fontWeight: 600,
                              borderRadius: 2,
                              '&:hover': { bgcolor: '#155a60' },
                            }}
                            fullWidth

                          >
                            Book an Appointment
                          </Button>
                        </Link>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

export default DoctorCard;
