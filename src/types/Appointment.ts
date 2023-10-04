export interface Appointment {
  id: number;
  attributes: {
    title: string;
    doctor: string;
    notes?: string;
    datetime: Date;
    location: string;
    street: string;
    room?: string;
  };
}
