import { useQuery } from '@tanstack/react-query';
import { getTestimonials } from '../api/PatientTestimonialsApi';
import type { Testimonial } from '../types/testimonial';

export function useTestimonials() {
    return useQuery<Testimonial[]>({
        queryKey: ['testimonials'],
        queryFn: getTestimonials,
        staleTime: 1000 * 10 * 2,
    });
}