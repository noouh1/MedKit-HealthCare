import { Box, Typography, TextField, MenuItem, Button, Card, Avatar, Chip } from '@mui/material';
import Footer from '../../components/footer';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CheckIcon from '@mui/icons-material/Check';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EastIcon from '@mui/icons-material/East';

function Home() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            {/* Start Section 1 */}
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundColor: '#f4f8fb',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '60%' },
                        p: { xs: 2, sm: 4, md: 24 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
                        }}
                    >
                        Connect with top
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
                        }}
                    >
                        rated doctors
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        color="#1e6c72"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
                        }}
                    >
                        in just a few clicks
                    </Typography>
                    <Typography
                        variant="body1"
                        mb={4}
                        sx={{
                            color: '#333',
                            fontWeight: 500,
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            maxWidth: 480,
                        }}
                    >
                        Select your doctor and preferred time slot to book your appointment
                    </Typography>

                    <Card
                        elevation={0}
                        sx={{
                            border: '2px solid #1e6c72',
                            borderRadius: 2,
                            background: '#f9fcff',
                            p: { xs: 2, md: 3 },
                            maxWidth: 700,
                            mb: 4,
                            boxShadow: '0 2px 8px rgba(30,108,114,0.04)',
                            width: '100%',
                            mx: { xs: 'auto', md: 0 },
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" color="#1e6c72" mb={2}
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            Book your appointment
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                            }}
                        >
                            <TextField
                                select
                                label="Specialty"
                                size="small"
                                sx={{ flex: 1, minWidth: 120 }}
                            >
                                <MenuItem value="general-practitioner">General Practitioner</MenuItem>
                                <MenuItem value="dentist">Dentist</MenuItem>
                                <MenuItem value="psychologist">Psychologist</MenuItem>
                                <MenuItem value="neurology">Neurology</MenuItem>
                            </TextField>
                            <TextField
                                label="Location"
                                size="small"
                                sx={{ flex: 1, minWidth: 120 }}
                            />
                            <TextField
                                label="Date"
                                type="date"
                                size="small"
                                sx={{ flex: 1, minWidth: 120 }}
                                InputLabelProps={{ shrink: true }}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<SearchIcon />}
                                sx={{
                                    px: 3,
                                    height: 40,
                                    alignSelf: { xs: 'stretch', sm: 'center' },
                                    bgcolor: '#b388d9',
                                    color: 'white',
                                    '&:hover': { bgcolor: '#a06cc1' },
                                    minWidth: 100,
                                    boxShadow: 'none',
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Search
                            </Button>
                        </Box>
                    </Card>
                </Box>

                {/* Right Side */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        width: { md: '40%' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        height: '108vh',
                        minHeight: '100vh',
                        backgroundColor: '#1e6c72',
                        p: 4,
                        zIndex: 0,
                    }}
                >
                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <Avatar
                            src="../../../images/home.jpg"
                            alt="Doctor"
                            sx={{
                                width: 400,
                                height: 700,
                                mx: 'auto',
                                borderRadius: 50,
                                backgroundColor: '#fff'
                            }}
                        />
                        <Chip
                            icon={<TagFacesIcon color="primary"/>}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        200,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Registered Patients
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: 120,
                                left: -100,
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<FiberManualRecordIcon style={{ color: '#74c9e8' }}/>}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        5,000+
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Doctors Online
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                top: 200,
                                right:-90,
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<FavoriteIcon style={{ color: '#ea392b' }}/>}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        Join Today!
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: 320,
                                left: -80,
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                        <Chip
                            icon={<StarIcon style={{ color: '#f9da56' }}/>}
                            label={
                                <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                        #1 Worldwide
                                    </Typography>
                                    <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                        Medical Website
                                    </Typography>
                                </Box>
                            }
                            sx={{
                                position: 'absolute',
                                bottom: 20, 
                                right: -40,
                                bgcolor: 'white',
                                borderRadius: 10,
                                px: 1,
                                py: 1,
                                boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                minWidth: 0,
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            {/* End Section 1 */}

            {/* Start Section 2 */}
            <Box sx={{ width: '100%', py: { xs: 6, md: 10 }, background: '#fff' }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#1e6c72"
                    align="center"
                    mb={6}
                    sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
                >
                    How it works
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 4, md: 8 },
                        maxWidth: 1200,
                        mx: 'auto',
                        px: 2,
                    }}
                >
                    {/* 1 */}
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                        <Box
                            sx={{
                                width: 120,
                                height: 120,
                                mx: 'auto',
                                mb: 2,
                                borderRadius: '50%',
                                background: '#eaf3fa',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <PersonSearchIcon sx={{ color: '#2e7d6b', fontSize: 56 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 20 }}>
                            Find your doctor
                        </Typography>
                        <Typography color="#6b7680" sx={{ mt: 1, fontSize: 15 }}>
                            Choose from a variety of our<br />medical specialists
                        </Typography>
                    </Box>
                    {/* 2 */}
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                        <Box
                            sx={{
                                width: 120,
                                height: 120,
                                mx: 'auto',
                                mb: 2,
                                borderRadius: '50%',
                                background: '#e7edfc',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <LocationOnIcon sx={{ color: '#4f6be8', fontSize: 56 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 20 }}>
                            Choose location
                        </Typography>
                        <Typography color="#6b7680" sx={{ mt: 1, fontSize: 15 }}>
                            Find doctors and medical<br />offices in your area
                        </Typography>
                    </Box>
                    {/* 3 */}
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                        <Box
                            sx={{
                                width: 120,
                                height: 120,
                                mx: 'auto',
                                mb: 2,
                                borderRadius: '50%',
                                background: '#f4f0fa',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <EventAvailableIcon sx={{ color: '#a678e4', fontSize: 56 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 20 }}>
                            Find free time slot
                        </Typography>
                        <Typography color="#6b7680" sx={{ mt: 1, fontSize: 15 }}>
                            Choose a time that is the<br />most convenient for you
                        </Typography>
                    </Box>
                    {/* 4 */}
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                        <Box
                            sx={{
                                width: 120,
                                height: 120,
                                mx: 'auto',
                                mb: 2,
                                borderRadius: '50%',
                                background: '#fcfaf4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <MedicalServicesIcon sx={{ color: '#e4c96a', fontSize: 56 }} />
                        </Box>
                        <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 20 }}>
                            Get a solution
                        </Typography>
                        <Typography color="#6b7680" sx={{ mt: 1, fontSize: 15 }}>
                            We can hold an appointment<br />either on video or chat
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* End Section 2 */}

            {/* Start Section 3 */}
            <Box
                sx={{
                    width: '100%',
                    py: { xs: 6, md: 8 },
                    px: { xs: 0, md: 0 },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 1500,
                        mx: 'auto',
                        background: '#eef6fa',
                        borderRadius: 6,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: { xs: 2, sm: 4, md: 8 },
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Left: Doctor Avatar and Chips */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: { xs: 4, md: 0 },
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ position: 'relative', textAlign: 'center' }}>
                            <Avatar
                                src="../../../images/home-dr.jpg"
                                alt="Doctor"
                                sx={{
                                    width: 430,
                                    height: 460,
                                    mx: 'auto',
                                    borderRadius: 50,
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                    objectFit: 'cover'
                                }}
                            />
                            <Chip
                                icon={<TagFacesIcon color="primary" />}
                                label={
                                    <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                            Sign up now
                                        </Typography>
                                        <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                            for your regular check up!
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    position: 'absolute',
                                    top: 110,
                                    left: { xs: -50, md: -110 },
                                    bgcolor: 'white',
                                    borderRadius: 10,
                                    px: 1.5,
                                    py: 1,
                                    boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                    minWidth: 0,
                                    height: 'auto'
                                }}
                            />
                            <Chip
                                icon={<FavoriteIcon style={{ color: '#ea392b' }} />}
                                label={
                                    <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                            Dr. Andrew Eyeball
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    position: 'absolute',
                                    bottom: 20,
                                    right: { xs: -10, md: -30 },
                                    bgcolor: 'white',
                                    borderRadius: 10,
                                    px: 1.5,
                                    py: 1,
                                    boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                    minWidth: 0,
                                    height: 'auto'
                                }}
                            />
                        </Box>
                    </Box>
                    {/* Right: Booking Steps */}
                    <Box
                        sx={{
                            flex: 1.2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            justifyContent: 'center',
                            pl: { xs: 0, md: 8 },
                            pr: { xs: 0, md: 2 },
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="#225b63"
                            mb={3}
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Booking made easy
                        </Typography>
                        <Box sx={{ mb: 4 }}>
                            {[
                                'Find your specialist',
                                'Describe your problem',
                                'Set a meeting type',
                                'Book your time',
                            ].map((step) => (
                                <Box key={step} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                    <CheckIcon sx={{ color: '#b388d9', fontSize: 24, mr: 1 }} />
                                    <Typography sx={{ color: '#225b63', fontSize: 18 }}>
                                        {step}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#225b63',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: 17,
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#18474a' },
                                alignSelf: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            Book an appointment
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/* End Section 3 */}

            {/* Start Section 4 */}
            <Box
                sx={{
                    width: '100%',
                    background: '#eef6fa',
                    borderRadius: 6,
                    mt: { xs: 4, md: 8 },
                    mb: { xs: 4, md: 8 },
                    px: { xs: 1, sm: 2, md: 0 },
                    py: { xs: 4, md: 6 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: 1500,
                    mx: 'auto',
                }}
            >
                {/* Left: Text and Specialties */}
                <Box
                    sx={{
                        flex: 1.2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        justifyContent: 'center',
                        pl: { xs: 0, md: 8 },
                        pr: { xs: 0, md: 2 },
                        mb: { xs: 4, md: 0 },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="#225b63"
                        mb={3}
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                    >
                        We offer a wide range<br />of specialists for your health
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            gap: 2,
                            mb: 3,
                            width: { xs: '100%', sm: 400, md: 420 },
                        }}
                    >
                        {/* Dentistry */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#fff',
                                borderRadius: 3,
                                px: 3,
                                py: 2,
                                boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                                minWidth: 180,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: '#e7edfc',
                                    borderRadius: '50%',
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                }}
                            >
                                <img src="../../public/tooth.svg" alt="Dentistry" style={{ width: 24, height: 24}} />
                            </Box>
                            <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 18 }}>
                                Dentistry
                            </Typography>
                        </Box>
                        {/* General health */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#fff',
                                borderRadius: 3,
                                px: 3,
                                py: 2,
                                boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                                minWidth: 180,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: '#eafaf4',
                                    borderRadius: '50%',
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                }}
                            >
                                <img src="../../public/stethoscope.svg" alt="General health" style={{ width: 28, height: 28}} />
                            </Box>
                            <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 18 }}>
                                General health
                            </Typography>
                        </Box>
                        {/* Psychiatry */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#fff',
                                borderRadius: 3,
                                px: 3,
                                py: 2,
                                boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                                minWidth: 180,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: '#f4f0fa',
                                    borderRadius: '50%',
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                }}
                            >
                                <PsychologyIcon style={{color:'#b388d9', width:"30", height:"30", fontSize: 20}}/>
                            </Box>
                            <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 18 }}>
                                Psychiatry
                            </Typography>
                        </Box>
                        {/* Neurology */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#fff',
                                borderRadius: 3,
                                px: 3,
                                py: 2,
                                boxShadow: '0 2px 12px rgba(30,108,114,0.06)',
                                minWidth: 180,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: '#fcf7e7',
                                    borderRadius: '50%',
                                    width: 48,
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                }}
                            >
                                <img src="../../public/brain.svg" alt="Neurology" style={{ width: 28, height: 28}} />
                            </Box>
                            <Typography fontWeight="bold" color="#225b63" sx={{ fontSize: 18 }}>
                                Neurology
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="text"
                        sx={{
                            color: '#225b63',
                            fontWeight: 600,
                            fontSize: 16,
                            textTransform: 'none',
                            pl: 0,
                            '&:hover': { textDecoration: 'underline', bgcolor: 'transparent' },
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        
                        endIcon={
                            <EastIcon style={{ color: '#225b63', fontSize: 25 }} />
                        }
                    >
                        Show more
                    </Button>
                </Box>
                {/* Right: Doctor image and chips */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        width: '100%',
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: { xs: 4, md: 0 },
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ position: 'relative', textAlign: 'center' }}>
                            <Avatar
                                src="../../../images/image-asset.jpeg"
                                alt="Doctor"
                                sx={{
                                    width: 400,
                                    height: 470,
                                    mx: 'auto',
                                    borderRadius: 50,
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                    objectFit: 'cover'
                                }}
                            />
                            <Chip
                                icon={<StarIcon style={{ color: '#f9da56' }} />}
                                label={
                                    <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                            All Fields
                                        </Typography>
                                        <Typography variant="caption" color="#222" sx={{ fontSize: 13 }}>
                                            of specialization
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    position: 'absolute',
                                    top: 150,
                                    left: { xs: -30, md: -100 },
                                    bgcolor: 'white',
                                    borderRadius: 10,
                                    px: 1.5,
                                    py: 1,
                                    boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                    minWidth: 0,
                                    height: 'auto'
                                }}
                            />
                            <Chip
                                icon={<TagFacesIcon color='primary' />}
                                label={
                                    <Box sx={{ textAlign: 'left', lineHeight: 1 }}>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#222" sx={{ fontSize: 16 }}>
                                            8.8 / 10.0
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#6b7680', fontSize: 14 }}>
                                            Avg doctor rating
                                        </Typography>
                                    </Box>
                                }
                                sx={{
                                    position: 'absolute',
                                    bottom: 60,
                                    right: { xs: -10, md: -40 },
                                    bgcolor: 'white',
                                    borderRadius: 10,
                                    px: 1.5,
                                    py: 1,
                                    boxShadow: '0 2px 8px rgba(30,108,114,0.10)',
                                    minWidth: 0,
                                    height: 'auto'
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* End Section 4 */}

            {/* Footer */}
            <Footer />

        </Box>
    );
}
export default Home;