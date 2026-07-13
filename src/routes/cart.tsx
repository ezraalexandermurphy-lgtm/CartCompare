import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories, getProductsByCategory } from "~/lib/data";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<{ productId: string; productName: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const availableProducts = products.filter(
    (p) => !items.some((i) => i.productId === p.id)
  );

  const filteredByCategory = activeCategory
    ? getProductsByCategory(activeCategory)
    : [];

  const categoryItemCount = categories.map((cat) => ({
    name: cat,
    count: products.filter((p) => p.category === cat).length,
  }));

  function handleInputChange(value: string) {
    setInputValue(value);
    if (value.trim().length > 0) {
      const filtered = availableProducts.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function addItem(productId: string, productName: string) {
    if (!items.some((i) => i.productId === productId)) {
      setItems([...items, { productId, productName }]);
    }
    setInputValue("");
    setSuggestions([]);
    setShowSuggestions(false);
  }

  function removeItem(productId: string) {
    setItems(items.filter((i) => i.productId !== productId));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && suggestions.length > 0) {
      e.preventDefault();
      addItem(suggestions[0].id, suggestions[0].name);
    }
  }

  function handleCompare() {
    if (items.length === 0) return;
    const itemIds = items.map((i) => i.productId).join(",");
    navigate({ to: "/results", search: { items: itemIds } });
  }

  const categoryIcons: Record<string, string> = {
    "Dairy": "🥛",
    "Bakery": "🍞",
    "Meat": "🥩",
    "Produce": "🥦",
    "Pantry": "🥫",
    "Beverages": "🧃",
    "Breakfast": "🥞",
    "Frozen Foods": "❄️",
    "Snacks": "🍿",
    "Household": "🧹",
    "Personal Care": "🧴",
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
              C
            </span>
            <span className="text-lg font-bold text-gray-900">CartCompare</span>
          </Link>
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Home
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Build your cart
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Add items to your shopping list and we'll find the cheapest store.
            </p>
          </div>

          {/* Input */}
          <div className="relative mt-10">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    if (suggestions.length > 0) setShowSuggestions(true);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowSuggestions(false), 200);
                  }}
                  placeholder="Search items — e.g. milk, bread, eggs..."
                  className="input-field pr-10"
                />
                {inputValue && (
                  <button
                    onClick={() => {
                      setInputValue("");
                      setSuggestions([]);
                      setShowSuggestions(false);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  if (suggestions.length > 0) {
                    addItem(suggestions[0].id, suggestions[0].name);
                  }
                }}
                disabled={suggestions.length === 0}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add
              </button>
            </div>

            {/* Suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute z-30 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                {suggestions.map((product) => (
                  <button
                    key={product.id}
                    onMouseDown={() => addItem(product.id, product.name)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-emerald-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {categoryIcons[product.category] && (
                      <span className="text-base">{categoryIcons[product.category]}</span>
                    )}
                    <div>
                      <span className="font-medium text-gray-900">{product.name}</span>
                      <span className="ml-2 text-xs text-gray-400">{product.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Badges / Filters */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-gray-500">Browse by category:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  activeCategory === null
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                All
              </button>
              {categoryItemCount.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() =>
                    setActiveCategory(activeCategory === name ? null : name)
                  }
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all ${
                    activeCategory === name
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {categoryIcons[name] && <span>{categoryIcons[name]}</span>}
                  <span>{name}</span>
                  <span className="text-xs text-gray-400">({count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Product Grid */}
          {activeCategory && filteredByCategory.length > 0 && (
            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  {categoryIcons[activeCategory]} {activeCategory}
                </span>
                <span className="text-xs text-gray-400">
                  Click to add
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {filteredByCategory.map((product) => {
                  const isAdded = items.some((i) => i.productId === product.id);
                  return (
                    <button
                      key={product.id}
                      onClick={() => {
                        if (!isAdded) addItem(product.id, product.name);
                      }}
                      disabled={isAdded}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
                        isAdded
                          ? "border-emerald-200 bg-emerald-50 text-emerald-500 cursor-default"
                          : "border-gray-100 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700"
                      }`}
                    >
                      <span>{product.name}</span>
                      <span className="text-xs">
                        {isAdded ? "✓ Added" : "+ Add"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Cart Items */}
          <div className="mt-10">
            {items.length === 0 ? (
              <div className="card py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Your cart is empty</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Search for items above or browse by category to add to your list.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Your items ({items.length})
                  </h2>
                  <button
                    onClick={() => setItems([])}
                    className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                <div className="space-y-2">
                  {items.map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    const cat = product?.category;
                    return (
                      <div
                        key={item.productId}
                        className="card flex items-center justify-between gap-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm">
                            {cat && categoryIcons[cat] ? categoryIcons[cat] : item.productName[0]}
                          </span>
                          <div>
                            <span className="font-medium text-gray-900">
                              {item.productName}
                            </span>
                            {cat && (
                              <span className="ml-2 text-xs text-gray-400">{cat}</span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                          title="Remove item"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Compare Button */}
          <div className="mt-10 text-center">
            <button
              onClick={handleCompare}
              disabled={items.length === 0}
              className="btn-primary w-full max-w-md px-8 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Compare Prices
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}