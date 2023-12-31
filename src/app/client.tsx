"use client";
import Image from "next/image";
import Toast from "../components/Toast";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { useContext } from "react";
import { AccountContext } from "../contexts/AccountContext";

export default function Home({ user }: { user: User | null }) {
  const { setOpenLogin } = useContext(AccountContext);
  return (
    <div className=" w-screen overflow-hidden">
      <div className=" text-black flex flex-col bg-gray-300 ">
        <h1 className="text-6xl flex justify-center items-center text-center pt-6 pb-4 font-serif font-semibold">
          Random Bites
        </h1>

        <div className="flex justify-center items-center overflow-x-hidden">
          <Image
            src="/RandomBites.svg"
            alt="Random Bites logo"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center flex-row items-center pt-20">
          {user ? (
            <Link href={"/find"}>
              <Button className="w-60 h-24 text-4xl">Find Places</Button>
            </Link>
          ) : (
            <Button
              className="w-60 h-24 text-4xl"
              onClick={() => setOpenLogin(true)}
            >
              Login
            </Button>
          )}
        </div>

        <div>
          <div className="p1 flex flex-col text-2xl lg:text-4xl md:text-3xl p-10 lg:p-32 text-center text-black">
            Random Bites nació con el propósito de ayudar a las personas a
            encontrar un nuevo restaurante/ establecimiento de comida de la
            manera más fácil posible, pensado para muchos tipos de usuario que
            vean satisfacer su necesidad de conocer un local nuevo: Desde un
            extranjero en un país con otras lenguas y culturas, viendo donde
            puede comer la comida más relacionada a su país de origen, hasta un
            ciudadano tratando de encontrar un lugar no tan conocido, harto de
            comer siempre lo mismo y revisitar los mismos lugares.
          </div>
          <div className="flex justify-end ">
            <Image
              src="/photo3.png"
              alt="PageRB"
              width={4000}
              height={0}
              style={{ marginRight: "-40%" }}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="p2 flex flex-col text-2xl lg:text-4xl md:text-3xl  p-10 lg:p-40 text-center text-black">
              Random Bites hace mucho énfasis en la optimización del tiempo,
              facilitar la ux para conseguir un lugar para comer lo mas antes
              posible. El padre de esta creación, google maps, abarca todo
              generalmente no haciendo rápida la búsqueda de lugares ni tampoco
              haciendo fácil la UI y UX ya que estás utilizando un mapa y un
              montón de puntitos rojos. En Random Bytes no hay más de un click
              hasta tener un local de comida. Recalcar Random dentro de nuestro
              nombre, no hay futuro en categorizar los lugares, ya que la gracia
              es que sea aleatorio y no haya filtro de búsqueda
            </p>
          </div>
          <div className="flex justify-start">
            <Image src="/photo2.png" alt="pcRB" width={1500} height={0} />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
}
