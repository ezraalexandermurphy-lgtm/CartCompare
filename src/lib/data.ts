// ── BRANDS ──────────────────────────────────────────────────────────────────
export interface Brand {
  id: string;
  name: string;
  tier: "premium" | "mid" | "budget" | "store";
}

export const brands: Brand[] = [
  // Store brands (every store has their own)
  { id: "store", name: "Store Brand", tier: "store" },
  { id: "great_value", name: "Great Value", tier: "budget" },
  { id: "kirkland", name: "Kirkland Signature", tier: "mid" },
  { id: "market_pantry", name: "Market Pantry", tier: "budget" },
  { id: "good_harvest", name: "Good & Gather", tier: "mid" },

  // Dairy brands
  { id: "horizon", name: "Horizon Organic", tier: "premium" },
  { id: "fairlife", name: "Fairlife", tier: "premium" },
  { id: "organic_valley", name: "Organic Valley", tier: "premium" },
  { id: "dannon", name: "Dannon", tier: "mid" },
  { id: "chobani", name: "Chobani", tier: "mid" },
  { id: "fage", name: "Fage", tier: "premium" },
  { id: "tillamook", name: "Tillamook", tier: "premium" },
  { id: "cabot", name: "Cabot", tier: "mid" },
  { id: "kerrygold", name: "Kerrygold", tier: "premium" },
  { id: "landolakes", name: "Land O'Lakes", tier: "mid" },

  // Bakery brands
  { id: "wonder", name: "Wonder Bread", tier: "mid" },
  { id: "saralee", name: "Sara Lee", tier: "mid" },
  { id: "natures_own", name: "Nature's Own", tier: "premium" },
  { id: "dave_killer", name: "Dave's Killer Bread", tier: "premium" },
  { id: "thomas", name: "Thomas'", tier: "mid" },

  // Meat brands
  { id: "tyson", name: "Tyson", tier: "mid" },
  { id: "perdue", name: "Perdue", tier: "mid" },
  { id: "foster_farms", name: "Foster Farms", tier: "mid" },

  // Produce (mostly generic, some organic)
  { id: "dole", name: "Dole", tier: "mid" },
  { id: "del_monte", name: "Del Monte", tier: "mid" },

  // Pantry brands
  { id: "minute", name: "Minute Rice", tier: "mid" },
  { id: "barrilla", name: "Barilla", tier: "mid" },
  { id: "muellers", name: "Mueller's", tier: "budget" },
  { id: "hunts", name: "Hunt's", tier: "budget" },
  { id: "ragu", name: "Ragu", tier: "mid" },
  { id: "prego", name: "Prego", tier: "mid" },
  { id: "bertolli", name: "Bertolli", tier: "premium" },
  { id: "bumble_bee", name: "Bumble Bee", tier: "mid" },
  { id: "starkist", name: "StarKist", tier: "mid" },
  { id: "jif", name: "Jif", tier: "mid" },
  { id: "skippy", name: "Skippy", tier: "mid" },
  { id: "domino", name: "Domino", tier: "mid" },
  { id: "morton", name: "Morton", tier: "mid" },
  { id: "kellogg", name: "Kellogg's", tier: "mid" },
  { id: "general_mills", name: "General Mills", tier: "mid" },
  { id: "post", name: "Post", tier: "mid" },
  { id: "bisquick", name: "Bisquick", tier: "mid" },
  { id: "aunt_jemima", name: "Aunt Jemima", tier: "mid" },
  { id: "kodiak", name: "Kodiak Cakes", tier: "premium" },

  // Beverage brands
  { id: "tropicana", name: "Tropicana", tier: "mid" },
  { id: "simply", name: "Simply Orange", tier: "premium" },
  { id: "folgers", name: "Folgers", tier: "budget" },
  { id: "starbucks", name: "Starbucks", tier: "premium" },
  { id: "coke", name: "Coca-Cola", tier: "mid" },
  { id: "pepsi", name: "Pepsi", tier: "mid" },
  { id: "nestle", name: "Nestlé", tier: "mid" },

  // Frozen brands
  { id: "digiorno", name: "DiGiorno", tier: "mid" },
  { id: "tombstone", name: "Tombstone", tier: "budget" },
  { id: "red_baron", name: "Red Baron", tier: "mid" },
  { id: "breyers", name: "Breyers", tier: "mid" },
  { id: "haagen_dazs", name: "Häagen-Dazs", tier: "premium" },
  { id: "edys", name: "Edy's", tier: "mid" },
  { id: "birds_eye", name: "Bird's Eye", tier: "mid" },
  { id: "green_giant", name: "Green Giant", tier: "mid" },

  // Snack brands
  { id: "lays", name: "Lay's", tier: "mid" },
  { id: "ruffles", name: "Ruffles", tier: "mid" },
  { id: "quaker", name: "Quaker", tier: "mid" },
  { id: "nature_valley", name: "Nature Valley", tier: "mid" },
  { id: "kind", name: "Kind", tier: "premium" },
  { id: "planter", name: "Planters", tier: "mid" },
  { id: "hershey", name: "Hershey's", tier: "mid" },

  // Household brands
  { id: "bounty", name: "Bounty", tier: "mid" },
  { id: "charmin", name: "Charmin", tier: "mid" },
  { id: "dawn", name: "Dawn", tier: "mid" },
  { id: "tide", name: "Tide", tier: "mid" },
  { id: "gain", name: "Gain", tier: "mid" },

  // Personal care brands
  { id: "pantene", name: "Pantene", tier: "mid" },
  { id: "head_shoulders", name: "Head & Shoulders", tier: "mid" },
  { id: "crest", name: "Crest", tier: "mid" },
  { id: "colgate", name: "Colgate", tier: "mid" },
  { id: "softsoap", name: "Softsoap", tier: "budget" },
];

// ── STORES ──────────────────────────────────────────────────────────────────
export interface Store {
  id: string;
  name: string;
  color: string;
  logo: string;
  tier: "discount" | "mid" | "premium" | "warehouse" | "specialty";
  baseUrl: string;
  searchUrl: string;
  // Which store brand this store uses
  storeBrandId: string;
}

