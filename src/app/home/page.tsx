"use client"

import { useState, useEffect } from "react";

import { getDataNearbySearch, getDataPlaceId, getPlacePhoto, getLocation } from "../api/GetData";
import { typesResult } from "../types/typesPlaces";
import { Photo, placeIdResult } from "../types/typesPlaceId";
import Image from "next/image";
import { Location } from "../types/typesGeolocation";

const Home = () => {

  // typesPlaces Array
  // Array{typesPlaces} other form
  const [ places, setPlaces ] = useState<typesResult[]>([]) // Array of places
  const [ currentPlace, setCurrentPlace ] = useState<typesResult>(); // Object of current place
  const [ index, setIndex ] = useState<number>(0); // Int helper for iteration of current place
  const [ currentId, setCurrentId ] = useState<string>("") // ID OF CURRENT PLACE
  const [ currentPlaceId, setCurrentPlaceId ] = useState<placeIdResult>() // ARRAY OF PLACE ID
  const [ photos, setPhotos] = useState<Photo[]>([])
  const [ currentPhoto, setCurrentPhoto] = useState<string>("")
  const [ fetchedPhoto, setFetchedPhoto] = useState<string>("")
  const [ location, setLocation] = useState<Location>()
  
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
      <h2 className="bg-stone-500">Search Page</h2>
      {
        currentPlace && currentPlaceId &&
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
      }
    </div>
  )
}

export default Home
