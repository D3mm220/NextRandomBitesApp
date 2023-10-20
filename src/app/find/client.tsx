"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { typesResult } from "@/src/types/typesPlaces";
import { Photo, placeIdResult } from "@/src/types/typesPlaceId";
import { Location, typesGeolocation } from "@/src/types/typesGeolocation";
import { Card } from "@/src/components/Card";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";
import RandomBites from "@/public/RandomBites.jpeg";
import { StaticImageData } from "next/image";
import { toast } from "react-toastify";

const Find = ({ user }: { user: User | null }) => {
  if (!user) {
    redirect("/");
  }

  // typesPlaces Array
  // Array{typesPlaces} other form
  const [places, setPlaces] = useState<typesResult[]>([]); // Array de los lugares que devuelve getDataNearbySearch
  const [currentPlace, setCurrentPlace] = useState<typesResult>(); // Objecto del CurrentPlace, parte del array de places
  const [index, setIndex] = useState<number>(0); // Integer helper para la iteration del CurrentPlace
  const [currentId, setCurrentId] = useState<string>(""); // ID del CurrentPlace
  const [currentPlaceId, setCurrentPlaceId] = useState<placeIdResult>(); // ARRAY OF PLACE ID
  const [photos, setPhotos] = useState<Photo[]>([]); // ARRAY OF Photos
  const [indexPhoto, setIndexPhoto] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<string>("");
  const [fetchedPhoto, setFetchedPhoto] = useState<StaticImageData | string>(
    ""
  );
  const [location, setLocation] = useState<Location>(); // Coordenadas del usuario
  const [lastAction, setLastAction] = useState("");

  const [tempPlaces, setTempPlaces] = useState<typesResult[]>([]); // Array de los lugares que devuelve getDataNearbySearch
  const [tempCurrentPlace, setTempCurrentPlace] = useState<typesResult>(); // Objecto del CurrentPlace, parte del array de places
  const [tempIndex, setTempIndex] = useState<number>(0); // Integer helper para la iteration del CurrentPlace
  const [tempCurrentId, setTempCurrentId] = useState<string>(""); // ID del CurrentPlace
  const [tempCurrentPlaceId, setTempCurrentPlaceId] = useState<placeIdResult>(); // ARRAY OF PLACE ID
  const [tempPhotos, setTempPhotos] = useState<Photo[]>([]); // ARRAY OF Photos
  const [tempIndexPhoto, setTempIndexPhoto] = useState<number>(0);
  const [tempCurrentPhoto, setTempCurrentPhoto] = useState<string>("");
  const [tempFetchedPhoto, setTempFetchedPhoto] = useState<
    StaticImageData | string
  >("");

  console.log("🚀Cantidad de lugares", places);
  console.log("🚀CurrentPlace actual: ", currentPlace);
  console.log("🚀posicion del lugar que estamos:", index);
  console.log("🚀 id de la posicion actual:", currentId);
  console.log("🚀placeId de la posicion actual:", currentPlaceId);
  console.log("🚀Cantidad de fotos", photos);
  console.log("🚀Posicion de la foto:", indexPhoto);
  console.log("🚀Foto actual:", currentPhoto);
  console.log("🚀 ~ file: page.tsx:39 ~ Find ~ lastAction:", lastAction);
  console.log(location);

  //console.log("🚀Cantidad de lugares", tempPlaces);
  // console.log("🚀CurrentPlace actual: ", tempCurrentPlace);
  //console.log("🚀posicion del lugar que estamos:", tempIndex);
  //console.log("🚀 id de la posicion actual:", tempCurrentId);
  // console.log("🚀placeId de la posicion actual:", tempCurrentPlaceId);
  //console.log("🚀Cantidad de fotos", tempPhotos);
  //console.log("🚀Posicion de la foto:", tempIndexPhoto);
  // console.log("🚀Foto actual:", tempCurrentPhoto);
  //console.log("🚀 ~ file: page.tsx:39 ~ Find ~ lastAction:", lastAction);

  useEffect(() => {
    const fetchLocation = async () => {
      const apiLocation = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const response = await fetch(apiLocation, {
        method: "POST",
      });
      const data: typesGeolocation = await response.json();
      setLocation(data.location);
    };
    fetchLocation();
  }, []);

  const bringNearbySearch = async () => {
    const dataNearby = await axios.get("/api/datanearbysearch", {
      params: {
        location: location,
      },
    });
    const AxiosData = dataNearby.data.data.results;
    setTempPlaces(AxiosData);
    setTempCurrentPlace(AxiosData[0]);
    setTempCurrentId(AxiosData[0]?.place_id);
  };

  const bringPlaceId = async () => {
    const data = await axios.get("/api/dataplaceid", {
      params: {
        currentId: currentId,
      },
    });
    //const data = await getDataPlaceId(currentId);
    if (data.data.result?.photos === undefined) {
      setTempFetchedPhoto(RandomBites);
      return; // Sal de la función para evitar más actualizaciones innecesarias
    } else {
      setTempCurrentPlaceId(data.data.result);
      setTempPhotos(data.data.result.photos);
      setTempCurrentPhoto(data.data.result.photos[0].photo_reference);
      setTempIndexPhoto(0);
    }
  };

  const bringPhoto = async () => {
    const data = await axios.get("/api/placephoto", {
      params: {
        tempCurrentPhoto: tempCurrentPhoto,
      },
    });
    setTempFetchedPhoto(data.data);
  };

  useEffect(() => {
    if (location !== undefined) {
      bringNearbySearch();
    }
  }, [location]);

  useEffect(() => {
    if (places.length > 0) {
      setCurrentPlace(places[index]);
      setCurrentId(places[index]?.place_id);
    }
  }, [index, places]);

  useEffect(() => {
    currentId !== "" && bringPlaceId();
  }, [currentId, index, places]);

  useEffect(() => {
    tempCurrentPhoto !== "" && bringPhoto();
  }, [currentPhoto]);

  useEffect(() => {
    if (indexPhoto >= 0 && indexPhoto < photos.length) {
      setCurrentPhoto(photos[indexPhoto].photo_reference);
    }
  }, [indexPhoto, photos]);

  const allPromises = Promise.all([
    bringNearbySearch(),
    bringPlaceId(),
    bringPhoto(),
  ]);

  allPromises.then(() => {
    setPlaces(tempPlaces);
    setCurrentPlace(tempCurrentPlace);
    setCurrentId(tempCurrentId);
    setFetchedPhoto(tempFetchedPhoto); //
    setCurrentPlaceId(tempCurrentPlaceId);
    setPhotos(tempPhotos);
    setCurrentPhoto(tempCurrentPhoto);
    setIndexPhoto(tempIndexPhoto);
  });

  const handlePhotoAnterior = () => {
    indexPhoto > 0 && setIndexPhoto(indexPhoto - 1);
  };

  const handlePhotoSiguiente = () => {
    indexPhoto < photos.length - 1 && setIndexPhoto(indexPhoto + 1);
  };

  const handleSiteAnterior = () => {
    index > 0 && setIndex(index - 1);
    setLastAction("handleSiteAnterior");
    setPhotos([]);
  };

  const handleSiteSiguiente = () => {
    index < places.length - 1 && setIndex(index + 1);
    setLastAction("handleSiteSiguiente");
    setPhotos([]);
  };

  return (
    <>
      {currentPlace && currentPlaceId && fetchedPhoto && (
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
    </>
  );
};

export default Find;
