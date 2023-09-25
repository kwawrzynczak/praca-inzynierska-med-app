export interface Medication {
  id: number;
  attributes: {
    name: string;
    meal: Meal;
    time: string;
  };
}

export enum Meal {
  independently,
  before,
  after,
}
