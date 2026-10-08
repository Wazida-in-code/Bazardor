interface ProductType {
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
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const allPrice: ProductType[] = await res.json();
  return allPrice;
};

const AllProduct = async () => {
  const products = await getPrice();
  const prices = products.map((prices) => prices);
  const pricePosition = prices.filter((price) => price.change.dir === "up");
  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <p className="font-bold text-2xl mt-6">সব পণ্য</p>
        <p className="font-semibold text-[#1D271F] mt-3">
          মোট ৩৩টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-[20px] border border-[#dce7df] bg-white p-5"
          >
            {/* Top part */}
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#f1f7f2] text-3xl">
                {product.image}
              </div>

              <div>
                <p className="text-lg font-bold text-[#26332c]">
                  {product.nameBn}
                </p>

                <p className="text-sm text-[#66736b]">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                </p>
              </div>
            </div>

            {/* Bottom part */}
            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-sm text-[#4d5a52]">আজকের দাম</p>

                <p className="mt-1 text-2xl font-bold text-[#26332c]">
                  {product.today} টাকা
                </p>
              </div>

              {/* Price change */}
              <div className="rounded-full bg-[#f1f7f2] px-3 py-2">
                <p>
                  {product.change.dir === "up" ? <p className="text-sm font-bold text-red-500">▲ {product.change.pct}%</p> : <p className="text-sm font-bold text-green-500"> ▼ {product.change.pct}%</p>  }
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
