import { Suspense } from "react";
import HeaderLinks from "./HeaderLinks";

export interface navItemType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Header = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { cache: "no-store" },
  );

  const navItems: navItemType[] = await res.json();

  return (
    <Suspense fallback="loading">
      <div className="w-full border-b border-gray-300">
        <header className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6">
          <HeaderLinks navItems={navItems} />
        </header>
      </div>
    </Suspense>
  );
};

export default Header;
