interface LowestPriceType {
  id: number;
  categoryIcon: string;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const getPrice = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );
  const allPrice = await res.json();
  return allPrice;
};

const LowestPrice = async () => {
  const allPrices: LowestPriceType[] = await getPrice();
  const prices = allPrices.map((prices) => prices);
  const upPrice = prices.filter((price) => price.change.dir === "down");
  const mostUpPrice = upPrice.sort((a, b) => a.change.pct - b.change.pct);
  const onlySix = mostUpPrice.slice(0, 6);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex">
        <p className="text-green-600 font-bold text-2xl mt-6">▼</p>
        <p className="font-bold text-2xl mt-6">আজ দাম কমেছে</p>
      </div>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {onlySix.map((allUpPrice) => (
          <div
            key={allUpPrice?.id}
            className="rounded-[20px] border border-[#dce7df] bg-white p-5"
          >
            {/* Top part */}
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#f1f7f2] text-3xl">
                {allUpPrice?.image}
              </div>

              <div>
                <p className="text-lg font-bold text-[#26332c]">
                  {allUpPrice?.nameBn}
                </p>

                <p className="text-sm text-[#66736b]">
                  প্রতি {allUpPrice?.unit === "kg" ? "কেজি" : allUpPrice?.unit}
                </p>
              </div>
            </div>

            {/* Bottom part */}
            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-sm text-[#4d5a52]">আজকের দাম</p>

                <p className="mt-1 text-2xl font-bold text-[#26332c]">
                  {allUpPrice?.today} টাকা
                </p>
              </div>

              {/* Price change */}
              <div className="rounded-full bg-[#f1f7f2] px-3 py-2">
                <p className="text-sm font-bold text-green-500">
                  ▼ {allUpPrice?.change.pct}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowestPrice;
