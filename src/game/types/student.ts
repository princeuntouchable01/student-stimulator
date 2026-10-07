export type Gender = "male" | "female";

export type EconomicBackground = "poor" | "middle" | "rich";

export type Student = {
  name: string;
  age: number;
  gender: Gender;
  country: string;
  currency: string;
  currencySymbol: string;
  background: EconomicBackground;
  money: number;
  energy: number;
  academics: number;
  social: number;
};
