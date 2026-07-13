export interface Store {
  id: string;
  name: string;
  color: string;
  logo: string;
  tier: "discount" | "mid" | "premium" | "warehouse" | "specialty";
  /** Base URL for the store's website */
  baseUrl: string;
  /** URL template for product search. Use {product} as placeholder for URL-encoded search term */
  searchUrl: string;
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
  "Dairy", "Bakery", "Meat", "Produce", "Pantry",
  "Beverages", "Breakfast", "Frozen Foods", "Snacks",
  "Household", "Personal Care",
] as const;

export type Category = (typeof categories)[number];

// ── STORES ──────────────────────────────────────────────────────────────────
// Organized by tier for realistic pricing patterns
export const stores: Store[] = [
  // Discount
  { id: "walmart", name: "Walmart", color: "#0071CE", logo: "W", tier: "discount", baseUrl: "https://www.walmart.com", searchUrl: "https://www.walmart.com/search?q={product}" },
  { id: "aldi", name: "Aldi", color: "#003E7E", logo: "A", tier: "discount", baseUrl: "https://www.aldi.us", searchUrl: "https://www.aldi.us/search/?q={product}" },
  { id: "lidl", name: "Lidl", color: "#0050AA", logo: "L", tier: "discount", baseUrl: "https://www.lidl.com", searchUrl: "https://www.lidl.com/search?q={product}" },
  { id: "winco", name: "WinCo", color: "#E31E24", logo: "W", tier: "discount", baseUrl: "https://www.wincofoods.com", searchUrl: "https://www.wincofoods.com/search?q={product}" },

  // Mid-range national
  { id: "kroger", name: "Kroger", color: "#004C3F", logo: "K", tier: "mid", baseUrl: "https://www.kroger.com", searchUrl: "https://www.kroger.com/search?query={product}" },
  { id: "albertsons", name: "Albertsons", color: "#D12125", logo: "A", tier: "mid", baseUrl: "https://www.albertsons.com", searchUrl: "https://www.albertsons.com/shop/search-results.html?q={product}" },
  { id: "safeway", name: "Safeway", color: "#C8102E", logo: "S", tier: "mid", baseUrl: "https://www.safeway.com", searchUrl: "https://www.safeway.com/shop/search-results.html?q={product}" },
  { id: "publix", name: "Publix", color: "#00843D", logo: "P", tier: "mid", baseUrl: "https://www.publix.com", searchUrl: "https://www.publix.com/search?q={product}" },
  { id: "target", name: "Target", color: "#CC0000", logo: "T", tier: "mid", baseUrl: "https://www.target.com", searchUrl: "https://www.target.com/s?searchTerm={product}" },

  // Regional
  { id: "heb", name: "H-E-B", color: "#DF0024", logo: "H", tier: "mid", baseUrl: "https://www.heb.com", searchUrl: "https://www.heb.com/search?q={product}" },
  { id: "wegmans", name: "Wegmans", color: "#003DA5", logo: "W", tier: "mid", baseUrl: "https://www.wegmans.com", searchUrl: "https://www.wegmans.com/search/?text={product}" },
  { id: "meijer", name: "Meijer", color: "#0072CE", logo: "M", tier: "mid", baseUrl: "https://www.meijer.com", searchUrl: "https://www.meijer.com/shopping/search.html?text={product}" },
  { id: "giant", name: "Giant", color: "#EA6A20", logo: "G", tier: "mid", baseUrl: "https://giantfood.com", searchUrl: "https://giantfood.com/shop/search-results.html?q={product}" },
  { id: "stopandshop", name: "Stop & Shop", color: "#E31E24", logo: "S", tier: "mid", baseUrl: "https://stopandshop.com", searchUrl: "https://stopandshop.com/shop/search-results.html?q={product}" },
  { id: "foodlion", name: "Food Lion", color: "#F7A81B", logo: "F", tier: "mid", baseUrl: "https://www.foodlion.com", searchUrl: "https://www.foodlion.com/search/?q={product}" },

  // Premium
  { id: "wholefoods", name: "Whole Foods", color: "#7B8D3A", logo: "WF", tier: "premium", baseUrl: "https://www.wholefoodsmarket.com", searchUrl: "https://www.wholefoodsmarket.com/search?text={product}" },
  { id: "traderjoes", name: "Trader Joe's", color: "#BB2913", logo: "TJ", tier: "specialty", baseUrl: "https://www.traderjoes.com", searchUrl: "https://www.traderjoes.com/home/search?q={product}" },
  { id: "sprouts", name: "Sprouts", color: "#6B8E23", logo: "S", tier: "specialty", baseUrl: "https://www.sprouts.com", searchUrl: "https://www.sprouts.com/search/?q={product}" },
  { id: "naturalgrocers", name: "Natural Grocers", color: "#3D6B35", logo: "NG", tier: "specialty", baseUrl: "https://www.naturalgrocers.com", searchUrl: "https://www.naturalgrocers.com/search?q={product}" },

  // Warehouse
  { id: "costco", name: "Costco", color: "#005DAA", logo: "C", tier: "warehouse", baseUrl: "https://www.costco.com", searchUrl: "https://www.costco.com/CatalogSearch?keyword={product}" },
  { id: "samsclub", name: "Sam's Club", color: "#007DB7", logo: "SC", tier: "warehouse", baseUrl: "https://www.samsclub.com", searchUrl: "https://www.samsclub.com/s/{product}" },
  { id: "bjs", name: "BJ's", color: "#E31837", logo: "BJ", tier: "warehouse", baseUrl: "https://www.bjs.com", searchUrl: "https://www.bjs.com/search?keyword={product}" },
];

