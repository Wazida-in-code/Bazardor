interface MarketType {
  market: string;
  division: string;
  min: number;
  max: number;
}

const ProductDetailsPage = async ({
  params,
}: {
  params: { detailsId: string };
}) => {
  const { detailsId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${detailsId}`,
  );
  const data = await res.json();
  const markets: MarketType[] = data.markets;
  const lowestPrice = Math.min(...markets.map((market) => market.min));
  const highestPrice = Math.max(...markets.map((market) => market.max));
  console.log(highestPrice);
  return (
    <div className="min-h-screen bg-[#F3FBF4] px-3 py-5 sm:px-5">
      <div className="mx-auto w-full max-w-5xl rounded-xl border border-[#DDE8DF] bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Image + Information */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F1F7F2] sm:h-16 sm:w-16">
              <span className="text-3xl">{data.image}</span>
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-bold text-[#202820] sm:text-2xl">
                {data.nameBn}
              </h2>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                প্রতি {data.unit} {data.categoryNameBn}
              </p>

              <span className="mt-1 text-[10px] text-gray-600 sm:text-xs">
                {data.change.dir === "up" ? (
                  <span>
                    {`গতকালের তুলনায় আজ দাম বেড়েছে · ${
                      data.today - data.yesterday
                    } টাকা`}
                  </span>
                ) : (
                  ""
                )}

                {data.change.dir === "down" ? (
                  <span>
                    {`গতকালের তুলনায় আজ দাম কমেছে · ${
                      data.yesterday - data.today
                    } টাকা`}
                  </span>
                ) : (
                  ""
                )}

                {data.change.dir === "flat" ? (
                  <span>
                    {"পণ্যটির দাম পরিবর্তন হয়নি"}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="w-full rounded-xl bg-[#F1F7F2] px-5 py-3 text-center sm:w-auto sm:min-w-[100px]">
            <p className="text-[10px] text-gray-500 sm:text-xs">আজকের দাম</p>

            <p className="text-2xl font-bold leading-tight text-[#202820] sm:text-3xl">
              {data.today}
            </p>

            <p className="text-[10px] text-gray-500 sm:text-xs">
              টাকা / {data.unit}
            </p>

            <p className="mt-1">
              {data?.change.dir === "up" ? (
                <span className="text-xs font-bold text-red-500 sm:text-sm">
                  ▲ {data?.change.pct}%
                </span>
              ) : (
                ""
              )}

              {data?.change.dir === "down" ? (
                <span className="text-xs font-bold text-green-500 sm:text-sm">
                  ▼ {data?.change.pct}%
                </span>
              ) : (
                ""
              )}

              {data?.change.dir === "flat" ? (
                <span className="text-xs font-bold text-gray-800 sm:text-sm">
                  - {data?.change.pct}%
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl mt-6 rounded-2xl border border-[#DDE7DF] bg-white p-4 sm:p-5 lg:p-6">
        <div>
          <p className="mb-4 text-base font-semibold text-[#26352A] sm:text-lg">
            দামের সারসংক্ষেপ
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#DDE7DF] p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>

              <p className="mt-1 text-xl font-bold text-green-600 sm:text-2xl">
                {lowestPrice} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-[#DDE7DF] p-4">
              <p className="text-xs text-gray-500">সর্বাধিক দাম</p>

              <p className="mt-1 text-xl font-bold text-red-500 sm:text-2xl">
                {highestPrice} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="rounded-xl border border-[#DDE7DF] p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>

              <p className="mt-1 text-xl font-bold text-green-600 sm:text-2xl">
                {(highestPrice + lowestPrice) / 2} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                প্রতি {data.unit}-এর হিসাবে
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-4 text-base font-semibold text-[#26352A] sm:text-lg">
            বাজারভিত্তিক আজকের দাম
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#DDE7DF]">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F3F7F3] text-left text-gray-600">
                  <th className="px-3 py-3 font-medium sm:px-4">বাজার</th>

                  <th className="px-3 py-3 font-medium sm:px-4">বিভাগ</th>

                  <th className="px-3 py-3 text-right font-medium sm:px-4">
                    সর্বনিম্ন
                  </th>

                  <th className="px-3 py-3 text-right font-medium sm:px-4">
                    সর্বাধিক
                  </th>

                  <th className="px-3 py-3 text-right font-medium sm:px-4">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {[...data.markets]
                  .sort((a: MarketType, b: MarketType) => {
                    if (a.min !== b.min) {
                      return a.min - b.min;
                    }

                    if (a.max !== b.max) {
                      return a.max - b.max;
                    }

                    const averageA = (a.min + a.max) / 2;
                    const averageB = (b.min + b.max) / 2;

                    return averageA - averageB;
                  })
                  .map((market: MarketType, index: number) => (
                    <tr
                      key={index}
                      className="border-t border-[#DDE7DF] hover:bg-[#F8FBF8]"
                    >
                      <td className="px-3 py-3 text-gray-700 sm:px-4">
                        {market.market}
                      </td>

                      <td className="px-3 py-3 text-gray-700 sm:px-4">
                        {market.division}
                      </td>

                      <td className="px-3 py-3 text-right text-gray-700 sm:px-4">
                        {market.min} টাকা
                      </td>

                      <td className="px-3 py-3 text-right text-gray-700 sm:px-4">
                        {market.max} টাকা
                      </td>

                      <td className="px-3 py-3 text-right font-medium text-gray-800 sm:px-4">
                        {((market.min + market.max) / 2).toFixed(0)} টাকা
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
