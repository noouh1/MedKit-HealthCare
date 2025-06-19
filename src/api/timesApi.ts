import type { TimeSlot } from '../types/Book';

export const getRandomTime = (): string => {
  const hour = Math.floor(Math.random() * 10) + 7; 
  const minutes = Math.random() < 0.5 ? '00' : '30';
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minutes} ${period}`;
};

export const generateTimeSlots = (count: number = 15): TimeSlot[] => {
  const set = new Set<string>();
  while (set.size < count) {
    set.add(getRandomTime());
  }
  return Array.from(set).map((label) => ({
    label,
    available: Math.random() > 0.2,
  }));
};