export const stores: Store[] = [
  { id: "walmart", name: "Walmart", color: "#0071CE", logo: "W", tier: "discount", baseUrl: "https://www.walmart.com", searchUrl: "https://www.walmart.com/search?q={product}", storeBrandId: "great_value" },
  { id: "aldi", name: "Aldi", color: "#003E7E", logo: "A", tier: "discount", baseUrl: "https://www.aldi.us", searchUrl: "https://www.aldi.us/search/?q={product}", storeBrandId: "store" },
  { id: "kroger", name: "Kroger", color: "#004C3F", logo: "K", tier: "mid", baseUrl: "https://www.kroger.com", searchUrl: "https://www.kroger.com/search?query={product}", storeBrandId: "store" },
  { id: "albertsons", name: "Albertsons", color: "#D12125", logo: "A", tier: "mid", baseUrl: "https://www.albertsons.com", searchUrl: "https://www.albertsons.com/shop/search-results.html?q={product}", storeBrandId: "store" },
  { id: "safeway", name: "Safeway", color: "#C8102E", logo: "S", tier: "mid", baseUrl: "https://www.safeway.com", searchUrl: "https://www.safeway.com/shop/search-results.html?q={product}", storeBrandId: "store" },
  { id: "publix", name: "Publix", color: "#00843D", logo: "P", tier: "mid", baseUrl: "https://www.publix.com", searchUrl: "https://www.publix.com/search?q={product}", storeBrandId: "store" },
  { id: "target", name: "Target", color: "#CC0000", logo: "T", tier: "mid", baseUrl: "https://www.target.com", searchUrl: "https://www.target.com/s?searchTerm={product}", storeBrandId: "good_harvest" },
  { id: "heb", name: "H-E-B", color: "#DF0024", logo: "H", tier: "mid", baseUrl: "https://www.heb.com", searchUrl: "https://www.heb.com/search?q={product}", storeBrandId: "store" },
  { id: "wegmans", name: "Wegmans", color: "#003DA5", logo: "W", tier: "mid", baseUrl: "https://www.wegmans.com", searchUrl: "https://www.wegmans.com/search/?text={product}", storeBrandId: "store" },
  { id: "wholefoods", name: "Whole Foods", color: "#7B8D3A", logo: "WF", tier: "premium", baseUrl: "https://www.wholefoodsmarket.com", searchUrl: "https://www.wholefoodsmarket.com/search?text={product}", storeBrandId: "store" },
  { id: "traderjoes", name: "Trader Joe's", color: "#BB2913", logo: "TJ", tier: "specialty", baseUrl: "https://www.traderjoes.com", searchUrl: "https://www.traderjoes.com/home/search?q={product}", storeBrandId: "store" },
  { id: "costco", name: "Costco", color: "#005DAA", logo: "C", tier: "warehouse", baseUrl: "https://www.costco.com", searchUrl: "https://www.costco.com/CatalogSearch?keyword={product}", storeBrandId: "kirkland" },
];

// ── CATEGORIES ──────────────────────────────────────────────────────────────
export const categories = [
  "Dairy", "Bakery", "Meat", "Produce", "Pantry",
  "Beverages", "Breakfast", "Frozen Foods", "Snacks",
  "Household", "Personal Care",
] as const;
export type Category = (typeof categories)[number];

// ── BASE PRODUCTS (generic descriptions) ─────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  category: string;
  unit: string;
}

export const products: Product[] = [
  { id: "milk", name: "Milk (1 gal)", category: "Dairy", unit: "gal" },
  { id: "eggs", name: "Eggs (dozen)", category: "Dairy", unit: "dozen" },
  { id: "cheese", name: "Cheddar Cheese (8 oz)", category: "Dairy", unit: "block" },
  { id: "butter", name: "Butter (1 lb)", category: "Dairy", unit: "block" },
  { id: "yogurt", name: "Greek Yogurt (32 oz)", category: "Dairy", unit: "tub" },
  { id: "bread", name: "White Bread (20 oz)", category: "Bakery", unit: "loaf" },
  { id: "bagels", name: "Bagels (6 ct)", category: "Bakery", unit: "pack" },
  { id: "chicken", name: "Chicken Breast (1 lb)", category: "Meat", unit: "lb" },
  { id: "ground_beef", name: "Ground Beef (1 lb)", category: "Meat", unit: "lb" },
  { id: "bananas", name: "Bananas (1 lb)", category: "Produce", unit: "lb" },
  { id: "apples", name: "Apples (1 lb)", category: "Produce", unit: "lb" },
  { id: "potatoes", name: "Potatoes (5 lb)", category: "Produce", unit: "bag" },
  { id: "strawberries", name: "Strawberries (1 lb)", category: "Produce", unit: "lb" },
  { id: "avocados", name: "Avocados (3 ct)", category: "Produce", unit: "pack" },
  { id: "rice", name: "White Rice (2 lb)", category: "Pantry", unit: "bag" },
  { id: "pasta", name: "Spaghetti (16 oz)", category: "Pantry", unit: "box" },
  { id: "tomato_sauce", name: "Tomato Sauce (24 oz)", category: "Pantry", unit: "jar" },
  { id: "olive_oil", name: "Olive Oil (17 oz)", category: "Pantry", unit: "bottle" },
  { id: "canned_tuna", name: "Canned Tuna (5 oz)", category: "Pantry", unit: "can" },
  { id: "sugar", name: "Granulated Sugar (4 lb)", category: "Pantry", unit: "bag" },
  { id: "peanut_butter", name: "Peanut Butter (16 oz)", category: "Pantry", unit: "jar" },
  { id: "cereal", name: "Cereal (12 oz)", category: "Breakfast", unit: "box" },
  { id: "pancake_mix", name: "Pancake Mix (32 oz)", category: "Breakfast", unit: "box" },
  { id: "orange_juice", name: "Orange Juice (64 oz)", category: "Beverages", unit: "bottle" },
  { id: "coffee", name: "Ground Coffee (12 oz)", category: "Beverages", unit: "bag" },
  { id: "soda", name: "Cola (12 pk cans)", category: "Beverages", unit: "pack" },
  { id: "water", name: "Spring Water (24 pk)", category: "Beverages", unit: "pack" },
  { id: "frozen_pizza", name: "Frozen Pizza", category: "Frozen Foods", unit: "each" },
  { id: "ice_cream", name: "Vanilla Ice Cream (48 oz)", category: "Frozen Foods", unit: "tub" },
  { id: "frozen_veggies", name: "Mixed Frozen Vegetables (16 oz)", category: "Frozen Foods", unit: "bag" },
  { id: "potato_chips", name: "Potato Chips (8 oz)", category: "Snacks", unit: "bag" },
  { id: "granola_bars", name: "Granola Bars (12 ct)", category: "Snacks", unit: "box" },
  { id: "mixed_nuts", name: "Mixed Nuts (12 oz)", category: "Snacks", unit: "jar" },
  { id: "chocolate", name: "Milk Chocolate Bar (3.5 oz)", category: "Snacks", unit: "bar" },
  { id: "paper_towels", name: "Paper Towels (6 rolls)", category: "Household", unit: "pack" },
  { id: "toilet_paper", name: "Toilet Paper (12 rolls)", category: "Household", unit: "pack" },
  { id: "dish_soap", name: "Dish Soap (24 oz)", category: "Household", unit: "bottle" },
  { id: "laundry_detergent", name: "Laundry Detergent (50 oz)", category: "Household", unit: "bottle" },
  { id: "shampoo", name: "Shampoo (13.5 oz)", category: "Personal Care", unit: "bottle" },
  { id: "toothpaste", name: "Toothpaste (5.3 oz)", category: "Personal Care", unit: "tube" },
  { id: "hand_soap", name: "Hand Soap (10 oz)", category: "Personal Care", unit: "bottle" },
];

