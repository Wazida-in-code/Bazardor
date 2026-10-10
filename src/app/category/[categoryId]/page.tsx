import SortingProducts from "@/app/components/SortingProducts";

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
  const allProducts: AllProductInterface[] = await res.json();
  // const allProducts = allProductType.map(products => products)

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

        <p className="mt-4 text-xs text-gray-500">
          মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <SortingProducts allProducts={allProducts} />
      </div>
    </div>
  );
};

export default categoryPage;
