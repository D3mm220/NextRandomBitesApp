import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="bg-red-700 min-h-screen">
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