// ── BRANDED PRODUCTS (the actual purchasable items) ──────────────────────────
export interface BrandedProduct {
  id: string;       // e.g. "wonder_bread" or "great_value_bread"
  productId: string; // references products[].id
  brandId: string;   // references brands[].id
  name: string;      // display name e.g. "Wonder White Bread (20 oz)"
}

// Which brands to offer per product
const productBrands: Record<string, { brandId: string; name: string }[]> = {
  milk: [
    { brandId: "great_value", name: "Great Value Milk (1 gal)" },
    { brandId: "horizon", name: "Horizon Organic Milk (1 gal)" },
    { brandId: "fairlife", name: "Fairlife Milk (1 gal)" },
    { brandId: "organic_valley", name: "Organic Valley Milk (1 gal)" },
  ],
  eggs: [
    { brandId: "great_value", name: "Great Value Eggs (dozen)" },
    { brandId: "organic_valley", name: "Organic Valley Eggs (dozen)" },
    { brandId: "store", name: "Store Brand Eggs (dozen)" },
  ],
  cheese: [
    { brandId: "tillamook", name: "Tillamook Cheddar (8 oz)" },
    { brandId: "cabot", name: "Cabot Cheddar (8 oz)" },
    { brandId: "store", name: "Store Brand Cheddar (8 oz)" },
  ],
  butter: [
    { brandId: "kerrygold", name: "Kerrygold Butter (1 lb)" },
    { brandId: "landolakes", name: "Land O'Lakes Butter (1 lb)" },
    { brandId: "store", name: "Store Brand Butter (1 lb)" },
  ],
  yogurt: [
    { brandId: "chobani", name: "Chobani Greek Yogurt (32 oz)" },
    { brandId: "fage", name: "Fage Greek Yogurt (32 oz)" },
    { brandId: "dannon", name: "Dannon Greek Yogurt (32 oz)" },
    { brandId: "store", name: "Store Brand Greek Yogurt (32 oz)" },
  ],
  bread: [
    { brandId: "wonder", name: "Wonder White Bread (20 oz)" },
    { brandId: "saralee", name: "Sara Lee White Bread (20 oz)" },
    { brandId: "natures_own", name: "Nature's Own White Bread (20 oz)" },
    { brandId: "dave_killer", name: "Dave's Killer Bread (20 oz)" },
    { brandId: "store", name: "Store Brand White Bread (20 oz)" },
  ],
  bagels: [
    { brandId: "thomas", name: "Thomas' Bagels (6 ct)" },
    { brandId: "store", name: "Store Brand Bagels (6 ct)" },
  ],
  chicken: [
    { brandId: "tyson", name: "Tyson Chicken Breast (1 lb)" },
    { brandId: "perdue", name: "Perdue Chicken Breast (1 lb)" },
    { brandId: "store", name: "Store Brand Chicken Breast (1 lb)" },
  ],
  ground_beef: [
    { brandId: "store", name: "Store Brand Ground Beef (1 lb)" },
  ],
  rice: [
    { brandId: "minute", name: "Minute Rice (2 lb)" },
    { brandId: "store", name: "Store Brand White Rice (2 lb)" },
  ],
  pasta: [
    { brandId: "barrilla", name: "Barilla Spaghetti (16 oz)" },
    { brandId: "muellers", name: "Mueller's Spaghetti (16 oz)" },
    { brandId: "store", name: "Store Brand Spaghetti (16 oz)" },
  ],
  tomato_sauce: [
    { brandId: "hunts", name: "Hunt's Tomato Sauce (24 oz)" },
    { brandId: "ragu", name: "Ragu Tomato Sauce (24 oz)" },
    { brandId: "prego", name: "Prego Tomato Sauce (24 oz)" },
    { brandId: "store", name: "Store Brand Tomato Sauce (24 oz)" },
  ],
  olive_oil: [
    { brandId: "bertolli", name: "Bertolli Olive Oil (17 oz)" },
    { brandId: "store", name: "Store Brand Olive Oil (17 oz)" },
  ],
  canned_tuna: [
    { brandId: "bumble_bee", name: "Bumble Bee Tuna (5 oz)" },
    { brandId: "starkist", name: "StarKist Tuna (5 oz)" },
    { brandId: "store", name: "Store Brand Tuna (5 oz)" },
  ],
  peanut_butter: [
    { brandId: "jif", name: "Jif Peanut Butter (16 oz)" },
    { brandId: "skippy", name: "Skippy Peanut Butter (16 oz)" },
    { brandId: "store", name: "Store Brand Peanut Butter (16 oz)" },
  ],
  cereal: [
    { brandId: "kellogg", name: "Kellogg's Cereal (12 oz)" },
    { brandId: "general_mills", name: "General Mills Cereal (12 oz)" },
    { brandId: "post", name: "Post Cereal (12 oz)" },
    { brandId: "store", name: "Store Brand Cereal (12 oz)" },
  ],
  pancake_mix: [
    { brandId: "bisquick", name: "Bisquick Pancake Mix (32 oz)" },
    { brandId: "kodiak", name: "Kodiak Cakes Pancake Mix (32 oz)" },
    { brandId: "store", name: "Store Brand Pancake Mix (32 oz)" },
  ],
  orange_juice: [
    { brandId: "tropicana", name: "Tropicana Orange Juice (64 oz)" },
    { brandId: "simply", name: "Simply Orange Juice (64 oz)" },
    { brandId: "store", name: "Store Brand Orange Juice (64 oz)" },
  ],
  coffee: [
    { brandId: "folgers", name: "Folgers Ground Coffee (12 oz)" },
    { brandId: "starbucks", name: "Starbucks Ground Coffee (12 oz)" },
    { brandId: "store", name: "Store Brand Ground Coffee (12 oz)" },
  ],
  soda: [
    { brandId: "coke", name: "Coca-Cola (12 pk cans)" },
    { brandId: "pepsi", name: "Pepsi (12 pk cans)" },
    { brandId: "store", name: "Store Brand Cola (12 pk cans)" },
  ],
  water: [
    { brandId: "nestle", name: "Nestlé Spring Water (24 pk)" },
    { brandId: "store", name: "Store Brand Spring Water (24 pk)" },
  ],
  frozen_pizza: [
    { brandId: "digiorno", name: "DiGiorno Frozen Pizza" },
    { brandId: "tombstone", name: "Tombstone Frozen Pizza" },
    { brandId: "red_baron", name: "Red Baron Frozen Pizza" },
    { brandId: "store", name: "Store Brand Frozen Pizza" },
  ],
  ice_cream: [
    { brandId: "breyers", name: "Breyers Vanilla Ice Cream (48 oz)" },
    { brandId: "haagen_dazs", name: "Häagen-Dazs Vanilla Ice Cream (14 oz)" },
    { brandId: "edys", name: "Edy's Vanilla Ice Cream (48 oz)" },
    { brandId: "store", name: "Store Brand Vanilla Ice Cream (48 oz)" },
  ],
  frozen_veggies: [
    { brandId: "birds_eye", name: "Bird's Eye Mixed Veggies (16 oz)" },
    { brandId: "green_giant", name: "Green Giant Mixed Veggies (16 oz)" },
    { brandId: "store", name: "Store Brand Mixed Veggies (16 oz)" },
  ],
  potato_chips: [
    { brandId: "lays", name: "Lay's Potato Chips (8 oz)" },
    { brandId: "ruffles", name: "Ruffles Potato Chips (8 oz)" },
    { brandId: "store", name: "Store Brand Potato Chips (8 oz)" },
  ],
  granola_bars: [
    { brandId: "quaker", name: "Quaker Granola Bars (12 ct)" },
    { brandId: "nature_valley", name: "Nature Valley Granola Bars (12 ct)" },
    { brandId: "kind", name: "Kind Granola Bars (12 ct)" },
    { brandId: "store", name: "Store Brand Granola Bars (12 ct)" },
  ],
  chocolate: [
    { brandId: "hershey", name: "Hershey's Milk Chocolate Bar (3.5 oz)" },
    { brandId: "store", name: "Store Brand Chocolate Bar (3.5 oz)" },
  ],
  paper_towels: [
    { brandId: "bounty", name: "Bounty Paper Towels (6 rolls)" },
    { brandId: "store", name: "Store Brand Paper Towels (6 rolls)" },
  ],
  toilet_paper: [
    { brandId: "charmin", name: "Charmin Toilet Paper (12 rolls)" },
    { brandId: "store", name: "Store Brand Toilet Paper (12 rolls)" },
  ],
  dish_soap: [
    { brandId: "dawn", name: "Dawn Dish Soap (24 oz)" },
    { brandId: "store", name: "Store Brand Dish Soap (24 oz)" },
  ],
  laundry_detergent: [
    { brandId: "tide", name: "Tide Laundry Detergent (50 oz)" },
    { brandId: "gain", name: "Gain Laundry Detergent (50 oz)" },
    { brandId: "store", name: "Store Brand Laundry Detergent (50 oz)" },
  ],
  shampoo: [
    { brandId: "pantene", name: "Pantene Shampoo (13.5 oz)" },
    { brandId: "head_shoulders", name: "Head & Shoulders Shampoo (13.5 oz)" },
    { brandId: "store", name: "Store Brand Shampoo (13.5 oz)" },
  ],
  toothpaste: [
    { brandId: "crest", name: "Crest Toothpaste (5.3 oz)" },
    { brandId: "colgate", name: "Colgate Toothpaste (5.3 oz)" },
    { brandId: "store", name: "Store Brand Toothpaste (5.3 oz)" },
  ],
  hand_soap: [
    { brandId: "softsoap", name: "Softsoap Hand Soap (10 oz)" },
    { brandId: "store", name: "Store Brand Hand Soap (10 oz)" },
  ],
};

