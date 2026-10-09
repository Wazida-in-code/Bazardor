"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async() => {
    await signOut();
  }

  return (
    <div className="flex gap-5 items-center">
      {user ? (
        <div className="flex items-center">
          <div>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <img alt={user?.name} src={user?.image} />
              </div>
            </div>
            <h2 className="pt-1">{user?.name}</h2>
          </div>
          <button onClick={handleSignOut} className="text-red-700 px-1 py-2 rounded-md hover:bg-gray-200">সাইন আউট ↪</button>
        </div>
      ) : (
        <div>
          <Link
            className="text-[#1D271F] mr-2 px-6 py-2 rounded-md hover:bg-gray-200"
            href={"/sign-in"}
          >
            <button className="cursor-pointer">সাইন ইন</button>
          </Link>
          <Link
            className="bg-[#047F39] px-6 py-2 shadow-gray-600 hover:bg-green-800 text-white rounded-md"
            href={"/sign-up"}
          >
            <button className="cursor-pointer">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
