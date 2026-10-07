import Image from "next/image";
import Header from "./Header";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <nav>
      <div className="bg-[#F3FBF4] border-b border-gray-200">
        <div className="flex gap-2 p-4 w-11/12 mx-auto">
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

      <div>
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;
