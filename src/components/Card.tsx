import { Photo, placeIdResult } from "../types/typesPlaceId";
import { typesResult } from "../types/typesPlaces";
import Image, { StaticImageData } from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { CardType } from "../app/find/client";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const Card = (props: {
  randomCard: CardType;
  index: number;
  handleSiteAnterior: () => void;
  handleSiteSiguiente: () => void;
  places: typesResult[];
  handlePhotoSiguiente: () => void;
  handlePhotoAnterior: () => void;
  indexPhoto: number;
  photos: Photo[];
}) => {
  const {
    randomCard,
    index,
    indexPhoto,
    handleSiteAnterior,
    handleSiteSiguiente,
    handlePhotoAnterior,
    handlePhotoSiguiente,
    photos,
    places,
  } = props;

  return (
    <div className="containerCard pt-1 lg:pt-5 flex flex-col justify-center items-center">
      <div className="ContainerCard flex flex-col">
        <p className="NamePlace justify-center text-center items-center text-5xl font-black pb-3">
          Place: {randomCard.title}
        </p>
        <div className="ContainerPhotos flex items-center justify-center">
          {indexPhoto > 0 ? (
            <Button
              onClick={handlePhotoAnterior}
              className="bg-trasparent border-gray-500 hover:bg-opacity-50 text-gray-500 rounded-[50px] w-20 h-20 mr-[-85px] z-10  border-solid border-4  hover:bg-gray-900"
              variant="outline"
              size="icon"
            >
              <ChevronLeft className="h-20 w-20 bg-trasparent" />
            </Button>
          ) : (
            <Button
              disabled
              onClick={handlePhotoAnterior}
              className="bg-trasparent border-gray-500  text-gray-500  rounded-[50px] w-20 h-20 mr-[-85px] z-10  border-solid border-4"
              variant="outline"
              size="icon"
            >
              <ChevronLeft className="h-20 w-20 bg-trasparent" />
            </Button>
          )}
          <div className="backgroundImage flex relative bg-black justify-center items-center w-[350px] h-[400px] sm:w-[600px] md:h-[600px] md:w-[750px] lg:w-[1200px] lg:h-[600px]  rounded-3xl">
            {randomCard.photo && (
              <>
                <Image
                  src={randomCard.photo.current}
                  alt={randomCard.photo.toString()}
                  fill={true}
                  objectFit={"contain"}
                  className="rounded-3xl"
                />
              </>
            )}
          </div>
          {indexPhoto < photos.length - 1 ? (
            <Button
              onClick={handlePhotoSiguiente}
              className="bg-trasparent  border-gray-500 hover:bg-opacity-50 text-gray-500 rounded-[50px] w-20 h-20 ml-[-85px] z-10  border-solid border-4 hover:bg-gray-900"
              variant="outline"
              size="icon"
            >
              <ChevronRight className="h-20 w-20  bg-trasparent" />
            </Button>
          ) : (
            <Button
              disabled
              onClick={handlePhotoSiguiente}
              className="bg-trasparent  border-gray-500  text-gray-500 rounded-[50px] w-20 h-20 ml-[-85px] z-10  border-solid border-4"
              variant="outline"
              size="icon"
            >
              <ChevronRight className="h-20 w-20 bg-trasparent" />
            </Button>
          )}
        </div>

        <p className="DirectionText justify-center text-center items-center text-3xl font-black pt-3 pb-3">
          Direction: {randomCard.direction}
        </p>
        {randomCard.photo && (
          <div className="Buttons flex flex-col lg:h-[100px] flex-wrap justify-center items-center">
            <div className="PictureButtons flex flex-row justify-between gap:10px"></div>
            <div className="PlaceButtons flex flex-row justify-between">
              {index > 0 ? (
                <button
                  onClick={handleSiteAnterior}
                  className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2 hover:bg-gray-300"
                >
                  <div className="flex flex-row justify-around">
                    <ChevronLeft className="w-10 h-10"></ChevronLeft>
                    <RestaurantIcon sx={{ fontSize: 40 }} />
                  </div>
                </button>
              ) : (
                <button
                  disabled
                  className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4"
                >
                  <div className="flex flex-row justify-around">
                    <ChevronLeft className="w-10 h-10"></ChevronLeft>
                    <RestaurantIcon sx={{ fontSize: 40 }} />
                  </div>
                </button>
              )}
              {index < places.length - 1 ? (
                <button
                  onClick={handleSiteSiguiente}
                  className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2 hover:bg-gray-300"
                >
                  <div className="flex flex-row justify-around">
                    <RestaurantIcon sx={{ fontSize: 40 }} />
                    <ChevronRight className="w-10 h-10"></ChevronRight>
                  </div>
                </button>
              ) : (
                <button
                  disabled
                  className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4"
                >
                  <div className="flex flex-row justify-around">
                    <RestaurantIcon sx={{ fontSize: 40 }} />
                    <ChevronRight className="w-10 h-10"></ChevronRight>
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
