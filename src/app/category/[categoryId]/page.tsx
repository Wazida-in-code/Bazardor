interface AllProductInterface{
    id: number,
    image: string,
    nameBn: string,
    today: string,
    change: {
      dir: string,
      pct: number
    }
}

const categoryPage = async ({ params }:{params : {categoryId:string}}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const allProductType: AllProductInterface[] = await res.json();
  const allProducts = allProductType.map(products => products)

  const respons = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`)
  const data = await respons.json()
  return (
    <div className="min-h-screen bg-[#f1f7f2] px-4 py-6 lg:px-6">
      <div className="mx-auto w-full max-w-5xl">

        {/* Category Header */}
        <div className="rounded-[14px] border border-[#dce7df] bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3ef] text-2xl">
              {data?.icon}
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#1d2922]">
                {data?.nameBn}
              </h1>

              <p className="text-xs text-gray-500">
                {allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>

        {/* Product Count */}
        <p className="mt-4 text-xs text-gray-500">
          মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>

        {/* Product Cards */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-[14px] border border-[#dce7df] bg-white p-3"
            >
              {/* Product Name */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f3ef] text-xl">
                  {product.image}
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#1d2922]">
                    {product.nameBn}
                  </h2>

                  <p className="text-xs text-gray-500">
                    প্রতি কেজি
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[11px] text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="text-lg font-bold text-[#17221b]">
                    {product.today} টাকা
                  </p>
                </div>

                {/* Price Change */}
                <div className="rounded-full bg-[#f1f7f2] px-3 py-2">
                <p>
                  {product?.change.dir === "up" ? <p className="text-sm font-bold text-red-500">▲ {product?.change.pct}%</p> : "" }
                  {product?.change.dir === "down" ? <p className="text-sm font-bold text-green-500"> ▼ {product?.change.pct}%</p> : ""}
                  {product?.change.dir === "flat" ? <p className="text-sm font-bold"> - {product?.change.pct}%</p> : ""}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default categoryPage;
