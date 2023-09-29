import { placeIdResult } from "../types/typesPlaceId";
import { typesResult } from "../types/typesPlaces";
import Image from "next/image";

export const Card = (props: {
  currentPlace: typesResult;
  currentPlaceId: placeIdResult;
  fetchedPhoto: string;
  index: number;
  handleSiteAnterior: () => void;
  handleSiteSiguiente: () => void;
  places: [];
  handlePhotoSiguiente: () => void;
  handlePhotoAnterior: () => void;
  indexPhoto: number;
  photos: [];
}) => {
  const {
    currentPlace,
    currentPlaceId,
    fetchedPhoto,
    index,
    handleSiteAnterior,
    handleSiteSiguiente,
    handlePhotoAnterior,
    handlePhotoSiguiente,
    places,
    indexPhoto,
    photos,
  } = props;

  return (
    <div className="containerDiv h-[calc(100vh-6rem-48px)] flex justify-center items-center">
      <div className="container flex h-[400px] w-[1000px] bg-[#FF1E00] rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <div className="leftSide flex">
          <div className="backgroundImage flex relative bg-black justify-center items-center w-[600px] h-[400px]">
            <Image
              src={fetchedPhoto}
              alt={fetchedPhoto}
              fill={true}
              objectFit={"contain"}
            />
          </div>
        </div>
        <div className="rightSide">
          <div className="text flex flex-col h-[200px] p-[10px] text-3xl">
            <p className="self-start">Place: {currentPlace.name}</p>
            <p className="self-end">
              Direction: {currentPlaceId.formatted_address}
            </p>
          </div>
          {fetchedPhoto && (
            <div className="Buttons flex flex-row flex-wrap justify-around items-center">
              <div className="PictureButtons flex flex-row justify-between">
                {indexPhoto > 0 ? (
                  <button
                    onClick={handlePhotoAnterior}
                    className="bg-white rounded w-20 h-16 m-4"
                  >
                    Previous <br /> Picture
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 h-16 m-4"
                  >
                    Previous <br /> Picture{" "}
                  </button>
                )}
                {indexPhoto < photos.length - 1 ? (
                  <button
                    onClick={handlePhotoSiguiente}
                    className="bg-white rounded w-20 h-16 m-4"
                  >
                    Next <br /> Picture
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 h-16 m-4"
                  >
                    Next <br /> Picture
                  </button>
                )}
              </div>
              <div className="PlaceButtons flex flex-row justify-between">
                {index > 0 ? (
                  <button
                    onClick={handleSiteAnterior}
                    className="bg-white rounded w-20 h-16 m-4"
                  >
                    Previous <br /> Place
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 h-16 m-4"
                  >
                    Previous <br /> Place
                  </button>
                )}
                {index < places.length - 1 ? (
                  <button
                    onClick={handleSiteSiguiente}
                    className="bg-white rounded w-20 h-16 m-4"
                  >
                    Next <br /> Place
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 h-16 m-4"
                  >
                    Next <br /> Place
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    //<div className="buttonsCard flex flex-row gap-4">
    //       {index > 0 ? (
    //         <button
    //           onClick={handleSiteAnterior}
    //           className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //         >
    //           Previous <br /> Place
    //         </button>
    //       ) : (
    //         <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //           Previous <br /> Place
    //         </button>
    //       )}
    //       {index < places.length - 1 ? (
    //         <button
    //           onClick={handleSiteSiguiente}
    //           className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //         >
    //           Next <br /> Place
    //         </button>
    //       ) : (
    //         <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //           Next <br /> Place
    //         </button>
    //       )}
    //     </div>

    // <div className="card flex flex-row items-start h-screen pt-24">
    //   <div className="TextCard flex flex-col h-[400px] w-[340px] place-content-between pl-16">
    //     <h2 className="text-green-800 text-3xl">
    //       Place: <br /> {currentPlace.name}
    //     </h2>
    //     <p className="text-blue-800 text-3xl">
    //       Direction: <br /> {currentPlaceId.formatted_address}
    //     </p>
    //   </div>
    //   <div className="flex flex-col justify-center items-center w-[900px]">
    //     <div>
    //       {fetchedPhoto && (
    //         <div className="photosPart flex flex-row justify-around items-center">
    //           {indexPhoto > 0 ? (
    //             <button
    //               onClick={handlePhotoAnterior}
    //               className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //             >
    //               Previous <br /> Picture
    //             </button>
    //           ) : (
    //             <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //               Previous <br /> Picture
    //             </button>
    //           )}
    //           <div className="backgroundImage flex relative bg-black justify-center items-center w-[600px] h-[400px]">
    //             <Image
    //               src={fetchedPhoto}
    //               alt={fetchedPhoto}
    //               fill={true}
    //               objectFit={"contain"}
    //             />
    //           </div>
    //           {indexPhoto < photos.length - 1 ? (
    //             <button
    //               onClick={handlePhotoSiguiente}
    //               className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //             >
    //               Next <br /> Picture
    //             </button>
    //           ) : (
    //             <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //               Next <br /> Picture
    //             </button>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //     <div className="buttonsCard flex flex-row gap-4">
    //       {index > 0 ? (
    //         <button
    //           onClick={handleSiteAnterior}
    //           className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //         >
    //           Previous <br /> Place
    //         </button>
    //       ) : (
    //         <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //           Previous <br /> Place
    //         </button>
    //       )}
    //       {index < places.length - 1 ? (
    //         <button
    //           onClick={handleSiteSiguiente}
    //           className="bg-[#FF1E00] rounded w-20 h-16 m-4"
    //         >
    //           Next <br /> Place
    //         </button>
    //       ) : (
    //         <button disabled className="bg-stone-400 rounded w-20 h-16 m-4">
    //           Next <br /> Place
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};
