"use client";

import { useState, useEffect, use } from "react";
import {
  getDataNearbySearch,
  getDataPlaceId,
  getPlacePhoto,
  getLocation,
} from "@/src/app/api/route";
import { typesResult } from "@/src/types/typesPlaces";
import { Photo, placeIdResult } from "@/src/types/typesPlaceId";
import { Location } from "@/src/types/typesGeolocation";
import { Card } from "@/src/components/Card";
import { Console } from "console";

const Find = () => {
  // typesPlaces Array
  // Array{typesPlaces} other form
  const [places, setPlaces] = useState<typesResult[]>([]); // Array de los lugares que devuelve getDataNearbySearch
  console.log("🚀 ~ file: page.tsx:19 ~ Find ~ places:", places)
  const [currentPlace, setCurrentPlace] = useState<typesResult>(); // Objecto del CurrentPlace, parte del array de places
  console.log("🚀 ~ file: page.tsx:21 ~ Find ~ currentPlace:", currentPlace)
  const [index, setIndex] = useState<number>(0); // Integer helper para la iteration del CurrentPlace
  console.log("🚀 ~ file: page.tsx:23 ~ Find ~ index:", index)
  const [currentId, setCurrentId] = useState<string>(""); // ID del CurrentPlace
  console.log("🚀 ~ file: page.tsx:25 ~ Find ~ currentId:", currentId)
  const [currentPlaceId, setCurrentPlaceId] = useState<placeIdResult>(); // ARRAY OF PLACE ID
  console.log("🚀 ~ file: page.tsx:27 ~ Find ~ currentPlaceId:", currentPlaceId)
  const [photos, setPhotos] = useState<Photo[]>([]); // ARRAY OF Photos
  console.log("🚀 ~ file: page.tsx:29 ~ Find ~ photos:", photos)
  const [indexPhoto, setIndexPhoto] = useState<number>(0);
  console.log("🚀 ~ file: page.tsx:31 ~ Find ~ indexPhoto:", indexPhoto)
  const [currentPhoto, setCurrentPhoto] = useState<string>("");
  console.log("🚀 ~ file: page.tsx:33 ~ Find ~ currentPhoto:", currentPhoto)
  const [fetchedPhoto, setFetchedPhoto] = useState<string>("");
  console.log("🚀 ~ file: page.tsx:35 ~ Find ~ fetchedPhoto:", fetchedPhoto)
  const [location, setLocation] = useState<Location>(); // Coordenadas del usuario
  console.log("🚀 ~ file: page.tsx:37 ~ Find ~ location:", location)
  const [lastAction, setLastAction] = useState(null);
  console.log("🚀 ~ file: page.tsx:39 ~ Find ~ lastAction:", lastAction)
  console.log(places.length)

  //trae las coordenadas
  useEffect(() => {
    const bringLocation = async () => {
      const dataLocation = await getLocation();
      setLocation(dataLocation);
      console.log(dataLocation);
    };
    bringLocation();
  }, []);

  //Trae
  useEffect(() => {
    if (location !== undefined) {
      const bringNearbySearch = async () => {
        const dataNearby = await getDataNearbySearch(location);
        setPlaces(dataNearby.results);
        setCurrentPlace(dataNearby.results[0]);
        setCurrentId(dataNearby.results[0].place_id);
      };
      bringNearbySearch();
    }
  }, [location]);

  console.log(location);

  useEffect(() => {
    if (places.length > 0) {
      setCurrentPlace(places[index]);
      setCurrentId(places[index]?.place_id);
    }
  }, [index, places]);

  useEffect(() => {
    const bringPLaceId = async () => {
      const data = await getDataPlaceId(currentId);
      if (data.result?.photos === undefined) {
        if (lastAction === 'handleSiteAnterior') {
          setIndex(index - 1);
        } else if (lastAction === 'handleSiteSiguiente') {
          if (index === places.length) {
            const updatedPlaces = [...places];
            updatedPlaces.pop();
            setPlaces(updatedPlaces)
            setIndex(index - 2);
          } else {
            setIndex(index + 1);
          }
        }
        return; // Sale de la función para evitar más actualizaciones innecesarias
      }
      setCurrentPlaceId(data.result);
      setPhotos(data.result.photos);
      setCurrentPhoto(data.result.photos[0].photo_reference);
      setIndexPhoto(0);
    };
    currentId !== "" && bringPLaceId();
  }, [currentId]);

  useEffect(() => {
    const bringPhoto = async () => {
      const data = await getPlacePhoto(currentPhoto);
      setFetchedPhoto(data);
    };
    currentPhoto !== "" && bringPhoto();
  }, [currentPhoto]);

  useEffect(() => {
    if (indexPhoto >= 0 && indexPhoto < photos.length) {
      setCurrentPhoto(photos[indexPhoto].photo_reference);
      console.log("Corrio iteracion index photo");
    }
  }, [indexPhoto, photos]);

  const handlePhotoAnterior = () => {
    indexPhoto > 0 && setIndexPhoto(indexPhoto - 1);
  };

  const handlePhotoSiguiente = () => {
    indexPhoto < photos.length - 1 && setIndexPhoto(indexPhoto + 1);
  };

  const handleSiteAnterior = () => {
    index > 0 && setIndex(index - 1);
    setLastAction('handleSiteAnterior');
  };

  const handleSiteSiguiente = () => {
    index < places.length - 1 && setIndex(index + 1);
    setLastAction('handleSiteSiguiente');
  };


  return (
    <div className="bg-[#E8F9FD] max-h-screen">
      {currentPlace && currentPlaceId && (
        <Card
          currentPlace={currentPlace}
          currentPlaceId={currentPlaceId}
          fetchedPhoto={fetchedPhoto}
          index={index}
          handleSiteAnterior={handleSiteAnterior}
          handleSiteSiguiente={handleSiteSiguiente}
          handlePhotoAnterior={handlePhotoAnterior}
          handlePhotoSiguiente={handlePhotoSiguiente}
          places={places}
          indexPhoto={indexPhoto}
          photos={photos}
        />
      )}
      <p className="bg-[#E8F9FD] max-h-screen">
        All photos are taken from the official Google Maps API, Random Bites is
        not responsible for any photos that may appear, contact Google or the
        establishment to improve the quality of service. Random Bites all rights
        reserved ©
      </p>
    </div>
  );
};

export default Find;
