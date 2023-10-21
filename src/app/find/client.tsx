"use client";

import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
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
  photo: MutableRefObject<string | StaticImageData>;
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

  const currentIdRef = useRef(currentId);
  const currentPhotoRef = useRef(currentPhoto);
  const currentPlaceIdRef = useRef(currentPlaceId);
  const fetchedPhotoRef = useRef(fetchedPhoto);
  const currentPlaceRef = useRef(currentPlace);

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
        currentPlaceRef.current = AxiosData[0];
        setCurrentId(AxiosData[0]?.place_id!);
        currentIdRef.current = AxiosData[0]?.place_id!;

        if (currentIdRef.current) {
          const dataPlaceId = await axios.get("/api/dataplaceid", {
            params: {
              currentId: currentIdRef.current,
            },
          });

          if (dataPlaceId.data.result?.photos === undefined) {
            setFetchedPhoto(RandomBites);
            fetchedPhotoRef.current = RandomBites;
          } else {
            setCurrentPlaceId(dataPlaceId.data.result);
            currentPlaceIdRef.current = dataPlaceId.data.result;
            setPhotos(dataPlaceId.data.result.photos);
            setCurrentPhoto(dataPlaceId.data.result.photos[0].photo_reference);
            currentPhotoRef.current =
              dataPlaceId.data.result.photos[0].photo_reference;
            setIndexPhoto(0);
          }

          if (currentPhotoRef.current) {
            const dataPhoto = await axios.get("/api/placephoto", {
              params: {
                currentPhoto: currentPhotoRef.current,
              },
            });
            setFetchedPhoto(dataPhoto.data);
            fetchedPhotoRef.current = dataPhoto.data;

            const address: string = `
              ${currentPlaceIdRef.current?.address_components[1]!.long_name}
              ${currentPlaceIdRef.current?.address_components[0]!.long_name}
              ${currentPlaceIdRef.current?.address_components[3]!.long_name}
              ${currentPlaceIdRef.current?.address_components[4]!.long_name}`;

            console.log(currentPlaceId);
            console.log("currentPlace:", currentPlace);
            console.log("fetchedPhoto:", fetchedPhoto);
            console.log("address:", address);

            setRandomCard({
              title: currentPlaceRef.current?.name!,
              photo: fetchedPhotoRef,
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
  }, [location, index]);

  console.log(currentPlaceId?.address_components[1].long_name);
  console.log("🚀 ~ file: client.tsx:89 ~ bringData ~ setPlaces:", places);
  console.log("🚀 ~ file: client.tsx:91 bringData CurrentPlace:", currentPlace);
  console.log("🚀 ~ file: client.tsx:93 bringData CurrentId:", currentId);
  console.log("🚀file client.tsx:112 bringData currentPlaceId", currentPlaceId);
  console.log(fetchedPhoto);
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
