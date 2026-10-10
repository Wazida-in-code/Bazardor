
const Loading = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#F0F5F0] text-gray-800">
      {/* Navbar skeleton */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 w-11/12 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-2 w-32 rounded bg-gray-200" />
            </div>
          </div>

          <div className="h-8 w-20 rounded-lg bg-gray-200" />
        </div>

        {/* Category navigation */}
        <div className="mx-auto flex w-11/12 gap-4 overflow-hidden py-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-16 shrink-0 rounded-md bg-gray-200"
            />
          ))}
        </div>
      </header>

      {/* Price ticker */}
      <div className="flex gap-6 overflow-hidden border-b border-gray-200 bg-white px-4 py-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 w-40 shrink-0 rounded bg-gray-200" />
        ))}
      </div>

      {/* Main content */}
      <main className="mx-auto min-h-[540px] w-11/12 max-w-5xl py-6">
        {/* Category heading */}
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
          <div className="space-y-2">
            <div className="h-5 w-20 rounded bg-gray-200" />
            <div className="h-3 w-44 max-w-full rounded bg-gray-200" />
          </div>
        </div>

        {/* Sorting bar */}
        <div className="mt-4 flex h-11 items-center justify-end rounded-xl border border-gray-200 bg-white px-4">
          <div className="h-6 w-24 rounded-md bg-gray-200" />
        </div>

        {/* Product count */}
        <div className="mb-3 mt-4 h-3 w-36 rounded bg-gray-200" />

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-3"
            >
              {/* Product name and icon */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gray-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-28 max-w-full rounded bg-gray-200" />
                  <div className="h-3 w-16 rounded bg-gray-200" />
                </div>
              </div>

              {/* Market price */}
              <div className="mt-4 space-y-2">
                <div className="h-3 w-20 rounded bg-gray-200" />
                <div className="flex items-center justify-between">
                  <div className="h-5 w-16 rounded bg-gray-200" />
                  <div className="h-5 w-12 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer skeleton */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex min-h-12 w-11/12 flex-wrap items-center justify-between gap-3 py-3">
          <div className="h-3 w-48 rounded bg-gray-200" />
          <div className="h-3 w-52 rounded bg-gray-200" />
        </div>
      </footer>
    </div>
  );
};

export default Loading;