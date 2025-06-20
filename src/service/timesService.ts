// hooks/useTimeSlots.ts
import { useQuery } from '@tanstack/react-query';
import { generateTimeSlots } from '../api/timesApi';
import type { TimeSlot } from '../types/Book';

export const useTimeSlots = () => {
  return useQuery<TimeSlot[]>({
    queryKey: ['timeSlots'],
    queryFn: () => {
        return generateTimeSlots(15); 
    },
    staleTime: 1000 * 60 * 5, 
  });
}
