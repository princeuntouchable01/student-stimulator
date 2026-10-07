import type {
  EconomicBackground,
  Gender,
  Student,
} from "../types/student";

const names = [
  "Alex",
  "Amara",
  "Daniel",
  "Sofia",
  "Jordan",
  "Maya",
  "David",
  "Zara",
  "Samuel",
  "Aisha",
  "Noah",
  "Chloe",
];

const countries = [
  { name: "Nigeria", currency: "NGN", symbol: "₦" },
  { name: "Ghana", currency: "GHS", symbol: "GH₵" },
  { name: "Kenya", currency: "KES", symbol: "KSh" },
  { name: "South Africa", currency: "ZAR", symbol: "R" },
  { name: "Uganda", currency: "UGX", symbol: "USh" },
  { name: "Rwanda", currency: "RWF", symbol: "FRw" },
  { name: "France", currency: "EUR", symbol: "€" },
  { name: "United Kingdom", currency: "GBP", symbol: "£" },
  { name: "United States", currency: "USD", symbol: "$" },
  { name: "Canada", currency: "CAD", symbol: "C$" },
];

const genders: Gender[] = ["male", "female"];

const backgrounds: EconomicBackground[] = [
  "poor",
  "middle",
  "rich",
];

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function generateStartingMoney(
  background: EconomicBackground,
): number {
  switch (background) {
    case "poor":
      return 100000;

    case "middle":
      return 500000;

    case "rich":
      return 1000000;
  }
}

export function generateStudent(): Student {
  const background = randomItem(backgrounds);
  const location = randomItem(countries);

  return {
    name: randomItem(names),
    age: 16,
    gender: randomItem(genders),
    country: location.name,
    currency: location.currency,
    currencySymbol: location.symbol,
    background,
    money: generateStartingMoney(background),
    energy: 100,
    academics: 50,
    social: 50,
  };
}
