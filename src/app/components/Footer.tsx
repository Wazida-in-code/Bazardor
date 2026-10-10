import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFCFA]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-3 py-5 text-center sm:px-5 lg:flex-row lg:px-6 lg:text-left">
        <p className="text-sm text-[#1D271F] sm:text-base">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-sm text-[#1D271F] sm:text-base">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;