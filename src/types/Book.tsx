export interface AppointmentTypeSelectorProps {
  value: string;
  onChange: (val: string) => void;
}

export interface TimePickerGridProps {
  value: string;
  onChange: (val: string) => void;
}

export interface TimeSlot {
  label: string;
  available: boolean;
}