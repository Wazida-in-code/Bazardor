import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F3FBF4] px-4 text-center">
      <h1 className="text-8xl font-extrabold text-[#07883D]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-[#26332B]">
        পেজটি খুঁজে পাওয়া যায়নি!
      </h2>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#07883D] px-6 py-3 font-semibold text-white transition hover:bg-[#056B30]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;