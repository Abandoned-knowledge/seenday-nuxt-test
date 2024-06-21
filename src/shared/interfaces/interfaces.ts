export interface ITariff {
  isSelectPerYear: boolean;
  preferred: boolean;
  name: string;
  benefits: string[];
  pricePerMonth: {
    perMonth: number;
    perYear: {
      value: number;
      saving: number;
    };
  };
}
