import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "~/lib/ad-slot";
import {
  calculateStoreTotals,
  getProduct,
  type CartItem,
} from "~/lib/data";

export const Route = createFileRoute("/results")({
  validateSearch: (search: Record<string, string | undefined>) => ({
    items: search.items ?? "",
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const { items } = Route.useSearch();

  const cartItems: CartItem[] = items
    ? items
        .split(",")
        .filter(Boolean)
        .map((id) => {
          const product = getProduct(id.trim());
          return product
            ? { productId: product.id, productName: product.name }
            : null;
        })
        .filter((x): x is CartItem => x !== null)
    : [];

  const storeTotals = calculateStoreTotals(cartItems);

  // Sort by total ascending
  const sortedTotals = [...storeTotals].sort((a, b) => a.total - b.total);
  const cheapest = sortedTotals[0];
  const mostExpensive = sortedTotals[sortedTotals.length - 1];
  const savings = cheapest && mostExpensive ? mostExpensive.total - cheapest.total : 0;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
            <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">No items to compare</h1>
          <p className="mt-2 text-gray-600">Add some items to your cart first.</p>
        </div>
        <Link to="/cart" className="btn-primary">
          Build Your Cart
        </Link>
      </div>
    );
  }

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
          <Link to="/cart" className="btn-secondary text-sm">
            Edit Cart
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Results Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Price Comparison
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Comparing {cartItems.length} item{cartItems.length !== 1 && "s"} across {storeTotals.length} stores
            </p>
          </div>

          {/* Savings Banner */}
          {cheapest && savings > 0 && (
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 p-1">
                <div className="rounded-lg bg-white/95 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-emerald-600">Potential Savings</p>
                      <p className="text-2xl font-bold text-gray-900">
                        Save up to ${savings.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Shop at {cheapest.store.name} instead of {mostExpensive?.store.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Store Cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_300px]">
            {/* Main Results */}
            <div className="space-y-6">
              {sortedTotals.map((storeTotal, index) => {
                const isCheapest = index === 0 && sortedTotals.length > 1;
                const isMostExpensive =
                  index === sortedTotals.length - 1 && sortedTotals.length > 1;

                return (
                  <div
                    key={storeTotal.store.id}
                    className={`card relative overflow-hidden ${
                      isCheapest ? "ring-2 ring-emerald-500" : ""
                    }`}
                  >
                    {isCheapest && (
                      <div className="absolute right-0 top-0">
                        <div className="bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                          Best Value 🏆
                        </div>
                      </div>
                    )}

                    {/* Store Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
                          style={{ backgroundColor: storeTotal.store.color }}
                        >
                          {storeTotal.store.logo}
                        </span>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900">
                            {storeTotal.store.name}
                          </h2>
                          <p className="text-xs text-gray-400">
                            {storeTotal.itemCount} of {cartItems.length} items found
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Total</p>
                        <p
                          className={`text-2xl font-bold ${
                            isCheapest ? "text-emerald-600" : "text-gray-900"
                          }`}
                        >
                          ${storeTotal.total.toFixed(2)}
                        </p>
                        {isCheapest && savings > 0 && (
                          <p className="text-xs font-medium text-emerald-500">
                            Saves ${(mostExpensive!.total - storeTotal.total).toFixed(2)}
                          </p>
                        )}
                        {isMostExpensive && savings > 0 && (
                          <p className="text-xs font-medium text-red-400">
                            ${(storeTotal.total - cheapest!.total).toFixed(2)} more
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Item Breakdown */}
                    <div className="mt-4">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-gray-100 text-xs uppercase tracking-wider text-gray-400">
                            <th className="pb-2 font-medium">Item</th>
                            {sortedTotals.map((st) => (
                              <th key={st.store.id} className="pb-2 text-right font-medium">
                                {st.store.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((ci) => {
                            const product = getProduct(ci.productId);
                            return (
                              <tr key={ci.productId} className="border-b border-gray-50">
                                <td className="py-2.5 font-medium text-gray-900">
                                  {product?.name ?? ci.productName}
                                </td>
                                {sortedTotals.map((st) => {
                                  const itemPrice = st.items.find(
                                    (i) => i.product.id === ci.productId
                                  );
                                  // Find min price for this item across stores
                                  const pricesForItem = sortedTotals
                                    .map((t) =>
                                      t.items.find((i) => i.product.id === ci.productId)
                                    )
                                    .filter((p): p is NonNullable<typeof p> => p !== null);
                                  const minPrice = Math.min(...pricesForItem.map((p) => p.price));
                                  const isBestPrice = itemPrice && itemPrice.price === minPrice;

                                  return (
                                    <td
                                      key={st.store.id}
                                      className={`py-2.5 text-right tabular-nums ${
                                        itemPrice
                                          ? isBestPrice
                                            ? "font-semibold text-emerald-600"
                                            : "text-gray-700"
                                          : "text-gray-300"
                                      }`}
                                    >
                                      {itemPrice ? (
                                        <span className="inline-flex items-center gap-1">
                                          ${itemPrice.price.toFixed(2)}
                                          {isBestPrice && (
                                            <svg className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                              <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                fillRule="evenodd"
                                              />
                                            </svg>
                                          )}
                                        </span>
                                      ) : (
                                        "—"
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}

              {/* Inline Ad */}
              <AdSlot size="banner" />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Sidebar Ad */}
              <AdSlot size="sidebar" />

              {/* Quick Summary Card */}
              <div className="card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Price Rank
                </h3>
                <div className="mt-4 space-y-3">
                  {sortedTotals.map((st, i) => (
                    <div key={st.store.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {st.store.name}
                        </span>
                        {i === 0 && savings > 0 && (
                          <span className="badge badge-best text-xs">Best</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        ${st.total.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Another Ad */}
              <AdSlot size="square" label="Promoted" />

              {/* Tips */}
              <div className="card bg-emerald-50 border-emerald-200">
                <h3 className="text-sm font-semibold text-emerald-800">
                  💡 Pro Tips
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-emerald-700">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Buy produce at the cheapest store and bulk items at Walmart</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Store brands are often 20-30% cheaper than name brands</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Check weekly ads — prices update every Tuesday</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link to="/cart" className="btn-secondary px-8 py-3">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add More Items & Re-compare
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-gray-400 sm:px-6">
          <span>CartCompare — Find the cheapest store</span>
          <Link to="/" className="hover:text-gray-600">Home</Link>
        </div>
      </footer>
    </div>
  );
}