// ── PRODUCTS ────────────────────────────────────────────────────────────────
export const products: Product[] = [
  // Dairy (5)
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

// ── PRICING ─────────────────────────────────────────────────────────────────
// Realistic price multipliers by tier:
// discount: 0.85-1.0x of base
// mid: 1.0-1.15x
// premium: 1.3-1.5x
// warehouse: 0.75-0.9x (bulk pricing)
// specialty: 1.1-1.3x

type PriceMap = Record<string, number>;

function buildPrices(storeId: string, map: PriceMap): Price[] {
  return Object.entries(map).map(([productId, price]) => ({
    storeId,
    productId,
    price,
  }));
}

// Base prices (mid-range reference)
const base: PriceMap = {
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

function applyFactor(base: PriceMap, factor: number): PriceMap {
  const out: PriceMap = {};
  for (const [k, v] of Object.entries(base)) {
    out[k] = Math.round(v * factor * 100) / 100;
  }
  return out;
}

// Walmart (discount, ~0.88x)
const walmartPrices = applyFactor(base, 0.88);
// Aldi (discount, ~0.85x)
const aldiPrices = applyFactor(base, 0.85);
// Lidl (discount, ~0.87x)
const lidlPrices = applyFactor(base, 0.87);
// WinCo (discount, ~0.82x)
const wincoPrices = applyFactor(base, 0.82);

// Kroger (mid, ~1.0x)
const krogerPrices = { ...base };
// Safeway (mid, ~1.05x)
const safewayPrices = applyFactor(base, 1.05);
// Albertsons (mid, ~1.03x)
const albertsonsPrices = applyFactor(base, 1.03);
// Publix (mid, ~1.08x)
const publixPrices = applyFactor(base, 1.08);
// Target (mid, ~0.95x)
const targetPrices = applyFactor(base, 0.95);

// H-E-B (mid, strong regional, ~0.92x)
const hebPrices = applyFactor(base, 0.92);
// Wegmans (mid, ~1.02x)
const wegmansPrices = applyFactor(base, 1.02);
// Meijer (midwest, ~0.97x)
const meijerPrices = applyFactor(base, 0.97);
// Giant (mid-atlantic, ~1.03x)
const giantPrices = applyFactor(base, 1.03);
// Stop & Shop (NE, ~1.06x)
const stopandshopPrices = applyFactor(base, 1.06);
// Food Lion (mid-atlantic, ~0.95x)
const foodlionPrices = applyFactor(base, 0.95);

// Whole Foods (premium, ~1.35x)
const wholefoodsPrices = applyFactor(base, 1.35);
// Trader Joe's (specialty, ~0.95x surprisingly)
const traderjoesPrices = applyFactor(base, 0.95);
// Sprouts (specialty, ~1.15x)
const sproutsPrices = applyFactor(base, 1.15);
// Natural Grocers (specialty, ~1.2x)
const naturalgrocersPrices = applyFactor(base, 1.2);

// Costco (warehouse, ~0.75x)
const costcoPrices = applyFactor(base, 0.75);
// Sam's Club (warehouse, ~0.78x)
const samsclubPrices = applyFactor(base, 0.78);
// BJ's (warehouse, ~0.8x)
const bjsPrices = applyFactor(base, 0.8);

export const prices: Price[] = [
  ...buildPrices("walmart", walmartPrices),
  ...buildPrices("aldi", aldiPrices),
  ...buildPrices("lidl", lidlPrices),
  ...buildPrices("winco", wincoPrices),
  ...buildPrices("kroger", krogerPrices),
  ...buildPrices("safeway", safewayPrices),
  ...buildPrices("albertsons", albertsonsPrices),
  ...buildPrices("publix", publixPrices),
  ...buildPrices("target", targetPrices),
  ...buildPrices("heb", hebPrices),
  ...buildPrices("wegmans", wegmansPrices),
  ...buildPrices("meijer", meijerPrices),
  ...buildPrices("giant", giantPrices),
  ...buildPrices("stopandshop", stopandshopPrices),
  ...buildPrices("foodlion", foodlionPrices),
  ...buildPrices("wholefoods", wholefoodsPrices),
  ...buildPrices("traderjoes", traderjoesPrices),
  ...buildPrices("sprouts", sproutsPrices),
  ...buildPrices("naturalgrocers", naturalgrocersPrices),
  ...buildPrices("costco", costcoPrices),
  ...buildPrices("samsclub", samsclubPrices),
  ...buildPrices("bjs", bjsPrices),
];

// ── HELPERS ─────────────────────────────────────────────────────────────────

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

/**
 * Generate a URL that opens the store's website with a search for the given product.
 * This is the best we can do without store-specific cart APIs — most grocers don't
 * support direct "add to cart" via URL parameters.
 */
export function getStoreProductUrl(store: Store, productName: string): string {
  const encoded = encodeURIComponent(productName);
  return store.searchUrl.replace("{product}", encoded);
}

/**
 * For a list of cart items, open the store's search page with the most
 * expensive item as the search query (or join multiple items).
 * Some stores support searching multiple terms.
 */
export function getStoreCartUrl(store: Store, items: { productName: string }[]): string {
  if (items.length === 0) return store.baseUrl;
  // Search for the first 3 most important items
  const searchTerms = items.slice(0, 3).map((i) => i.productName).join(" ");
  const encoded = encodeURIComponent(searchTerms);
  return store.searchUrl.replace("{product}", encoded);
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