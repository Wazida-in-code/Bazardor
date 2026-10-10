

const loading = () => {
    return (
           <div className="min-h-screen animate-pulse bg-[#F3FBF4] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Breadcrumb Skeleton */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>

        {/* Product Information Skeleton */}
        <div className="rounded-2xl border border-[#DDE7DF] bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            {/* Product Icon */}
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-gray-200 sm:h-24 sm:w-24" />

            <div className="flex-1 space-y-3">
              <div className="h-6 w-2/3 max-w-64 rounded bg-gray-200" />
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-9 w-40 rounded bg-gray-200" />
              <div className="h-4 w-48 max-w-full rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Price Summary Skeleton */}
        <div className="rounded-2xl border border-[#DDE7DF] bg-white p-4 sm:p-6">
          <div className="mb-5 h-6 w-40 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Lowest, Highest & Average Price */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#DDE7DF] p-4"
              >
                <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
                <div className="mb-3 h-7 w-32 max-w-full rounded bg-gray-200" />
                <div className="h-3 w-36 max-w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Market Table Skeleton */}
          <div className="mt-7">
            <div className="mb-4 h-6 w-48 rounded bg-gray-200" />

            <div className="overflow-hidden rounded-xl border border-[#DDE7DF]">
              {/* Table Header */}
              <div className="flex gap-5 bg-[#F3F7F3] px-4 py-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-4 min-w-16 flex-1 rounded bg-gray-200"
                  />
                ))}
              </div>

              {/* Table Rows */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-t border-[#DDE7DF] px-4 py-4"
                >
                  {[1, 2, 3, 4, 5].map((col) => (
                    <div
                      key={col}
                      className="h-4 min-w-16 flex-1 rounded bg-gray-200"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Product Details Skeleton */}
        <div className="rounded-2xl border border-[#DDE7DF] bg-white p-5 sm:p-6">
          <div className="mb-5 h-6 w-44 rounded bg-gray-200" />

          <div className="space-y-4">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        </div>

      </div>
    </div>
    );
};

export default loading;