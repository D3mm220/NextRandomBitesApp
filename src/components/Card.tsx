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
      <div className="container flex flex-row h-[600px] w-[1600px] bg-[#FF1E00] rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <div className="leftSide flex flex-col">
          <div className="backgroundImage flex relative bg-black justify-center items-center w-[800px] h-[600px]">
            <Image
              src={fetchedPhoto}
              alt={fetchedPhoto}
              fill={true}
              objectFit={"contain"}
            />
          </div>
        </div>
        <div className="rightSide flex flex-col justify-center items-around p-4">
          <div className="text flex flex-col h-[400px] text-4xl">
            <p className="self-start">Place: {currentPlace.name}</p>
            <p className="self-end">
              Direction: {currentPlaceId.formatted_address}
            </p>
          </div>
          {fetchedPhoto && (
            <div className="Buttons flex flex-col h-[200px] flex-wrap justify-center items-center">
              <div className="PictureButtons flex flex-row justify-between ">
                {indexPhoto > 0 ? (
                  <button
                    onClick={handlePhotoAnterior}
                    className="bg-white rounded w-32 h-16 m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-32 h-16 m-4"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                    </div>
                  </button>
                )}
                {indexPhoto < photos.length - 1 ? (
                  <button
                    onClick={handlePhotoSiguiente}
                    className="bg-white rounded w-32 h-16 m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-32 h-16 m-4"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
                  </button>
                )}
              </div>
              <div className="PlaceButtons flex flex-row justify-between">
                {index > 0 ? (
                  <button
                    onClick={handleSiteAnterior}
                    className="bg-white rounded w-32 h-16 m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around ">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-32 h-16 m-4"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                    </div>
                  </button>
                )}
                {index < places.length - 1 ? (
                  <button
                    onClick={handleSiteSiguiente}
                    className="bg-white rounded w-32 h-16 m-4 border-black border-solid border-2 "
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-32 h-16 m-4"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
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
