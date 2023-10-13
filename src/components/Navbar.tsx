import Image from "next/image";
import Link from "next/link";
import { LoginModal } from "./auth/LoginModal";
import { SignUpModal } from "./auth/SignUpModal";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { SignOutBtn } from "./auth/SignOutBtn";
import Toast from "../components/Toast";

export const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("The session ", user);
  console.log(typeof user);
  return (
    <>
      <nav className="flex bg-[#FF1E00] h-24  justify-between items-center px-10 text-black font-semibold border-b-2 border-black">
        <div className="left-side">
          <Link href="/">
            <Image
              src="/RandomBites.svg"
              alt="Random Bites Logo"
              width={80}
              height={80}
            ></Image>
          </Link>
        </div>
        <div className="right-side flex gap-5">
          <Link href="/" className="text-2xl hover:bg-red-600 ">
            Home
          </Link>
          {user !== null ? (
            <>
              <Link href="/find" className="text-2xl  hover:bg-red-600">
                Find
              </Link>
              <SignOutBtn />
            </>
          ) : (
            <>
              <LoginModal />
              <SignUpModal />
            </>
          )}
        </div>
      </nav>
    </>
  );
};
