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

export type CardType = {
  title: string;
  photo: StaticImageData | string;
  direction: string;
};

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
  const [randomCard, setRandomCard] = useState<CardType>();

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
  //console.log("🚀CurrentPlace actual: ", currentPlace);
  //console.log("🚀posicion del lugar que estamos:", index);
  // console.log("🚀 id de la posicion actual:", currentId);
  //console.log("🚀placeId de la posicion actual:", currentPlaceId);
  //console.log("🚀Cantidad de fotos", photos);
  // console.log("🚀Posicion de la foto:", indexPhoto);
  //console.log("🚀Foto actual:", currentPhoto);
  //console.log("🚀 ~ file: page.tsx:39 ~ Find ~ lastAction:", lastAction);
  //odio todo
  //console.log(location);

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

  useEffect(() => {
    const getData = async () => {
      try {
        const dataNearby = await axios.get("/api/datanearbysearch", {
          params: {
            location: location,
          },
        });
        const AxiosData = dataNearby.data.data.results;
        setPlaces(AxiosData);
        setCurrentPlace(AxiosData[0]);
        setCurrentId(AxiosData[0]?.place_id);

        if (currentId) {
          const dataPlaceId = await axios.get("/api/dataplaceid", {
            params: {
              currentId: currentId,
            },
          });

          if (dataPlaceId.data.result?.photos === undefined) {
            setFetchedPhoto(RandomBites);
          } else {
            setCurrentPlaceId(dataPlaceId.data.result);
            setPhotos(dataPlaceId.data.result.photos);
            setCurrentPhoto(dataPlaceId.data.result.photos[0].photo_reference);
            setIndexPhoto(0);
          }

          if (currentPlaceId) {
            const dataPhoto = await axios.get("/api/placephoto", {
              params: {
                currentPhoto: currentPhoto,
              },
            });
            setFetchedPhoto(dataPhoto.data);

            const address: string = `${currentPlaceId?.address_components[1].long_name} ${currentPlaceId?.address_components[0].long_name} ${currentPlaceId?.address_components[3].long_name} ${currentPlaceId?.address_components[4].long_name}`;
            setRandomCard({
              title: currentPlace?.name!,
              photo: fetchedPhoto!,
              direction: address,
            });
          }
        }
      } catch (error) {
        // Manejar errores de solicitud
        console.error("Error en la solicitud: ", error);
      }
    };

    getData();
  }, [location, index, currentId, currentPhoto]);

  console.log("🚀 ~ file: client.tsx:89 ~ bringData ~ setPlaces:", places);
  console.log("🚀 ~ file: client.tsx:91 bringData CurrentPlace:", currentPlace);
  console.log("🚀 ~ file: client.tsx:93 bringData CurrentId:", currentId);
  console.log("🚀file client.tsx:112 bringData currentPlaceId", currentPlaceId);
  console.log(randomCard);

  const ChangeIndex = () => {
    if (places.length >= 0 && index < photos.length) {
      setCurrentPlace(places[index]);
      setCurrentId(places[index].place_id);
    }
  };

  const handleSiteSiguiente = () => {
    index < places.length - 1 && setIndex(index + 1);
    setLastAction("handleSiteSiguiente");
    ChangeIndex();
  };

  const handleSiteAnterior = () => {
    index > 0 && setIndex(index - 1);
    setLastAction("handleSiteAnterior");
    ChangeIndex();
  };

  const ChangeIndexPhoto = () => {
    if (indexPhoto >= 0 && indexPhoto < photos.length) {
      setCurrentPhoto(photos[indexPhoto].photo_reference);
    }
  };

  const handlePhotoAnterior = () => {
    indexPhoto > 0 && setIndexPhoto(indexPhoto - 1);
    ChangeIndexPhoto();
  };

  const handlePhotoSiguiente = () => {
    indexPhoto < photos.length - 1 && setIndexPhoto(indexPhoto + 1);
    ChangeIndexPhoto();
  };

  return (
    <>
      {randomCard && (
        <Card
          randomCard={randomCard}
          indexPhoto={indexPhoto}
          places={places}
          index={index}
          photos={photos}
          handleSiteAnterior={handleSiteAnterior}
          handleSiteSiguiente={handleSiteSiguiente}
          handlePhotoAnterior={handlePhotoAnterior}
          handlePhotoSiguiente={handlePhotoSiguiente}
        />
      )}
    </>
  );
};

export default Find;
