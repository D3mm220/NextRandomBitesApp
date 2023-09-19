"use client"

import { useState, useEffect } from "react";
import { getDataNearbySearch, getDataPlaceId, getPlacePhoto, getLocation } from "@/src/app/api/GetData";
import { typesResult } from "@/src/types/typesPlaces";
import { Photo, placeIdResult } from "@/src/types/typesPlaceId";
import { Cardaaa } from "@/src/components/Cardaaa";
import { Location } from "@/src/types/typesGeolocation";
import Link from "next/link";

const Home = () => {
  // typesPlaces Array
  // Array{typesPlaces} other form
  const [ places, setPlaces ] = useState<typesResult[]>([]) // Array de los lugares que devuelve getDataNearbySearch
  const [ currentPlace, setCurrentPlace ] = useState<typesResult>(); // Objecto del CurrentPlace, parte del array de places
  const [ index, setIndex ] = useState<number>(0); // Integer helper para la iteration del CurrentPlace
  const [ currentId, setCurrentId ] = useState<string>("") // ID del CurrentPlace
  const [ currentPlaceId, setCurrentPlaceId ] = useState<placeIdResult>() // ARRAY OF PLACE ID
  const [ photos, setPhotos] = useState<Photo[]>([])
  const [ currentPhoto, setCurrentPhoto] = useState<string>("")
  const [ fetchedPhoto, setFetchedPhoto] = useState<string>("")
  const [ location, setLocation] = useState<Location>() // Coordenadas del usuario
  
  useEffect(() => {
    const bringLocation = async() => {
      const data = await getLocation()
      setLocation(data)
      console.log(data) 
    }
    bringLocation()
  },[ ])


  useEffect(() => {
    if (location !== undefined) {
      const bringNearbySearch = async () => { 
        const data = await getDataNearbySearch(location)
        setPlaces(data.results)
        console.log("BRINGNEARBY: "+location)
        console.log(data.results)
        setCurrentPlace(data.results[0])
        setCurrentId(data.results[0].place_id)
      }
      bringNearbySearch();
    }
  },[location])

  useEffect(() => {
    if (places.length > 0) {
      setCurrentPlace(places[index])
      setCurrentId(places[index].place_id)
    }  
  },[index,places])

  useEffect(() => {
    const bringPLaceId = async () => {
      const data = await getDataPlaceId(currentId);
      setCurrentPlaceId(data.result)
      setPhotos(data.result.photos)
      setCurrentPhoto(data.result.photos[0].photo_reference)
    }
    currentId !== "" && bringPLaceId()
  },[index, currentId])

  useEffect(() => {
    const bringPhoto = async() => {
      const data = await getPlacePhoto(currentPhoto)
      setFetchedPhoto(data)
    }
    currentPhoto !== "" && bringPhoto()
  
  },[index, currentPhoto])

  const handleAnterior = () => {
    index > 0 && setIndex(index - 1);
  }

  const handleSiguiente = () => {
    index < 10 && setIndex(index + 1);
  }

  return (
    <div>
      <Link href="/">Go to /</Link>

      <h2 className="bg-stone-500">Search Page</h2>
      {
        currentPlace && currentPlaceId &&
        <Cardaaa currentPlace={currentPlace} currentPlaceId={currentPlaceId} fetchedPhoto={fetchedPhoto} index={index} handleAnterior={handleAnterior} handleSiguiente={handleSiguiente} />
      }
    </div>
  )
}

export default Home
