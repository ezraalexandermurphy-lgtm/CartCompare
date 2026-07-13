export interface Store {
  id: string;
  name: string;
  color: string;
  logo: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  unit: string;
}

export interface Price {
  storeId: string;
  productId: string;
  price: number;
}

export const categories = [
  "Dairy",
  "Bakery",
  "Meat",
  "Produce",
  "Pantry",
  "Beverages",
  "Breakfast",
  "Frozen Foods",
  "Snacks",
  "Household",
  "Personal Care",
] as const;

export type Category = (typeof categories)[number];

export const stores: Store[] = [
  { id: "walmart", name: "Walmart", color: "#0071CE", logo: "W" },
  { id: "kroger", name: "Kroger", color: "#004C3F", logo: "K" },
  { id: "albertsons", name: "Albertsons", color: "#D12125", logo: "A" },
  { id: "target", name: "Target", color: "#CC0000", logo: "T" },
  { id: "publix", name: "Publix", color: "#00843D", logo: "P" },
  { id: "costco", name: "Costco", color: "#005DAA", logo: "C" },
  { id: "wholefoods", name: "Whole Foods", color: "#7B8D3A", logo: "WF" },
  { id: "traderjoes", name: "Trader Joe's", color: "#BB2913", logo: "TJ" },
];

export const products: Product[] = [
  // Dairy (4)
  { id: "milk", name: "Milk (1 gal)", category: "Dairy", unit: "gal" },
  { id: "eggs", name: "Eggs (dozen)", category: "Dairy", unit: "dozen" },
  { id: "cheese", name: "Cheddar Cheese (8 oz)", category: "Dairy", unit: "block" },
  { id: "butter", name: "Butter (1 lb)", category: "Dairy", unit: "block" },
  { id: "yogurt", name: "Greek Yogurt (32 oz)", category: "Dairy", unit: "tub" },

  // Bakery (3)
  { id: "bread", name: "White Bread (20 oz)", category: "Bakery", unit: "loaf" },
  { id: "bagels", name: "Bagels (6 ct)", category: "Bakery", unit: "pack" },

  // Meat (3)
  { id: "chicken", name: "Chicken Breast (1 lb)", category: "Meat", unit: "lb" },
  { id: "ground_beef", name: "Ground Beef (1 lb)", category: "Meat", unit: "lb" },

  // Produce (6)
  { id: "bananas", name: "Bananas (1 lb)", category: "Produce", unit: "lb" },
  { id: "apples", name: "Apples (1 lb)", category: "Produce", unit: "lb" },
  { id: "potatoes", name: "Potatoes (5 lb)", category: "Produce", unit: "bag" },
  { id: "strawberries", name: "Strawberries (1 lb)", category: "Produce", unit: "lb" },
  { id: "avocados", name: "Avocados (3 ct)", category: "Produce", unit: "pack" },
  { id: "onions", name: "Yellow Onions (3 lb)", category: "Produce", unit: "bag" },

  // Pantry (9)
  { id: "rice", name: "White Rice (2 lb)", category: "Pantry", unit: "bag" },
  { id: "pasta", name: "Spaghetti (16 oz)", category: "Pantry", unit: "box" },
  { id: "tomato_sauce", name: "Tomato Sauce (24 oz)", category: "Pantry", unit: "jar" },
  { id: "olive_oil", name: "Olive Oil (17 oz)", category: "Pantry", unit: "bottle" },
  { id: "canned_tuna", name: "Canned Tuna (5 oz)", category: "Pantry", unit: "can" },
  { id: "sugar", name: "Granulated Sugar (4 lb)", category: "Pantry", unit: "bag" },
  { id: "salt", name: "Table Salt (26 oz)", category: "Pantry", unit: "container" },
  { id: "peanut_butter", name: "Peanut Butter (16 oz)", category: "Pantry", unit: "jar" },

  // Breakfast (2)
  { id: "cereal", name: "Cereal (12 oz)", category: "Breakfast", unit: "box" },
  { id: "pancake_mix", name: "Pancake Mix (32 oz)", category: "Breakfast", unit: "box" },

  // Beverages (4)
  { id: "orange_juice", name: "Orange Juice (64 oz)", category: "Beverages", unit: "bottle" },
  { id: "coffee", name: "Ground Coffee (12 oz)", category: "Beverages", unit: "bag" },
  { id: "soda", name: "Cola (12 pk cans)", category: "Beverages", unit: "pack" },
  { id: "water", name: "Spring Water (24 pk)", category: "Beverages", unit: "pack" },

  // Frozen Foods (4)
  { id: "frozen_pizza", name: "Frozen Pizza", category: "Frozen Foods", unit: "each" },
  { id: "ice_cream", name: "Vanilla Ice Cream (48 oz)", category: "Frozen Foods", unit: "tub" },
  { id: "frozen_veggies", name: "Mixed Frozen Vegetables (16 oz)", category: "Frozen Foods", unit: "bag" },
  { id: "chicken_nuggets", name: "Chicken Nuggets (32 oz)", category: "Frozen Foods", unit: "bag" },

  // Snacks (4)
  { id: "potato_chips", name: "Potato Chips (8 oz)", category: "Snacks", unit: "bag" },
  { id: "granola_bars", name: "Granola Bars (12 ct)", category: "Snacks", unit: "box" },
  { id: "mixed_nuts", name: "Mixed Nuts (12 oz)", category: "Snacks", unit: "jar" },
  { id: "chocolate", name: "Milk Chocolate Bar (3.5 oz)", category: "Snacks", unit: "bar" },

  // Household (4)
  { id: "paper_towels", name: "Paper Towels (6 rolls)", category: "Household", unit: "pack" },
  { id: "toilet_paper", name: "Toilet Paper (12 rolls)", category: "Household", unit: "pack" },
  { id: "dish_soap", name: "Dish Soap (24 oz)", category: "Household", unit: "bottle" },
  { id: "laundry_detergent", name: "Laundry Detergent (50 oz)", category: "Household", unit: "bottle" },

  // Personal Care (3)
  { id: "shampoo", name: "Shampoo (13.5 oz)", category: "Personal Care", unit: "bottle" },
  { id: "toothpaste", name: "Toothpaste (5.3 oz)", category: "Personal Care", unit: "tube" },
  { id: "hand_soap", name: "Hand Soap (10 oz)", category: "Personal Care", unit: "bottle" },
];

