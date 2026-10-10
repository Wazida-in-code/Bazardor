import Image from "next/image";
import Header from "./Header";
import { Suspense } from "react";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";

const Navbar = async () => {
  const time = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav className="w-full overflow-x-clip">
      <div className="border-b border-gray-300">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-6">
          <div className="flex min-w-0 items-center gap-2 py-3 sm:gap-3 sm:py-4">
            <Image
              className="shrink-0 rounded-xl bg-green-800 p-2 sm:p-3"
              src={"/logo-icon.png"}
              width={50}
              height={40}
              alt="logo"
            />

            <div className="min-w-0">
              <h2 className="text-xl font-bold sm:text-2xl">বাজার দর</h2>
              <p className="text-sm text-[#1D271F] sm:text-base">{time}</p>
            </div>
          </div>

          <div className="shrink-0">
            <UserInfo />
          </div>
        </div>
      </div>

      <Header />

      <Suspense fallback="loading">
        <Marquee />
      </Suspense>
    </nav>
  );
};

export default Navbar;
