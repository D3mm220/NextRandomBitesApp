import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  //if (!session) {
  // this is a protected route - only users who are signed in can view this route
  //}

  return (
    <div className=" text-black flex flex-col ">
      <h1 className="text-6xl flex justify-center pt-6 pb-4 font-serif font-semibold">
        Random Bites
      </h1>
      <div className="flex justify-center items-center">
        <Image
          src="/RandomBites.svg"
          alt="Random Bites logo"
          width={300}
          height={300}
        />
      </div>
      <div>
        <div className="flex justify-end ">
          <Image
            src="/photo3.png"
            alt="PageRB"
            width={4000}
            height={0}
            style={{ marginRight: "-40%" }}
          />
        </div>
        <div className="flex justify-start">
          <Image src="/photo2.png" alt="pcRB" width={1500} height={0} />
        </div>
      </div>
    </div>
  );
}