// ---- PRICES ----
// Helper to avoid repetition

type PriceMap = Record<string, number>;

function buildPrices(storeId: string, map: PriceMap): Price[] {
  return Object.entries(map).map(([productId, price]) => ({
    storeId,
    productId,
    price,
  }));
}

// All products grouped by category for readability
const walmartPrices: PriceMap = {
  milk: 3.28, eggs: 2.52, cheese: 2.48, butter: 3.48, yogurt: 4.78,
  bread: 1.98, bagels: 3.48,
  chicken: 3.97, ground_beef: 5.48,
  bananas: 0.58, apples: 1.28, potatoes: 3.97, strawberries: 2.98, avocados: 3.47, onions: 2.48,
  rice: 1.98, pasta: 0.98, tomato_sauce: 1.74, olive_oil: 5.98, canned_tuna: 1.12, sugar: 2.48, salt: 1.28, peanut_butter: 2.98,
  cereal: 2.98, pancake_mix: 3.48,
  orange_juice: 3.24, coffee: 5.98, soda: 5.98, water: 3.98,
  frozen_pizza: 3.48, ice_cream: 4.48, frozen_veggies: 1.48, chicken_nuggets: 5.97,
  potato_chips: 3.48, granola_bars: 3.98, mixed_nuts: 5.98, chocolate: 1.98,
  paper_towels: 6.48, toilet_paper: 8.97, dish_soap: 2.98, laundry_detergent: 7.97,
  shampoo: 3.97, toothpaste: 2.48, hand_soap: 2.48,
};

const krogerPrices: PriceMap = {
  milk: 3.49, eggs: 2.79, cheese: 2.79, butter: 3.79, yogurt: 5.49,
  bread: 2.29, bagels: 3.99,
  chicken: 4.29, ground_beef: 5.99,
  bananas: 0.69, apples: 1.49, potatoes: 4.49, strawberries: 3.49, avocados: 3.99, onions: 2.99,
  rice: 2.19, pasta: 1.29, tomato_sauce: 1.99, olive_oil: 6.49, canned_tuna: 1.49, sugar: 2.79, salt: 1.49, peanut_butter: 3.29,
  cereal: 3.29, pancake_mix: 3.99,
  orange_juice: 3.49, coffee: 6.49, soda: 6.49, water: 4.49,
  frozen_pizza: 3.99, ice_cream: 4.99, frozen_veggies: 1.79, chicken_nuggets: 6.49,
  potato_chips: 3.99, granola_bars: 4.49, mixed_nuts: 6.49, chocolate: 2.29,
  paper_towels: 7.49, toilet_paper: 9.99, dish_soap: 3.29, laundry_detergent: 8.49,
  shampoo: 4.49, toothpaste: 2.99, hand_soap: 2.99,
};

