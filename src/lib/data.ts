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

export const stores: Store[] = [
  { id: "walmart", name: "Walmart", color: "#0071CE", logo: "W" },
  { id: "kroger", name: "Kroger", color: "#004C3F", logo: "K" },
  { id: "albertsons", name: "Albertsons", color: "#D12125", logo: "A" },
  { id: "target", name: "Target", color: "#CC0000", logo: "T" },
  { id: "publix", name: "Publix", color: "#00843D", logo: "P" },
];

export const products: Product[] = [
  { id: "milk", name: "Milk (1 gal)", category: "Dairy", unit: "gal" },
  { id: "bread", name: "White Bread (20 oz)", category: "Bakery", unit: "loaf" },
  { id: "eggs", name: "Eggs (dozen)", category: "Dairy", unit: "dozen" },
  { id: "chicken", name: "Chicken Breast (1 lb)", category: "Meat", unit: "lb" },
  { id: "bananas", name: "Bananas (1 lb)", category: "Produce", unit: "lb" },
  { id: "rice", name: "White Rice (2 lb)", category: "Pantry", unit: "bag" },
  { id: "pasta", name: "Spaghetti (16 oz)", category: "Pantry", unit: "box" },
  { id: "tomato_sauce", name: "Tomato Sauce (24 oz)", category: "Pantry", unit: "jar" },
  { id: "cheese", name: "Cheddar Cheese (8 oz)", category: "Dairy", unit: "block" },
  { id: "apples", name: "Apples (1 lb)", category: "Produce", unit: "lb" },
  { id: "potatoes", name: "Potatoes (5 lb)", category: "Produce", unit: "bag" },
  { id: "ground_beef", name: "Ground Beef (1 lb)", category: "Meat", unit: "lb" },
  { id: "butter", name: "Butter (1 lb)", category: "Dairy", unit: "block" },
  { id: "orange_juice", name: "Orange Juice (64 oz)", category: "Beverages", unit: "bottle" },
  { id: "cereal", name: "Cereal (12 oz)", category: "Breakfast", unit: "box" },
];

// Realistic price data per store
export const prices: Price[] = [
  // Walmart
  { storeId: "walmart", productId: "milk", price: 3.28 },
  { storeId: "walmart", productId: "bread", price: 1.98 },
  { storeId: "walmart", productId: "eggs", price: 2.52 },
  { storeId: "walmart", productId: "chicken", price: 3.97 },
  { storeId: "walmart", productId: "bananas", price: 0.58 },
  { storeId: "walmart", productId: "rice", price: 1.98 },
  { storeId: "walmart", productId: "pasta", price: 0.98 },
  { storeId: "walmart", productId: "tomato_sauce", price: 1.74 },
  { storeId: "walmart", productId: "cheese", price: 2.48 },
  { storeId: "walmart", productId: "apples", price: 1.28 },
  { storeId: "walmart", productId: "potatoes", price: 3.97 },
  { storeId: "walmart", productId: "ground_beef", price: 5.48 },
  { storeId: "walmart", productId: "butter", price: 3.48 },
  { storeId: "walmart", productId: "orange_juice", price: 3.24 },
  { storeId: "walmart", productId: "cereal", price: 2.98 },

  // Kroger
  { storeId: "kroger", productId: "milk", price: 3.49 },
  { storeId: "kroger", productId: "bread", price: 2.29 },
  { storeId: "kroger", productId: "eggs", price: 2.79 },
  { storeId: "kroger", productId: "chicken", price: 4.29 },
  { storeId: "kroger", productId: "bananas", price: 0.69 },
  { storeId: "kroger", productId: "rice", price: 2.19 },
  { storeId: "kroger", productId: "pasta", price: 1.29 },
  { storeId: "kroger", productId: "tomato_sauce", price: 1.99 },
  { storeId: "kroger", productId: "cheese", price: 2.79 },
  { storeId: "kroger", productId: "apples", price: 1.49 },
  { storeId: "kroger", productId: "potatoes", price: 4.49 },
  { storeId: "kroger", productId: "ground_beef", price: 5.99 },
  { storeId: "kroger", productId: "butter", price: 3.79 },
  { storeId: "kroger", productId: "orange_juice", price: 3.49 },
  { storeId: "kroger", productId: "cereal", price: 3.29 },

  // Albertsons
  { storeId: "albertsons", productId: "milk", price: 3.59 },
  { storeId: "albertsons", productId: "bread", price: 2.49 },
  { storeId: "albertsons", productId: "eggs", price: 2.99 },
  { storeId: "albertsons", productId: "chicken", price: 4.49 },
  { storeId: "albertsons", productId: "bananas", price: 0.79 },
  { storeId: "albertsons", productId: "rice", price: 2.49 },
  { storeId: "albertsons", productId: "pasta", price: 1.49 },
  { storeId: "albertsons", productId: "tomato_sauce", price: 2.29 },
  { storeId: "albertsons", productId: "cheese", price: 2.99 },
  { storeId: "albertsons", productId: "apples", price: 1.69 },
  { storeId: "albertsons", productId: "potatoes", price: 4.99 },
  { storeId: "albertsons", productId: "ground_beef", price: 6.29 },
  { storeId: "albertsons", productId: "butter", price: 3.99 },
  { storeId: "albertsons", productId: "orange_juice", price: 3.79 },
  { storeId: "albertsons", productId: "cereal", price: 3.49 },

  // Target
  { storeId: "target", productId: "milk", price: 3.39 },
  { storeId: "target", productId: "bread", price: 1.99 },
  { storeId: "target", productId: "eggs", price: 2.69 },
  { storeId: "target", productId: "chicken", price: 4.19 },
  { storeId: "target", productId: "bananas", price: 0.65 },
  { storeId: "target", productId: "rice", price: 2.09 },
  { storeId: "target", productId: "pasta", price: 1.09 },
  { storeId: "target", productId: "tomato_sauce", price: 1.89 },
  { storeId: "target", productId: "cheese", price: 2.69 },
  { storeId: "target", productId: "apples", price: 1.39 },
  { storeId: "target", productId: "potatoes", price: 4.29 },
  { storeId: "target", productId: "ground_beef", price: 5.79 },
  { storeId: "target", productId: "butter", price: 3.69 },
  { storeId: "target", productId: "orange_juice", price: 3.29 },
  { storeId: "target", productId: "cereal", price: 3.09 },

  // Publix
  { storeId: "publix", productId: "milk", price: 3.79 },
  { storeId: "publix", productId: "bread", price: 2.69 },
  { storeId: "publix", productId: "eggs", price: 3.29 },
  { storeId: "publix", productId: "chicken", price: 4.79 },
  { storeId: "publix", productId: "bananas", price: 0.89 },
  { storeId: "publix", productId: "rice", price: 2.69 },
  { storeId: "publix", productId: "pasta", price: 1.69 },
  { storeId: "publix", productId: "tomato_sauce", price: 2.49 },
  { storeId: "publix", productId: "cheese", price: 3.29 },
  { storeId: "publix", productId: "apples", price: 1.89 },
  { storeId: "publix", productId: "potatoes", price: 5.49 },
  { storeId: "publix", productId: "ground_beef", price: 6.79 },
  { storeId: "publix", productId: "butter", price: 4.29 },
  { storeId: "publix", productId: "orange_juice", price: 3.99 },
  { storeId: "publix", productId: "cereal", price: 3.79 },
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