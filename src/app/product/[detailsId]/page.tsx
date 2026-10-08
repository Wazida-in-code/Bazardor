


const ProductDetailsPage = async ({params}:{params : {detailsId:string}}) => {
    const {detailsId} = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${detailsId}`);
    const data = await res.json();
    const market = data.markets
    console.log(market);
    return (
        <div className="min-h-screen bg-[#F3FBF4] px-3 py-5 sm:px-5">
  <div className="mx-auto w-full max-w-5xl rounded-xl border border-[#DDE8DF] bg-white p-4 shadow-sm sm:p-6">
    
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      
      {/* Image + Information */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F1F7F2] sm:h-16 sm:w-16">
          <span className="text-3xl">
            {data.image}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="text-lg font-bold text-[#202820] sm:text-2xl">
            {data.nameBn}
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            প্রতি {data.unit} {data.categoryNameBn}
          </p>

          <p className="mt-1 text-[10px] text-gray-600 sm:text-xs">
            {data.change.dir === "up" ? (
              <p>
                {`গতকালের তুলনায় আজ দাম বেড়েছে · ${
                  data.today - data.yesterday
                } টাকা`}
              </p>
            ) : ""}

            {data.change.dir === "down" ? (
              <p>
                {`গতকালের তুলনায় আজ দাম কমেছে · ${
                  data.yesterday - data.today
                } টাকা`}
              </p>
            ) : ""}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="w-full rounded-xl bg-[#F1F7F2] px-5 py-3 text-center sm:w-auto sm:min-w-[100px]">
        <p className="text-[10px] text-gray-500 sm:text-xs">
          আজকের দাম
        </p>

        <p className="text-2xl font-bold leading-tight text-[#202820] sm:text-3xl">
          {data.today}
        </p>

        <p className="text-[10px] text-gray-500 sm:text-xs">
          টাকা / {data.unit}
        </p>

        <p className="mt-1">
          {data?.change.dir === "up" ? (
            <p className="text-xs font-bold text-red-500 sm:text-sm">
              ▲ {data?.change.pct}%
            </p>
          ) : (
            ""
          )}

          {data?.change.dir === "down" ? (
            <p className="text-xs font-bold text-green-500 sm:text-sm">
              ▼ {data?.change.pct}%
            </p>
          ) : (
            ""
          )}

          {data?.change.dir === "flat" ? (
            <p className="text-xs font-bold text-gray-800 sm:text-sm">
              - {data?.change.pct}%
            </p>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default ProductDetailsPage;