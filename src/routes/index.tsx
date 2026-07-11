import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
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
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="btn-primary text-sm"
            >
              Start Comparing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
            <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-green-100/30 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    fillRule="evenodd"
                  />
                </svg>
                Save up to 30% on every grocery trip
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Find the cheapest grocery store{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                  near you
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                Tired of hopping between apps to find the best prices? Enter your
                shopping list once and instantly compare prices across Walmart,
                Kroger, Albertsons, and more. Know exactly where to shop — and
                how much you'll save.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link to="/cart" className="btn-primary px-8 py-3 text-base">
                  Start Your Cart
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/results?items=milk,bread,eggs" className="btn-secondary px-8 py-3 text-base">
                  See Example Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="border-t border-gray-100 bg-white/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-600">
              Three simple steps to start saving on groceries.
            </p>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Add items",
                  description:
                    "Type in your grocery list — milk, bread, eggs, anything. Add items one by one as you would on paper.",
                  icon: (
                    <path
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    />
                  ),
                },
                {
                  step: "2",
                  title: "Compare prices",
                  description:
                    "See every item's price across Walmart, Kroger, Albertsons, Target, and Publix in one clear table.",
                  icon: (
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    />
                  ),
                },
                {
                  step: "3",
                  title: "Save money",
                  description:
                    "Find the cheapest store for your exact list. Know exactly how much you'll save before you leave the house.",
                  icon: (
                    <path
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    />
                  ),
                },
              ].map(({ step, title, description, icon }) => (
                <div key={step} className="card relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">
                      Step {step}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stores We Track */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Stores we compare
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-600">
              Real-time prices from your neighborhood's biggest grocers.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {[
                { name: "Walmart", color: "bg-blue-600" },
                { name: "Kroger", color: "bg-emerald-800" },
                { name: "Albertsons", color: "bg-red-600" },
                { name: "Target", color: "bg-red-700" },
                { name: "Publix", color: "bg-green-700" },
              ].map((store) => (
                <div
                  key={store.name}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${store.color}`}>
                    {store.name[0]}
                  </span>
                  <span className="font-semibold text-gray-900">{store.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-xs font-bold text-white">
                C
              </span>
              <span className="text-sm font-semibold text-gray-700">CartCompare</span>
            </div>
            <p className="text-sm text-gray-500">
              Stop guessing. Start saving.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}