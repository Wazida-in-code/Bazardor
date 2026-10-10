"use client";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  return (
    <div className="w-full bg-[#E1E8E1] px-3 sm:px-5">
      <div className="mx-auto mt-10 mb-10 w-full max-w-[540px] space-y-4 sm:mt-16 sm:mb-16">
        <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>

        <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

        {/* Profile Card */}
        <div className="flex flex-col gap-4 rounded-xl border border-[#E0E8E0] bg-[#FAFCFA] p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <img
              alt={user?.name}
              src={user?.image as string}
              className="h-[52px] w-[60px] shrink-0 rounded-xl object-cover"
            />

            <div className="min-w-0">
              <h2 className="truncate text-sm font-bold text-[#26332B]">
                {user?.name}
              </h2>

              <p className="mt-1 truncate text-xs text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="shrink-0 self-start rounded-lg border border-red-400 px-3 py-2 text-xs text-red-500 hover:bg-red-50 sm:self-auto"
          >
            ↩ সাইন আউট
          </button>
        </div>

        {/* Information Card */}
        <div className="rounded-xl border border-[#E0E8E0] bg-[#FAFCFA] p-3 sm:p-5">
          <h3 className="mb-6 text-sm font-bold text-[#26332B]">তথ্য</h3>

          <form onSubmit={handleUpdateProfile} className="px-1 sm:px-3">
            <label htmlFor="name" className="mb-1 block text-xs text-[#26332B]">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              className="mb-3 h-[30px] w-full rounded-lg border border-[#DFE7DF] px-3 text-sm outline-none focus:border-green-600"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#07883D] py-2 text-xs font-medium text-white hover:bg-[#067532]"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
