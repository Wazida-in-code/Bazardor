"use client";
import { authClient, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async(e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string}
        console.log(user);

        const {data, error} = await signUp.email({
            ...user,
            callbackURL: "/"
        })
        if (data){
            toast.success("Successfully Sign Up")
            redirect('/');
        };

        if (error){
            toast.error(error.message ?? "Something went wrong!")
        }
  };

  const handleGoogleSignUp = async () => {
      const data = await authClient.signIn.social({
      provider: "google",
    });
    }
  const handleGithubSignUp = async () => {
      const data = await authClient.signIn.social({
      provider: "github",
    });
    }
  


  return (
    <div className="min-h-screen bg-[#F1F6F1] px-4 py-6 flex flex-col items-center">
      <h1 className="mt-5 font-bold text-2xl">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mt-4 mb-4 text-[#1D271F]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div>
        <div className="w-full max-w-[478px] rounded-[20px] border border-[#DCE5DC] bg-[#FAFCFA] px-5 py-7 sm:px-7">
          <form onSubmit={onSubmit}>
            <fieldset>
              <label className="mb-2 block text-[16px] font-medium text-[#26332B]">
                নাম
              </label>
              <input
                type="text"
                name="name"
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full rounded-[10px] border border-[#DCE5DC] bg-transparent px-3.5 py-3 text-sm outline-none focus:border-green-600"
              />
              <label className="mb-2 block text-[16px] font-medium text-[#26332B]">
                ছবি
              </label>
              <input
                type="url"
                name="image"
                placeholder="আপনার ছবি দিন"
                className="w-full rounded-[10px] border border-[#DCE5DC] bg-transparent px-3.5 py-3 text-sm outline-none focus:border-green-600"
              />

              <label className="mb-2 mt-3 block text-[16px] font-medium text-[#26332B]">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-[10px] border border-[#DCE5DC] bg-transparent px-3.5 py-3 text-sm outline-none focus:border-green-600"
              />

              <label className="mb-2 mt-3 block text-[16px] font-medium text-[#26332B]">
                পাসওয়ার্ড
              </label>
              <input
                name="password"
                type="password"
                minLength={8}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full rounded-[10px] border border-[#DCE5DC] bg-transparent px-3.5 py-3 text-sm outline-none focus:border-green-600"
              />

              <label className="mb-2 mt-3 block text-[16px] font-medium text-[#26332B]">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                name="password"
                type="password"
                placeholder="আবার লিখুন"
                className="w-full rounded-[10px] border border-[#DCE5DC] bg-transparent px-3.5 py-3 text-sm outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-[10px] mt-6 bg-[#07883D] py-3 text-base font-semibold text-white shadow-md hover:bg-[#067532]"
              >
                অ্যাকাউন্ট তৈরি করুন
              </button>
            </fieldset>
          </form>
          <div className="my-5 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-[#E0E5E0]" />
            <span className="text-sm text-[#4B554D]">অথবা</span>
            <div className="h-[2px] flex-1 bg-[#E0E5E0]" />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            
            <button onClick={handleGoogleSignUp}
              type="button"
              className="flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-[#DCE5DC] px-3 py-3 text-sm font-semibold text-[#26332B] hover:bg-[#F0F5F0]"
            >
              <FcGoogle size={15} />
              Google দিয়ে চালিয়ে যান
            </button>

            
            <button onClick={handleGithubSignUp}
              type="button"
              className="flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-[#DCE5DC] px-3 py-3 text-sm font-semibold text-[#26332B] hover:bg-[#F0F5F0]"
            >
              <FaGithub size={15} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-[#26332B]">
            অ্যাকাউন্ট আছে?
            <Link
              href="/sign-in"
              className="ml-2 font-medium text-[#07883D] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
        <Link
          href="/"
          className="mt-[20px] ml-[120px] block text-sm text-[#7B857D] hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
