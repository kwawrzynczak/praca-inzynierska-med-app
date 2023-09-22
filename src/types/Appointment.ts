export interface Appointment {
  id: number;
  attributes: {
    title: string;
    doctor: string;
    active: boolean;
    notes?: string;
    datetime: Date;
    location: string;
    street: string;
    room?: string;
  };
}