const albertsonsPrices: PriceMap = {
  milk: 3.59, eggs: 2.99, cheese: 2.99, butter: 3.99, yogurt: 5.79,
  bread: 2.49, bagels: 4.29,
  chicken: 4.49, ground_beef: 6.29,
  bananas: 0.79, apples: 1.69, potatoes: 4.99, strawberries: 3.79, avocados: 4.29, onions: 3.29,
  rice: 2.49, pasta: 1.49, tomato_sauce: 2.29, olive_oil: 6.99, canned_tuna: 1.69, sugar: 2.99, salt: 1.69, peanut_butter: 3.49,
  cereal: 3.49, pancake_mix: 4.29,
  orange_juice: 3.79, coffee: 6.99, soda: 6.99, water: 4.79,
  frozen_pizza: 4.29, ice_cream: 5.29, frozen_veggies: 1.99, chicken_nuggets: 6.99,
  potato_chips: 4.29, granola_bars: 4.79, mixed_nuts: 6.99, chocolate: 2.49,
  paper_towels: 7.99, toilet_paper: 10.49, dish_soap: 3.49, laundry_detergent: 8.99,
  shampoo: 4.79, toothpaste: 3.29, hand_soap: 3.29,
};

const targetPrices: PriceMap = {
  milk: 3.39, eggs: 2.69, cheese: 2.69, butter: 3.69, yogurt: 5.29,
  bread: 1.99, bagels: 3.79,
  chicken: 4.19, ground_beef: 5.79,
  bananas: 0.65, apples: 1.39, potatoes: 4.29, strawberries: 3.29, avocados: 3.79, onions: 2.79,
  rice: 2.09, pasta: 1.09, tomato_sauce: 1.89, olive_oil: 6.29, canned_tuna: 1.29, sugar: 2.69, salt: 1.39, peanut_butter: 3.19,
  cereal: 3.09, pancake_mix: 3.79,
  orange_juice: 3.29, coffee: 6.29, soda: 6.29, water: 4.29,
  frozen_pizza: 3.79, ice_cream: 4.79, frozen_veggies: 1.69, chicken_nuggets: 6.29,
  potato_chips: 3.79, granola_bars: 4.29, mixed_nuts: 6.29, chocolate: 2.19,
  paper_towels: 6.99, toilet_paper: 9.49, dish_soap: 3.19, laundry_detergent: 8.29,
  shampoo: 4.29, toothpaste: 2.79, hand_soap: 2.79,
};

const publixPrices: PriceMap = {
  milk: 3.79, eggs: 3.29, cheese: 3.29, butter: 4.29, yogurt: 5.99,
  bread: 2.69, bagels: 4.49,
  chicken: 4.79, ground_beef: 6.79,
  bananas: 0.89, apples: 1.89, potatoes: 5.49, strawberries: 3.99, avocados: 4.49, onions: 3.49,
  rice: 2.69, pasta: 1.69, tomato_sauce: 2.49, olive_oil: 7.49, canned_tuna: 1.89, sugar: 3.29, salt: 1.89, peanut_butter: 3.79,
  cereal: 3.79, pancake_mix: 4.49,
  orange_juice: 3.99, coffee: 7.49, soda: 7.49, water: 4.99,
  frozen_pizza: 4.49, ice_cream: 5.49, frozen_veggies: 2.29, chicken_nuggets: 7.49,
  potato_chips: 4.49, granola_bars: 4.99, mixed_nuts: 7.49, chocolate: 2.69,
  paper_towels: 8.49, toilet_paper: 10.99, dish_soap: 3.79, laundry_detergent: 9.49,
  shampoo: 4.99, toothpaste: 3.49, hand_soap: 3.49,
};

const costcoPrices: PriceMap = {
  milk: 3.09, eggs: 2.29, cheese: 2.19, butter: 3.19, yogurt: 4.29,
  bread: 1.79, bagels: 3.19,
  chicken: 3.49, ground_beef: 4.99,
  bananas: 0.55, apples: 1.19, potatoes: 3.49, strawberries: 2.79, avocados: 3.29, onions: 2.29,
  rice: 1.69, pasta: 0.89, tomato_sauce: 1.59, olive_oil: 4.99, canned_tuna: 0.99, sugar: 2.19, salt: 1.09, peanut_butter: 2.79,
  cereal: 2.69, pancake_mix: 3.19,
  orange_juice: 2.99, coffee: 5.49, soda: 5.49, water: 3.49,
  frozen_pizza: 2.99, ice_cream: 3.99, frozen_veggies: 1.29, chicken_nuggets: 5.49,
  potato_chips: 3.19, granola_bars: 3.69, mixed_nuts: 5.49, chocolate: 1.79,
  paper_towels: 5.99, toilet_paper: 7.99, dish_soap: 2.79, laundry_detergent: 6.99,
  shampoo: 3.49, toothpaste: 2.19, hand_soap: 2.29,
};