// Build branded products array
export const brandedProducts: BrandedProduct[] = [];
for (const [productId, brands] of Object.entries(productBrands)) {
  for (const b of brands) {
    brandedProducts.push({
      id: `${b.brandId}_${productId}`,
      productId,
      brandId: b.brandId,
      name: b.name,
    });
  }
}

// ── PRICES (brandedProductId + storeId → price) ─────────────────────────────
// Base price for each branded product (at a reference mid-tier store like Kroger)
const brandedBasePrices: Record<string, number> = {};

// Generate base prices from brand tier + product type
function getBrandFactor(brandId: string): number {
  const brand = brands.find(b => b.id === brandId);
  if (!brand) return 1.0;
  switch (brand.tier) {
    case "premium": return 1.4;
    case "mid": return 1.0;
    case "budget": return 0.85;
    case "store": return 0.75;
  }
}

// Helper to get base price for a product
function getProductBasePrice(productId: string): number {
  const productPrices: Record<string, number> = {
    milk: 3.28, eggs: 2.52, cheese: 2.48, butter: 3.48, yogurt: 4.78,
    bread: 1.98, bagels: 3.48, chicken: 3.97, ground_beef: 5.48,
    bananas: 0.58, apples: 1.28, potatoes: 3.97, strawberries: 2.98, avocados: 3.47,
    rice: 1.98, pasta: 0.98, tomato_sauce: 1.74, olive_oil: 5.98, canned_tuna: 1.12,
    sugar: 2.48, peanut_butter: 2.98, cereal: 2.98, pancake_mix: 3.48,
    orange_juice: 3.24, coffee: 5.98, soda: 5.98, water: 3.98,
    frozen_pizza: 3.48, ice_cream: 4.48, frozen_veggies: 1.48,
    potato_chips: 3.48, granola_bars: 3.98, mixed_nuts: 5.98, chocolate: 1.98,
    paper_towels: 6.48, toilet_paper: 8.97, dish_soap: 2.98, laundry_detergent: 7.97,
    shampoo: 3.97, toothpaste: 2.48, hand_soap: 2.48,
  };
  return productPrices[productId] ?? 2.99;
}

