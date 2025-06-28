import type { Testimonial } from '../types/testimonial';

// Test data for development
const patientTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Maria Gonzalez",
        condition: "Cardiac Surgery Patient",
        text: "The cardiac team at MedKit saved my life. Their expertise, compassion, and follow-up care exceeded all my expectations.",
        rating: 5,
        avatar: "MG"
    },
    {
        id: 2,
        name: "Robert Thompson",
        condition: "Orthopedic Patient",
        text: "After my knee replacement surgery, the rehabilitation team helped me get back to my active lifestyle faster than I imagined.",
        rating: 5,
        avatar: "RT"
    },
    {
        id: 3,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    },
    {
        id: 4,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    },
    {
        id: 5,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    },
    {
        id: 6,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    },
    {
        id: 7,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    },
    {
        id: 7,
        name: "Jennifer Lee",
        condition: "Pediatric Parent",
        text: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Truly exceptional care.",
        rating: 3,
        avatar: "JL"
    }
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return patientTestimonials;
};