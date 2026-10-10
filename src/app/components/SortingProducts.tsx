"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

interface AllProductInterface {
  id: number;
  image: string;
  nameBn: string;
  today: string;
  change: {
    dir: string;
    pct: number;
  };
}

const SortingProducts = ({
  allProducts,
}: {
  allProducts: AllProductInterface[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  console.log(allProducts);

  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return Number(a.today) - Number(b.today);
    } else {
      return Number(b.today) - Number(a.today);
    }
  });

  return (
    <div className="mt-4">
      <div className="flex justify-end rounded-xl border border-[#DDE7DF] bg-[#FBFCFB] px-4 py-3">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#DDE7DF] bg-white px-3 py-2 text-sm text-[#26332B] cursor-pointer hover:bg-[#F5F8F5]"
          >
            ডিফল্ট
            <IoChevronDown size={16} />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-[#DDE7DF] bg-white py-1 shadow-lg">
              <button
                onClick={() => setSortOption("default")}
                className="w-full flex gap-3 items-center bg-[#F0F7F1] px-4 py-2.5 text-left text-sm font-medium text-[#07883D]"
              >
                <FaCheck size={14} />
                ডিফল্ট
              </button>

              <button
                onClick={() => {setSortOption("lowToHigh"); setIsOpen(false) }}
                className="w-full px-4 py-2.5 text-left text-sm text-[#26332B] hover:bg-[#F0F7F1]"
              >
                দাম কম থেকে বেশি
              </button>

              <button
                onClick={() => {setSortOption("highToLow"); setIsOpen(false)}}
                className="w-full px-4 py-2.5 text-left text-sm text-[#26332B] hover:bg-[#F0F7F1]"
              >
                দাম বেশি থেকে কম
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
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

                <p className="text-xs text-gray-500">প্রতি কেজি</p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-[11px] text-gray-500">আজকের দাম</p>

                <p className="text-lg font-bold text-[#17221b]">
                  {product.today} টাকা
                </p>
              </div>

              {/* Price Change */}
              <div className="rounded-full bg-[#f1f7f2] px-3 py-2">
                <p>
                  {product?.change.dir === "up" ? (
                    <span className="text-sm font-bold text-red-500">
                      ▲ {product?.change.pct}%
                    </span>
                  ) : (
                    ""
                  )}
                  {product?.change.dir === "down" ? (
                    <span className="text-sm font-bold text-green-500">
                      {" "}
                      ▼ {product?.change.pct}%
                    </span>
                  ) : (
                    ""
                  )}
                  {product?.change.dir === "flat" ? (
                    <span className="text-sm font-bold text-gray-800">
                      {" "}
                      - {product?.change.pct}%
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingProducts;
