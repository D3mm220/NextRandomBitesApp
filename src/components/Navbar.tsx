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
  //console.log("The session ", user);
  //console.log(typeof user);
  return (
    <>
      <nav className="flex bg-[#ff0000c0] h-20 sm:h-24 w-screen p-8 justify-between items-center text-black font-semibold border-b-2 border-black">
        <div className="left-side px-1 sm:px-3">
          <Link href="/">
            <Image
              src="/RandomBites.svg"
              alt="Random Bites Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="right-side flex gap-2 sm:gap-10 justify-around">
          <Link
            href="/"
            className="text-2xl hover:bg-red-600  hover:font-bold rounded-xl"
          >
            Home
          </Link>
          {user !== null ? (
            <>
              <Link
                href="/find"
                className="text-2xl  hover:bg-red-600 rounded-xl hover:font-bold"
              >
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
