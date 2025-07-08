import { Box, Card, Typography, Avatar, Skeleton } from '@mui/material';
import Star from '@mui/icons-material/Star';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTestimonials } from '../../service/testimonialService';

const queryClient = new QueryClient();

function PatientTestimonials() {
    const { data, isLoading, isError } = useTestimonials();

    if (isLoading) {
        return (
            <Box sx={{ py: 8, textAlign: 'center' }}>
                <Skeleton />
            </Box>
        );
    }

    if (isError || !data) {
        return (
            <Box sx={{ py: 8, textAlign: 'center', color: 'red' }}>
                Failed to load testimonials.
            </Box>
        );
    }

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 4, md: 12 } }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" fontWeight="bold" color="#1e6c72" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    What Our Patients Say
                </Typography>
                <Typography variant="h6" color="#6b7680" sx={{ maxWidth: 600, mx: 'auto' }}>
                    Real stories from real patients about their healthcare journey with us
                </Typography>
            </Box>
            <QueryClientProvider client={queryClient}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 4,
                        justifyContent: 'center',
                    }}
                >
                    {data.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            sx={{
                                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
                                minWidth: { xs: '100%', sm: 260, md: 300 },
                                maxWidth: 360,
                                m: 'auto',
                                mb: 4,
                                p: 4,
                                borderRadius: 4,
                                boxShadow: '0 8px 32px rgba(30,108,114,0.08)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 40px rgba(30,108,114,0.12)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', mb: 3 }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} sx={{ color: '#f9da56', fontSize: 20 }} />
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 3, color: '#6b7680' }}>
                                "{testimonial.text}"
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ bgcolor: '#1e6c72', color: 'white', fontWeight: 'bold', mr: 2 }}>
                                    {testimonial.avatar}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold" color="#1e6c72">
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" color="#6b7680">
                                        {testimonial.condition}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </QueryClientProvider>
        </Box>
    );
}


export default PatientTestimonials;