for (const bp of brandedProducts) {
  const basePrice = getProductBasePrice(bp.productId);
  const brandFactor = getBrandFactor(bp.brandId);
  brandedBasePrices[bp.id] = Math.round(basePrice * brandFactor * 100) / 100;
}

// Store price multipliers
const storeFactors: Record<string, number> = {
  walmart: 0.88, aldi: 0.85, target: 0.92,
  kroger: 1.0, safeway: 1.05, albertsons: 1.03, publix: 1.08, heb: 0.92,
  wegmans: 1.02, wholefoods: 1.35, traderjoes: 0.95, costco: 0.75,
};

export interface Price {
  storeId: string;
  brandedProductId: string;
  price: number;
}

export const prices: Price[] = [];
for (const bp of brandedProducts) {
  for (const store of stores) {
    const base = brandedBasePrices[bp.id];
    const factor = storeFactors[store.id] ?? 1.0;
    // Store brand gets an extra discount at their own store
    let finalFactor = factor;
    if (bp.brandId === store.storeBrandId) {
      finalFactor *= 0.9; // store brand is 10% cheaper at its home store
    }
    prices.push({
      storeId: store.id,
      brandedProductId: bp.id,
      price: Math.round(base * finalFactor * 100) / 100,
    });
  }
}

// ── HELPERS ─────────────────────────────────────────────────────────────────
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getStore(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}

