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

  const defaultPhoto: Photo = {
    height: 100, // Cambia esta altura según tus necesidades
    html_attributions: [], // Puedes dejarlo vacío si no tienes atribuciones
    photo_reference: "/public/photodefault.webp", // Ruta de la imagen predeterminada
    width: 100, // Cambia este ancho según tus necesidades
  };

  console.log("🚀Cantidad de lugares", places);
  console.log("🚀CurrentPlace actual: ", currentPlace);
  console.log("🚀posicion del lugar que estamos:", index);
  // console.log("🚀 id de la posicion actual:", currentId);
  console.log("🚀placeId de la posicion actual:", currentPlaceId);
  console.log("🚀Cantidad de fotos", photos);
  // console.log("🚀Posicion de la foto:", indexPhoto);
  //console.log("🚀Foto actual:", currentPhoto);
  //console.log("🚀 ~ file: page.tsx:39 ~ Find ~ lastAction:", lastAction);
  //odio todo
  console.log(location);

  //trae las coordenadas
  // useEffect(() => {
  //   const bringLocation = async () => {
  //     const dataLocation = await axios.post("/api/location");
  //     console.log(dataLocation.data);
  //     setLocation(dataLocation.data);
  //     //console.log(dataLocation.data);
  //   };
  //   bringLocation();
  // }, []);

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

  //Trae
  useEffect(() => {
    if (location !== undefined) {
      const bringNearbySearch = async () => {
        const dataNearby = await axios.get("/api/datanearbysearch", {
          params: {
            location: location,
          },
        });
        //const dataNearby = await axios.get(location);
        const AxiosData = dataNearby.data.data.results;
        console.log(AxiosData);
        setPlaces(AxiosData);
        setCurrentPlace(AxiosData[0]);
        setCurrentId(AxiosData[0].place_id);
      };
      bringNearbySearch();
    }
  }, [location]);
  // console.log(location);

  useEffect(() => {
    if (places.length > 0) {
      setCurrentPlace(places[index]);
      setCurrentId(places[index]?.place_id);
    }
  }, [index, places]);

  useEffect(() => {
    const bringPLaceId = async () => {
      const data = await axios.get("/api/dataplaceid", {
        params: {
          currentId: currentId,
        },
      });
      //const data = await getDataPlaceId(currentId);
      if (data.data.result?.photos === undefined) {
        setFetchedPhoto(RandomBites);
        // if (lastAction === "handleSiteAnterior" && index > 0) {
        //   // Actualiza el estado después de verificar las condiciones
        //   const newArray = [...places];
        //   newArray.splice(index, 1);
        //   setPlaces(newArray);
        //   setLastAction("handleSiteAnterior");
        //   setIndex(index - 1);
        // } else if (
        //   lastAction === "handleSiteSiguiente" &&
        //   index < places.length - 1
        // ) {
        //   const newArray = [...places];
        //   newArray.splice(index, 1);
        //   setPlaces(newArray);
        //   setLastAction("handleSiteSiguiente");
        //   setIndex(index + 1);
        // } else if (
        //   lastAction === "handleSiteSiguiente" &&
        //   index === places.length
        // ) {
        //   const newArray = [...places];
        //   newArray.pop();
        //   setPlaces(newArray);
        //   setLastAction("handleSiteAnterior");
        //   setIndex(index - 1);
        // } else if (
        //   lastAction === "handleSiteAnterior" &&
        //   index < places.length - 1
        // ) {
        //   setLastAction("handleSiteAnterior");
        //   setIndex(index - 1);
        // }
        return; // Sal de la función para evitar más actualizaciones innecesarias
      } else {
        setCurrentPlaceId(data.data.result);
        setPhotos(data.data.result.photos);
        setCurrentPhoto(data.data.result.photos[0].photo_reference);
        setIndexPhoto(0);
      }
    };
    currentId !== "" && bringPLaceId();
  }, [currentId, index, places]);

  useEffect(() => {
    const bringPhoto = async () => {
      const data = await axios.get("/api/placephoto", {
        params: {
          currentPhoto: currentPhoto,
        },
      });
      //const data = await getPlacePhoto(currentPhoto);
      setFetchedPhoto(data.data);
    };
    currentPhoto !== "" && bringPhoto();
  }, [currentPhoto]);

  console.log(fetchedPhoto);

  useEffect(() => {
    if (indexPhoto >= 0 && indexPhoto < photos.length) {
      setCurrentPhoto(photos[indexPhoto].photo_reference);
      //console.log("Corrio iteracion index photo");
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
    setLastAction("handleSiteAnterior");
    setPhotos([]);
    setCurrentPhoto("");
  };

  const handleSiteSiguiente = () => {
    index < places.length - 1 && setIndex(index + 1);
    setLastAction("handleSiteSiguiente");
    setPhotos([]);
    setCurrentPhoto("");
  };

  return (
    <>
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
    </>
  );
};

export default Find;
