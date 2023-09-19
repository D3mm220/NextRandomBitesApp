import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="bg-[#E8F9FD] max-h-screen text-black">
      <h1 className="text-6xl flex justify-center pt-6 pb-4 font-serif font-semibold">Random Bites</h1>
      <div className="flex justify-center">
        <Image
          src='/RandomBites.svg'
          alt="Random Bites logo"
          width={300}
          height={300}
        >
        </Image>
        </div>
    </div>
  )
}