export function getBrand(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getBrandedProduct(id: string): BrandedProduct | undefined {
  return brandedProducts.find((bp) => bp.id === id);
}

export function getBrandedProductsForProduct(productId: string): BrandedProduct[] {
  return brandedProducts.filter((bp) => bp.productId === productId);
}

export function getPrice(storeId: string, brandedProductId: string): number | undefined {
  return prices.find((p) => p.storeId === storeId && p.brandedProductId === brandedProductId)?.price;
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getStoreProductUrl(store: Store, productName: string): string {
  const encoded = encodeURIComponent(productName);
  return store.searchUrl.replace("{product}", encoded);
}

export function getStoreCartUrl(store: Store, items: { productName: string }[]): string {
  if (items.length === 0) return store.baseUrl;
  const searchTerms = items.slice(0, 3).map((i) => i.productName).join(" ");
  const encoded = encodeURIComponent(searchTerms);
  return store.searchUrl.replace("{product}", encoded);
}

export interface CartItem {
  /** The brandedProduct id */
  brandedProductId: string;
  /** Display name */
  productName: string;
  /** Base product id for grouping */
  productId: string;
}

export interface StoreTotal {
  store: Store;
  items: { brandedProduct: BrandedProduct; product: Product; brand: Brand | undefined; price: number }[];
  total: number;
  itemCount: number;
}

export function calculateStoreTotals(cartItems: CartItem[]): StoreTotal[] {
  return stores.map((store) => {
    const items = cartItems
      .map((ci) => {
        const brandedProduct = getBrandedProduct(ci.brandedProductId);
        const product = brandedProduct ? getProduct(brandedProduct.productId) : undefined;
        const brand = brandedProduct ? getBrand(brandedProduct.brandId) : undefined;
        const price = getPrice(store.id, ci.brandedProductId);
        if (!brandedProduct || !product || price === undefined) return null;
        return { brandedProduct, product, brand, price };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const total = items.reduce((sum, item) => sum + item.price, 0);
    return { store, items, total, itemCount: items.length };
  });
}

// Pre-built example carts (using first branded product for each)
export const exampleCarts: Record<string, string> = {
  "Dairy": "great_value_milk,great_value_eggs,tillamook_cheese,kerrygold_butter,chobani_yogurt",
  "Bakery": "wonder_bread,thomas_bagels",
  "Meat": "tyson_chicken,store_ground_beef",
  "Produce": "store_bananas,store_apples,store_potatoes,store_strawberries,store_avocados",
  "Pantry": "minute_rice,barrilla_pasta,ragu_tomato_sauce,bertolli_olive_oil,bumble_bee_canned_tuna,domino_sugar,jif_peanut_butter",
  "Breakfast": "kellogg_cereal,bisquick_pancake_mix",
  "Beverages": "tropicana_orange_juice,folgers_coffee,coke_soda,nestle_water",
  "Frozen Foods": "digiorno_frozen_pizza,breyers_ice_cream,birds_eye_frozen_veggies",
  "Snacks": "lays_potato_chips,quaker_granola_bars,planter_mixed_nuts,hershey_chocolate",
  "Household": "bounty_paper_towels,charmin_toilet_paper,dawn_dish_soap,tide_laundry_detergent",
  "Personal Care": "pantene_shampoo,crest_toothpaste,softsoap_hand_soap",
};

// ── MEALS / RECIPES ─────────────────────────────────────────────────────────
export interface MealIngredient {
  productId: string;
  name: string;
  quantity: string;
}

export interface Meal {
  id: string;
  name: string;
  category: "breakfast" | "lunch" | "dinner" | "snacks";
  description: string;
  prepTime: string;
  servings: number;
  ingredients: MealIngredient[];
  // Optional branded product IDs for the "add missing items" feature
  defaultBrandedProductIds: string[];
}

export const meals: Meal[] = [
  {
    id: "scrambled_eggs_toast", name: "Scrambled Eggs & Toast", category: "breakfast",
    description: "Classic scrambled eggs with buttered toast. Quick and satisfying.",
    prepTime: "10 min", servings: 2,
    ingredients: [
      { productId: "eggs", name: "Eggs", quantity: "4" },
      { productId: "bread", name: "Bread", quantity: "2 slices" },
      { productId: "butter", name: "Butter", quantity: "1 tbsp" },
      { productId: "milk", name: "Milk", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["store_eggs", "store_bread", "store_butter", "great_value_milk"],
  },
  {
    id: "cereal_breakfast", name: "Cereal & Milk", category: "breakfast",
    description: "Quick bowl of cereal with fresh milk. A breakfast classic.",
    prepTime: "2 min", servings: 1,
    ingredients: [
      { productId: "cereal", name: "Cereal", quantity: "1 bowl" },
      { productId: "milk", name: "Milk", quantity: "1 cup" },
    ],
    defaultBrandedProductIds: ["kellogg_cereal", "great_value_milk"],
  },
  {
    id: "pancakes", name: "Buttermilk Pancakes", category: "breakfast",
    description: "Fluffy pancakes with butter and maple syrup. Weekend favorite!",
    prepTime: "20 min", servings: 4,
    ingredients: [
      { productId: "pancake_mix", name: "Pancake Mix", quantity: "2 cups" },
      { productId: "milk", name: "Milk", quantity: "1 cup" },
      { productId: "eggs", name: "Eggs", quantity: "1" },
      { productId: "butter", name: "Butter", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["bisquick_pancake_mix", "great_value_milk", "store_eggs", "store_butter"],
  },
  {
    id: "bagel_cream_cheese", name: "Bagel with Cream Cheese", category: "breakfast",
    description: "Toasted bagel spread with cream cheese. A New York classic.",
    prepTime: "5 min", servings: 1,
    ingredients: [
      { productId: "bagels", name: "Bagels", quantity: "1" },
      { productId: "cheese", name: "Cream Cheese", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["thomas_bagels", "tillamook_cheese"],
  },
  {
    id: "grilled_cheese", name: "Grilled Cheese Sandwich", category: "lunch",
    description: "Crispy buttery grilled cheese with melted cheddar. Perfect comfort food.",
    prepTime: "10 min", servings: 2,
    ingredients: [
      { productId: "bread", name: "Bread", quantity: "4 slices" },
      { productId: "cheese", name: "Cheddar Cheese", quantity: "4 slices" },
      { productId: "butter", name: "Butter", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["wonder_bread", "tillamook_cheese", "landolakes_butter"],
  },
  {
    id: "tuna_sandwich", name: "Tuna Salad Sandwich", category: "lunch",
    description: "Classic tuna salad on fresh bread with lettuce.",
    prepTime: "10 min", servings: 2,
    ingredients: [
      { productId: "canned_tuna", name: "Canned Tuna", quantity: "2 cans" },
      { productId: "bread", name: "Bread", quantity: "4 slices" },
      { productId: "eggs", name: "Hard Boiled Eggs", quantity: "1" },
    ],
    defaultBrandedProductIds: ["bumble_bee_canned_tuna", "wonder_bread", "store_eggs"],
  },
  {
    id: "chicken_rice_bowl", name: "Chicken & Rice Bowl", category: "lunch",
    description: "Simple seasoned chicken breast over white rice with veggies.",
    prepTime: "25 min", servings: 2,
    ingredients: [
      { productId: "chicken", name: "Chicken Breast", quantity: "2 breasts" },
      { productId: "rice", name: "White Rice", quantity: "1 cup" },
      { productId: "frozen_veggies", name: "Frozen Vegetables", quantity: "1 cup" },
      { productId: "olive_oil", name: "Olive Oil", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["tyson_chicken", "minute_rice", "birds_eye_frozen_veggies", "bertolli_olive_oil"],
  },
  {
    id: "spaghetti_meatballs", name: "Spaghetti with Meat Sauce", category: "dinner",
    description: "Classic spaghetti with hearty tomato and meat sauce.",
    prepTime: "30 min", servings: 4,
    ingredients: [
      { productId: "pasta", name: "Spaghetti", quantity: "1 lb" },
      { productId: "tomato_sauce", name: "Tomato Sauce", quantity: "1 jar" },
      { productId: "ground_beef", name: "Ground Beef", quantity: "1 lb" },
      { productId: "olive_oil", name: "Olive Oil", quantity: "1 tbsp" },
      { productId: "cheese", name: "Parmesan", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["barrilla_pasta", "prego_tomato_sauce", "store_ground_beef", "bertolli_olive_oil", "tillamook_cheese"],
  },
  {
    id: "chicken_nuggets_fries", name: "Chicken Nuggets & Veggies", category: "dinner",
    description: "Easy oven-baked chicken nuggets with mixed vegetables.",
    prepTime: "20 min", servings: 4,
    ingredients: [
      { productId: "chicken_nuggets", name: "Chicken Nuggets", quantity: "1 bag" },
      { productId: "frozen_veggies", name: "Frozen Vegetables", quantity: "1 bag" },
      { productId: "potato_chips", name: "Potato Chips", quantity: "1 bag" },
    ],
    defaultBrandedProductIds: ["store_chicken_nuggets", "birds_eye_frozen_veggies", "lays_potato_chips"],
  },
  {
    id: "frozen_pizza_salad", name: "Frozen Pizza Night", category: "dinner",
    description: "Easy frozen pizza with a side salad. Perfect busy weeknight dinner.",
    prepTime: "20 min", servings: 2,
    ingredients: [
      { productId: "frozen_pizza", name: "Frozen Pizza", quantity: "1" },
      { productId: "mixed_nuts", name: "Mixed Nuts", quantity: "1/2 cup" },
      { productId: "soda", name: "Cola", quantity: "2 cans" },
    ],
    defaultBrandedProductIds: ["digiorno_frozen_pizza", "planter_mixed_nuts", "coke_soda"],
  },
  {
    id: "nachos", name: "Loaded Nachos", category: "snacks",
    description: "Crispy tortilla chips loaded with cheese and toppings.",
    prepTime: "15 min", servings: 4,
    ingredients: [
      { productId: "potato_chips", name: "Tortilla Chips", quantity: "1 bag" },
      { productId: "cheese", name: "Cheddar Cheese", quantity: "1 cup" },
      { productId: "avocados", name: "Guacamole", quantity: "1" },
    ],
    defaultBrandedProductIds: ["lays_potato_chips", "tillamook_cheese", "store_avocados"],
  },
  {
    id: "pbj", name: "Peanut Butter & Jelly", category: "lunch",
    description: "Classic PB&J on fresh bread. The lunchtime staple.",
    prepTime: "3 min", servings: 1,
    ingredients: [
      { productId: "bread", name: "Bread", quantity: "2 slices" },
      { productId: "peanut_butter", name: "Peanut Butter", quantity: "2 tbsp" },
      { productId: "strawberries", name: "Strawberry Jam", quantity: "1 tbsp" },
    ],
    defaultBrandedProductIds: ["wonder_bread", "jif_peanut_butter", "store_strawberries"],
  },
  {
    id: "banana_smoothie", name: "Banana Smoothie", category: "breakfast",
    description: "Creamy banana smoothie with yogurt and honey. Healthy start!",
    prepTime: "5 min", servings: 2,
    ingredients: [
      { productId: "bananas", name: "Bananas", quantity: "2" },
      { productId: "yogurt", name: "Greek Yogurt", quantity: "1 cup" },
      { productId: "milk", name: "Milk", quantity: "1 cup" },
    ],
    defaultBrandedProductIds: ["store_bananas", "chobani_yogurt", "great_value_milk"],
  },
  {
    id: "coffee_break", name: "Coffee & Snack Break", category: "snacks",
    description: "Fresh brewed coffee with a sweet snack on the side.",
    prepTime: "5 min", servings: 1,
    ingredients: [
      { productId: "coffee", name: "Ground Coffee", quantity: "2 tbsp" },
      { productId: "milk", name: "Milk", quantity: "1/4 cup" },
      { productId: "chocolate", name: "Chocolate Bar", quantity: "1" },
      { productId: "sugar", name: "Sugar", quantity: "1 tsp" },
    ],
    defaultBrandedProductIds: ["folgers_coffee", "great_value_milk", "hershey_chocolate", "domino_sugar"],
  },
  {
    id: "apple_peanut_butter", name: "Apple Slices & Peanut Butter", category: "snacks",
    description: "Fresh apple slices with creamy peanut butter. Healthy snack.",
    prepTime: "3 min", servings: 1,
    ingredients: [
      { productId: "apples", name: "Apple", quantity: "1" },
      { productId: "peanut_butter", name: "Peanut Butter", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["store_apples", "jif_peanut_butter"],
  },
  {
    id: "strawberry_yogurt_parfait", name: "Strawberry Yogurt Parfait", category: "breakfast",
    description: "Layers of yogurt, fresh strawberries, and granola.",
    prepTime: "5 min", servings: 1,
    ingredients: [
      { productId: "yogurt", name: "Greek Yogurt", quantity: "1 cup" },
      { productId: "strawberries", name: "Strawberries", quantity: "1/2 cup" },
      { productId: "granola_bars", name: "Granola", quantity: "1/2 bar" },
    ],
    defaultBrandedProductIds: ["chobani_yogurt", "store_strawberries", "quaker_granola_bars"],
  },
  {
    id: "mashed_potatoes", name: "Mashed Potatoes & Chicken", category: "dinner",
    description: "Creamy mashed potatoes with seasoned chicken breast.",
    prepTime: "35 min", servings: 4,
    ingredients: [
      { productId: "potatoes", name: "Potatoes", quantity: "2 lbs" },
      { productId: "chicken", name: "Chicken Breast", quantity: "2 breasts" },
      { productId: "butter", name: "Butter", quantity: "3 tbsp" },
      { productId: "milk", name: "Milk", quantity: "1/2 cup" },
    ],
    defaultBrandedProductIds: ["store_potatoes", "tyson_chicken", "landolakes_butter", "great_value_milk"],
  },
  {
    id: "tuna_melt", name: "Tuna Melt", category: "lunch",
    description: "Open-faced tuna and cheese melt under the broiler.",
    prepTime: "12 min", servings: 2,
    ingredients: [
      { productId: "canned_tuna", name: "Canned Tuna", quantity: "2 cans" },
      { productId: "bread", name: "Bread", quantity: "2 slices" },
      { productId: "cheese", name: "Cheddar Cheese", quantity: "2 slices" },
    ],
    defaultBrandedProductIds: ["bumble_bee_canned_tuna", "wonder_bread", "tillamook_cheese"],
  },
  {
    id: "ice_cream_sundae", name: "Ice Cream Sundae", category: "snacks",
    description: "Vanilla ice cream with chocolate syrup and nuts.",
    prepTime: "3 min", servings: 1,
    ingredients: [
      { productId: "ice_cream", name: "Vanilla Ice Cream", quantity: "2 scoops" },
      { productId: "chocolate", name: "Chocolate Syrup", quantity: "2 tbsp" },
      { productId: "mixed_nuts", name: "Chopped Nuts", quantity: "1 tbsp" },
    ],
    defaultBrandedProductIds: ["breyers_ice_cream", "hershey_chocolate", "planter_mixed_nuts"],
  },
  {
    id: "chicken_salad", name: "Chicken Salad", category: "lunch",
    description: "Diced chicken salad with apples and nuts on a bed of greens.",
    prepTime: "15 min", servings: 2,
    ingredients: [
      { productId: "chicken", name: "Chicken Breast", quantity: "2 breasts" },
      { productId: "apples", name: "Apple", quantity: "1" },
      { productId: "mixed_nuts", name: "Walnuts", quantity: "1/4 cup" },
      { productId: "yogurt", name: "Greek Yogurt", quantity: "1/2 cup" },
    ],
    defaultBrandedProductIds: ["tyson_chicken", "store_apples", "planter_mixed_nuts", "chobani_yogurt"],
  },
  {
    id: "rice_chicken_veggies", name: "Rice Bowl with Chicken & Avocado", category: "dinner",
    description: "Healthy rice bowl topped with grilled chicken and fresh avocado.",
    prepTime: "25 min", servings: 2,
    ingredients: [
      { productId: "rice", name: "White Rice", quantity: "1 cup" },
      { productId: "chicken", name: "Chicken Breast", quantity: "2 breasts" },
      { productId: "avocados", name: "Avocado", quantity: "1" },
      { productId: "tomato_sauce", name: "Salsa", quantity: "1/4 cup" },
    ],
    defaultBrandedProductIds: ["minute_rice", "tyson_chicken", "store_avocados", "prego_tomato_sauce"],
  },
  {
    id: "brunch_bagel", name: "Brunch Bagel Sandwich", category: "breakfast",
    description: "Bagel sandwich with egg, cheese, and a side of OJ.",
    prepTime: "10 min", servings: 1,
    ingredients: [
      { productId: "bagels", name: "Bagel", quantity: "1" },
      { productId: "eggs", name: "Egg", quantity: "1" },
      { productId: "cheese", name: "Cream Cheese", quantity: "2 tbsp" },
      { productId: "orange_juice", name: "Orange Juice", quantity: "1 glass" },
    ],
    defaultBrandedProductIds: ["thomas_bagels", "store_eggs", "tillamook_cheese", "tropicana_orange_juice"],
  },
  {
    id: "quick_pasta_butter", name: "Simple Butter Pasta", category: "dinner",
    description: "Quick buttered pasta with parmesan. A 15-minute dinner.",
    prepTime: "15 min", servings: 2,
    ingredients: [
      { productId: "pasta", name: "Spaghetti", quantity: "8 oz" },
      { productId: "butter", name: "Butter", quantity: "3 tbsp" },
      { productId: "cheese", name: "Parmesan", quantity: "2 tbsp" },
    ],
    defaultBrandedProductIds: ["barrilla_pasta", "landolakes_butter", "tillamook_cheese"],
  },
  {
    id: "healthy_snack_box", name: "Healthy Snack Box", category: "snacks",
    description: "Assorted snack box with nuts, fruit, and chocolate.",
    prepTime: "3 min", servings: 1,
    ingredients: [
      { productId: "mixed_nuts", name: "Mixed Nuts", quantity: "1/4 cup" },
      { productId: "apples", name: "Apple", quantity: "1" },
      { productId: "chocolate", name: "Dark Chocolate", quantity: "1 square" },
    ],
    defaultBrandedProductIds: ["planter_mixed_nuts", "store_apples", "hershey_chocolate"],
  },
];

export function getMealsByCategory(cat: string): Meal[] {
  return meals.filter((m) => m.category === cat);
}

export interface MealMatch {
  meal: Meal;
  hasCount: number;
  totalCount: number;
  missingIngredients: MealIngredient[];
  matchPercentage: number;
}

/**
 * Given a list of cart items (which contain productIds), find meals
 * that match well — i.e., the user already has most of the ingredients.
 * Returns meals sorted by match percentage (highest first).
 */
export function findMatchingMeals(cartItems: CartItem[], minMatchPercent: number = 30): MealMatch[] {
  const cartProductIds = new Set(cartItems.map((ci) => ci.productId));

  const results: MealMatch[] = meals.map((meal) => {
    const missingIngredients: MealIngredient[] = [];
    let hasCount = 0;

    for (const ingredient of meal.ingredients) {
      if (cartProductIds.has(ingredient.productId)) {
        hasCount++;
      } else {
        missingIngredients.push(ingredient);
      }
    }

    const matchPercentage = Math.round((hasCount / meal.ingredients.length) * 100);

    return {
      meal,
      hasCount,
      totalCount: meal.ingredients.length,
      missingIngredients,
      matchPercentage,
    };
  });

  return results
    .filter((r) => r.matchPercentage >= minMatchPercent)
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

/**
 * Get the default branded product IDs for missing ingredients,
 * so we can add them to the cart.
 */
export function getMissingBrandedIds(missingIngredients: MealIngredient[]): string[] {
  const ids: string[] = [];
  for (const ing of missingIngredients) {
    // Find the meal that references this ingredient
    const meal = meals.find((m) =>
      m.ingredients.some((i) => i.productId === ing.productId)
    );
    if (meal) {
      const defaultBp = meal.defaultBrandedProductIds.find((bpId) =>
        bpId.endsWith(`_${ing.productId}`)
      );
      if (defaultBp) ids.push(defaultBp);
    }
  }
  return ids;
}