"use client"

import { useState, useEffect, use } from "react";
import { getDataNearbySearch, getDataPlaceId, getPlacePhoto, getLocation } from "@/src/app/api/route";
import { typesResult } from "@/src/types/typesPlaces";
import { Photo, placeIdResult } from "@/src/types/typesPlaceId";
import { Location } from "@/src/types/typesGeolocation";
import { Card } from "@/src/components/Card";

const Find = () => {
  // typesPlaces Array
  // Array{typesPlaces} other form
  const [ places, setPlaces ] = useState<typesResult[]>([]) // Array de los lugares que devuelve getDataNearbySearch
  const [ currentPlace, setCurrentPlace ] = useState<typesResult>(); // Objecto del CurrentPlace, parte del array de places
  const [ index, setIndex ] = useState<number>(0); // Integer helper para la iteration del CurrentPlace
  const [ currentId, setCurrentId ] = useState<string>("") // ID del CurrentPlace
  const [ currentPlaceId, setCurrentPlaceId ] = useState<placeIdResult>() // ARRAY OF PLACE ID
  const [ photos, setPhotos] = useState<Photo[]>([]) // ARRAY OF Photos
  const [ indexPhoto, setIndexPhoto] = useState<number>(0)
  const [ currentPhoto, setCurrentPhoto] = useState<string>("")
  const [ fetchedPhoto, setFetchedPhoto] = useState<string>("")
  const [ location, setLocation] = useState<Location>() // Coordenadas del usuario
  
  console.log()

  //trae las coordenadas
  useEffect(() => {
    const bringLocation = async() => {
      const dataLocation = await getLocation()
      setLocation(dataLocation)
      console.log(dataLocation) 
    }
    bringLocation()
  },[])

  //Trae 
  useEffect(() => {
    if (location !== undefined) {
      const bringNearbySearch = async () => { 
        const dataNearby = await getDataNearbySearch(location)
        setPlaces(dataNearby.results)
        setCurrentPlace(dataNearby.results[0])
        setCurrentId(dataNearby.results[0].place_id)
      }
      bringNearbySearch()
      
    };
  },[location])

  console.log(location)

  useEffect(() => {
    if (places.length > 0) {
      setCurrentPlace(places[index])
      setCurrentId(places[index].place_id)
    }
  },[index,places])

  useEffect(() => {
    const bringPLaceId = async () => {
      const data = await getDataPlaceId(currentId);
      if (data.result.photos === undefined) {
        setIndex(index + 1);
        return; // Sale de la función para evitar más actualizaciones innecesarias
      }
      setCurrentPlaceId(data.result)
      setPhotos(data.result.photos)
      setCurrentPhoto(data.result.photos[0].photo_reference)
      setIndexPhoto(0)
    }
    currentId !== "" && bringPLaceId()
  },[currentId])

  useEffect(() => {
    const bringPhoto = async() => {
      const data = await getPlacePhoto(currentPhoto)
      setFetchedPhoto(data)
    }
    currentPhoto !== "" && bringPhoto()
  },[currentPhoto])

  useEffect(() => {
    if (indexPhoto >= 0 && indexPhoto < photos.length) {
      setCurrentPhoto(photos[indexPhoto].photo_reference);
      console.log("Corrio iteracion index photo")
    }
  }, [indexPhoto, photos]);

  const handlePhotoAnterior = () => {
    indexPhoto > 0 && setIndexPhoto(indexPhoto - 1)
  }

  const handlePhotoSiguiente = () => {
    indexPhoto < (photos.length-1) && setIndexPhoto(indexPhoto + 1)
  }

  const handleSiteAnterior = () => {
    index > 0 && setIndex(index - 1);
  }

  const handleSiteSiguiente = () => {
    index < (places.length-1) && setIndex(index + 1);
  }

  console.log(currentPlaceId?.photos)


  return (
    <div className="bg-[#E8F9FD] max-h-screen">
      {
        currentPlace && currentPlaceId &&
        <Card currentPlace={currentPlace} currentPlaceId={currentPlaceId} fetchedPhoto={fetchedPhoto} index={index} handleSiteAnterior={handleSiteAnterior} handleSiteSiguiente={handleSiteSiguiente} handlePhotoAnterior={handlePhotoAnterior} handlePhotoSiguiente={handlePhotoSiguiente} places={places} indexPhoto={indexPhoto} photos={photos} />
      }
      <p className="bg-[#E8F9FD] max-h-screen">
        All photos are taken from the official Google Maps API, Random Bites is not responsible for any photos that may appear, contact Google or the establishment to improve the quality of service. Random Bites all rights reserved ©
      </p>
    </div>
  )
}

export default Find
