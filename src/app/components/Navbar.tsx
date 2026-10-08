'use client'
import Image from "next/image";
import Header from "./Header";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <nav>
      <div className="border-b border-gray-300">
        <div className="w-11/12 mx-auto flex gap-2 p-4">
          <Image
            className="bg-green-800 p-3 rounded-xl"
            src={"/logo-icon.png"}
            width={50}
            height={40}
            alt="logo"
          ></Image>

          <div>
            <h2 className="font-bold text-2xl">বাজার দর</h2>
            <p className="text-[#1D271F]">{date}</p>
          </div>
        </div>
      </div>
        <Header />
    </nav>
  );
};

export default Navbar;
