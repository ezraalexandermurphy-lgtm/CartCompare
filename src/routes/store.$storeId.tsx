import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AdSlot } from "~/lib/ad-slot";
import {
  stores, brandedProducts, products, categories, prices,
  getStore, getBrand, getProduct, getStoreCartUrl,
} from "~/lib/data";

export const Route = createFileRoute("/store/$storeId")({
  component: StoreDetailPage,
});

function StoreDetailPage() {
  const { storeId } = Route.useParams();
  const store = getStore(storeId);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  if (!store) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold text-gray-900">Store not found</h1>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    );
  }

  // Get all branded products with prices at this store
  const catalog = brandedProducts
    .map((bp) => {
      const price = prices.find(
        (p) => p.storeId === store.id && p.brandedProductId === bp.id
      );
      const product = getProduct(bp.productId);
      const brand = getBrand(bp.brandId);
      return { brandedProduct: bp, product, brand, price: price?.price ?? null };
    })
    .filter((item) => item.product && item.price !== null);

  // Apply search and category filters
  const filtered = catalog.filter((item) => {
    if (activeCategory && item.product?.category !== activeCategory) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        item.brandedProduct.name.toLowerCase().includes(q) ||
        item.brand?.name.toLowerCase().includes(q) ||
        item.product?.name.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.brandedProduct.name.localeCompare(b.brandedProduct.name);
    if (sortBy === "price-asc") return (a.price ?? 0) - (b.price ?? 0);
    return (b.price ?? 0) - (a.price ?? 0);
  });

  const cartUrl = getStoreCartUrl(store, [{ productName: "grocery" }]);

  const tierColors: Record<string, string> = {
    discount: "bg-blue-100 text-blue-700 border-blue-200",
    mid: "bg-gray-100 text-gray-700 border-gray-200",
    premium: "bg-amber-100 text-amber-700 border-amber-200",
    warehouse: "bg-purple-100 text-purple-700 border-purple-200",
    specialty: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">C</span>
            <span className="text-lg font-bold text-gray-900">CartCompare</span>
          </Link>
          <Link to="/cart" className="btn-primary text-sm">Build Cart</Link>
        </div>
      </nav>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Store Header */}
          <div className="card flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-xl font-bold text-white"
              style={{ backgroundColor: store.color }}>
              {store.logo}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <h1 className="text-2xl font-bold text-gray-900">{store.name}</h1>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tierColors[store.tier] || "bg-gray-100 text-gray-600"}`}>
                  {store.tier}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {catalog.length} items available
                {store.storeBrandId !== "store" && (
                  <span className="ml-2 text-emerald-600">∙ Store brand: {getBrand(store.storeBrandId)?.name}</span>
                )}
              </p>
              <a href={cartUrl} target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 hover:underline">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit {store.name}'s website
              </a>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8 space-y-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search items in this store..."
              className="input-field"
            />
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-500">Category:</span>
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full border px-3 py-1 text-xs transition-all ${
                  !activeCategory ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                All
              </button>
              {categories.map((cat) => {
                const count = catalog.filter((i) => i.product?.category === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                    className={`rounded-full border px-3 py-1 text-xs transition-all ${
                      activeCategory === cat ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
              <span className="text-sm font-medium text-gray-500 ml-4">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
              >
                <option value="name">Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Catalog */}
          <div className="mt-6">
            <p className="mb-3 text-sm text-gray-500">{sorted.length} items</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((item) => {
                const brandBadge = item.brand?.tier === "premium" ? "bg-amber-500" :
                  item.brand?.tier === "budget" ? "bg-blue-500" :
                  item.brand?.tier === "store" ? "bg-gray-400" : "bg-emerald-600";
                return (
                  <div key={item.brandedProduct.id} className="card flex items-center justify-between gap-3 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {item.brand && (
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${brandBadge}`}>
                          {item.brand.name[0]}
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-900">{item.brandedProduct.name}</p>
                        {item.brand && (
                          <p className={`text-xs ${
                            item.brand.tier === "premium" ? "text-amber-600" :
                            item.brand.tier === "budget" ? "text-blue-600" :
                            item.brand.tier === "store" ? "text-gray-500" : "text-emerald-600"
                          }`}>
                            {item.brand.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-bold text-gray-900">${item.price?.toFixed(2)}</p>
                      <Link
                        to="/results"
                        search={{ items: item.brandedProduct.id }}
                        className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Compare →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ad slot */}
          <div className="mt-8">
            <AdSlot size="banner" />
          </div>
        </div>
      </main>
    </div>
  );
}