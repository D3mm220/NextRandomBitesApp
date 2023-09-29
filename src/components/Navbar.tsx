import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-[#FF1E00] h-24 justify-between items-center px-10 text-black font-semibold">
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
        <Link href="/" className="text-2xl">
          Home
        </Link>
        <Link href="/find" className="text-2xl">
          Find
        </Link>
      </div>
    </nav>
  );
};
