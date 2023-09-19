import { placeIdResult } from "../types/typesPlaceId"
import { typesResult } from "../types/typesPlaces"
import Image from "next/image";

export const Cardaaa = (props: { currentPlace: typesResult, currentPlaceId : placeIdResult, fetchedPhoto: string, index: number, handleAnterior: () => void, handleSiguiente: () => void }) => {
  const { currentPlace, currentPlaceId, fetchedPhoto, index, handleAnterior, handleSiguiente } = props
  return (
    <div>
          <h2 className="text-green-800">Lugar: {currentPlace.name}</h2>
          <p className="text-blue-800">Direccion: {currentPlaceId.formatted_address}</p>
          {
            fetchedPhoto &&
            <Image src={fetchedPhoto} alt={fetchedPhoto} width={400} height={400}/>
          }
          {
            index > 0 ? <button onClick={handleAnterior} className="bg-pink-400 rounded">Anterior</button> : <button disabled className="bg-stone-400 rounded">Anterior</button>
          }
          {
            index < 10 ? <button onClick={handleSiguiente} className="bg-pink-400 rounded">Siguiente</button> : <button disabled className="bg-stone-400 rounded">Siguiente</button>
          }
        
        </div>
  )
}
