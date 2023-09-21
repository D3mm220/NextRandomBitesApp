import { placeIdResult } from "../types/typesPlaceId"
import { typesResult } from "../types/typesPlaces"
import Image from "next/image";

export const Card = (props: { currentPlace: typesResult, currentPlaceId : placeIdResult, fetchedPhoto: string, index: number, handleSiteAnterior: () => void, handleSiteSiguiente: () => void, places : [], handlePhotoSiguiente: () => void, handlePhotoAnterior: () => void, indexPhoto : number, photos : [] }) => {
  const { currentPlace, currentPlaceId, fetchedPhoto, index, handleSiteAnterior, handleSiteSiguiente, handlePhotoAnterior, handlePhotoSiguiente, places, indexPhoto, photos} = props
  return (
    <div className="card flex flex-col justify-center items-center ">
          <h2 className="text-green-800 text-3xl">Lugar: {currentPlace.name}</h2>
          <p className="text-blue-800 text-3xl" >Direccion: {currentPlaceId.formatted_address}</p>
          {
            fetchedPhoto &&
            <div className="photosPart flex flex-row justify-around items-center">
                {
                  indexPhoto > 0 ? <button onClick={handlePhotoAnterior} className="bg-[#FF1E00] rounded w-20 h-16"> Foto Anterior</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Anterior</button>
                }
              <div className="backgroundImage flex relative bg-black justify-center items-center w-[600px] h-[400px]">
                <Image 
                  src={fetchedPhoto} 
                  alt={fetchedPhoto}
                  fill={true}
                  objectFit={'contain'}
                />
              </div>
              {photos.length}
              {photos[indexPhoto].photo_reference}
              {
              indexPhoto < (photos.length-1) ? <button onClick={handlePhotoSiguiente} className="bg-[#FF1E00] rounded w-20 h-16">Siguiente</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Siguiente</button>
              }
            </div>
          }
          <div className="buttonsCard flex flex-row gap-4">
            {places.length}
            {
              index > 0 ? <button onClick={handleSiteAnterior} className="bg-[#FF1E00] rounded w-20 h-16">Anterior</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Anterior</button>
            }
            {
              index < (places.length-1) ? <button onClick={handleSiteSiguiente} className="bg-[#FF1E00] rounded w-20 h-16">Siguiente</button> : <button disabled className="bg-stone-400 rounded w-20 h-16">Siguiente</button>
            }
          </div>
        </div>
  )
}
