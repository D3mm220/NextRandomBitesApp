import { placeIdResult } from "../types/typesPlaceId"
import { typesResult } from "../types/typesPlaces"
import Image from "next/image";

export const Card = (props: { currentPlace: typesResult, currentPlaceId : placeIdResult, fetchedPhoto: string, index: number, handleAnterior: () => void, handleSiguiente: () => void }) => {
  const { currentPlace, currentPlaceId, fetchedPhoto, index, handleAnterior, handleSiguiente } = props
  return (
    <div className="card flex flex-col justify-center items-center ">
          <h2 className="text-green-800 text-3xl">Lugar: {currentPlace.name}</h2>
          <p className="text-blue-800 text-3xl" >Direccion: {currentPlaceId.formatted_address}</p>
          {
            fetchedPhoto &&
            <div className="backgroundImage flex relative bg-black justify-center items-center w-[600px] h-[400px]">
                <Image 
                  src={fetchedPhoto} 
                  alt={fetchedPhoto} 
                  fill={true}
                  objectFit={'contain'}
                />
            </div>
          }
          <div className="buttonsCard flex flex-row gap-4 pt-7">
            {
              index > 0 ? <button onClick={handleAnterior} className="bg-pink-400 rounded w-20 h-16">Anterior</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Anterior</button>
            }
            {
              index < 10 ? <button onClick={handleSiguiente} className="bg-pink-400 rounded w-20 h-16">Siguiente</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Siguiente</button>
            }
          </div>
        </div>
  )
}