const wholefoodsPrices: PriceMap = {
  milk: 4.29, eggs: 3.99, cheese: 3.99, butter: 4.99, yogurt: 6.49,
  bread: 3.49, bagels: 4.99,
  chicken: 5.49, ground_beef: 7.49,
  bananas: 0.99, apples: 2.49, potatoes: 5.99, strawberries: 4.99, avocados: 4.99, onions: 3.99,
  rice: 3.49, pasta: 2.49, tomato_sauce: 3.49, olive_oil: 8.99, canned_tuna: 2.49, sugar: 3.99, salt: 2.49, peanut_butter: 4.99,
  cereal: 4.49, pancake_mix: 5.49,
  orange_juice: 4.99, coffee: 9.99, soda: 8.49, water: 5.99,
  frozen_pizza: 5.49, ice_cream: 6.49, frozen_veggies: 2.99, chicken_nuggets: 8.99,
  potato_chips: 5.49, granola_bars: 5.99, mixed_nuts: 8.99, chocolate: 3.49,
  paper_towels: 9.99, toilet_paper: 12.99, dish_soap: 4.99, laundry_detergent: 11.99,
  shampoo: 6.99, toothpaste: 4.99, hand_soap: 4.49,
};

const traderjoesPrices: PriceMap = {
  milk: 3.49, eggs: 2.99, cheese: 2.79, butter: 3.69, yogurt: 4.99,
  bread: 2.29, bagels: 3.49,
  chicken: 4.49, ground_beef: 5.99,
  bananas: 0.69, apples: 1.49, potatoes: 3.99, strawberries: 3.29, avocados: 3.69, onions: 2.79,
  rice: 2.29, pasta: 1.29, tomato_sauce: 1.99, olive_oil: 5.99, canned_tuna: 1.49, sugar: 2.49, salt: 1.49, peanut_butter: 2.99,
  cereal: 2.99, pancake_mix: 3.49,
  orange_juice: 3.29, coffee: 5.99, soda: 5.99, water: 3.99,
  frozen_pizza: 3.49, ice_cream: 4.29, frozen_veggies: 1.69, chicken_nuggets: 5.99,
  potato_chips: 3.49, granola_bars: 3.99, mixed_nuts: 5.99, chocolate: 1.99,
  paper_towels: 6.99, toilet_paper: 8.99, dish_soap: 2.99, laundry_detergent: 7.99,
  shampoo: 3.99, toothpaste: 2.99, hand_soap: 2.99,
};

export const prices: Price[] = [
  ...buildPrices("walmart", walmartPrices),
  ...buildPrices("kroger", krogerPrices),
  ...buildPrices("albertsons", albertsonsPrices),
  ...buildPrices("target", targetPrices),
  ...buildPrices("publix", publixPrices),
  ...buildPrices("costco", costcoPrices),
  ...buildPrices("wholefoods", wholefoodsPrices),
  ...buildPrices("traderjoes", traderjoesPrices),
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getStore(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}

export function getPrice(storeId: string, productId: string): number | undefined {
  return prices.find((p) => p.storeId === storeId && p.productId === productId)?.price;
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export interface CartItem {
  productId: string;
  productName: string;
}

export interface StoreTotal {
  store: Store;
  items: { product: Product; price: number }[];
  total: number;
  itemCount: number;
}

export function calculateStoreTotals(cartItems: CartItem[]): StoreTotal[] {
  return stores.map((store) => {
    const items = cartItems
      .map((ci) => {
        const product = getProduct(ci.productId);
        const price = getPrice(store.id, ci.productId);
        if (!product || price === undefined) return null;
        return { product, price };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const total = items.reduce((sum, item) => sum + item.price, 0);
    return { store, items, total, itemCount: items.length };
  });
}

// Pre-built example carts by category
export const exampleCarts: Record<string, string> = {
  "Dairy": "milk,eggs,cheese,butter,yogurt",
  "Bakery": "bread,bagels",
  "Meat": "chicken,ground_beef",
  "Produce": "bananas,apples,potatoes,strawberries,avocados",
  "Pantry": "rice,pasta,tomato_sauce,olive_oil,canned_tuna,sugar,salt,peanut_butter",
  "Breakfast": "cereal,pancake_mix",
  "Beverages": "orange_juice,coffee,soda,water",
  "Frozen Foods": "frozen_pizza,ice_cream,frozen_veggies,chicken_nuggets",
  "Snacks": "potato_chips,granola_bars,mixed_nuts,chocolate",
  "Household": "paper_towels,toilet_paper,dish_soap,laundry_detergent",
  "Personal Care": "shampoo,toothpaste,hand_soap",
};