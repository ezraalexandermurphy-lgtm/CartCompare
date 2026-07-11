export function AdSlot({ size = "square", label = "Sponsored" }: { size?: "banner" | "square" | "sidebar"; label?: string }) {
  const sizeClasses = {
    banner: "w-full h-24",
    square: "w-full max-w-xs h-64",
    sidebar: "w-full h-72",
  };

  const gradientFrom = label === "Sponsored" ? "from-green-50" : "from-emerald-50";
  const gradientTo = label === "Sponsored" ? "to-green-100" : "to-emerald-100";

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl border-2 border-dashed border-green-200 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex flex-col items-center justify-center gap-2 p-4`}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-green-400">
        {label}
      </span>
      <div className="flex items-center gap-2 text-green-300">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span className="text-sm text-green-400">Ad Placeholder</span>
      </div>
      <p className="text-xs text-green-300">Your ad here</p>
    </div>
  );
}