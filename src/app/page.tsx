// 'use client'
import Image from "next/image";
import HighestPrice from "./components/HighestPrice";
import LowestPrice from "./components/LowestPrice";
import AllProduct from "./components/AllProduct";

export default function Home() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="min-h-screen bg-[#f1f7f2] px-6 py-5">
      <div className="mx-auto w-11/12 rounded-[20px] border border-[#dce7df] bg-white px-8 py-6">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="sm:col-span-1 lg:col-span-2">
            <p className="mb-3 inline-block rounded-full bg-[#dff4e7] px-3 py-1 text-sm font-medium text-[#079447]">
              {date}
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-[#202722]">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mb-6 text-sm leading-6 text-[#69736d]">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <a href="#allCards">
              <button className="cursor-pointer rounded-md bg-[#079447] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#067d3b]">
              সব পণ্য দেখুন
            </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="shrink-0 lg:col-span-1">
            <Image
              src={"/bazar-hero.png"}
              alt="বাজারের পণ্য"
              width={310}
              height={270}
              className="object-contain"
            />
          </div>

        </div>
      </div>
      <HighestPrice />
      <LowestPrice />
      <AllProduct />
    </div>
  );
}