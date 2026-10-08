import Link from "next/link";

interface navItemType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Header = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const navItems: navItemType[] = await res.json();

  return (
    <div>
      <header className="w-[520px] lg:w-11/12 xl:max-w-7xl mx-auto">
        <div className="flex gap-10 border-b border-gray-200">
          {navItems.map((item) => (
            <Link
              className={`my-2 lg:my-2 ${item?.slug === ""
      ? "bg-green-500"
      : "bg-white"}`}
              key={item?.id}
              href={`/category/${item?.slug}`}
            >
              <div className="flex">
                <p>{item?.icon}</p>
                <p>{item?.nameBn}</p>
              </div>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
