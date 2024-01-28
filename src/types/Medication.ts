export interface Medication {
  id: number;
  attributes: {
    name: string;
    meal: string;
    time: string;
    dosage: string;
    days: string;
    since: Date;
  };
}
