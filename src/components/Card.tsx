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
    <div className="containerCard pt-1 lg:pt-10 flex justify-center items-center">
      <div className="card flex flex-col h-[650px] w-[350px] sm:w-[600px] sm:h-[650px] md:w-[750px] md:h-[850px] lg:flex-row lg:h-[600px] lg:w-[1600px] bg-[#FF1E00] rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <div className="leftSide flex flex-col">
          <div className="backgroundImage flex relative bg-black justify-center items-center w-[350px] h-[400px] sm:w-[600px] md:h-[600px] md:w-[750px] lg:w-[800px] lg:h-[600px]  rounded-l-lg">
            <Image
              src={fetchedPhoto}
              alt={fetchedPhoto}
              fill={true}
              objectFit={"contain"}
              className="rounded-l-lg"
            />
          </div>
        </div>
        <div className="rightSide flex flex-col justify-center items-around px-4">
          <div className="text flex flex-col lg:h-[400px] lg:w-[700px] text-lg sm:text-2xl sm:pb-4 lg:text-4xl justify-around items-start">
            <p className="self-start">Place: {currentPlace.name}</p>
            <p className="self-start">
              Direction: {currentPlaceId.formatted_address}
            </p>
          </div>
          {fetchedPhoto && (
            <div className="Buttons flex flex-col lg:h-[200px] flex-wrap justify-center items-center">
              <div className="PictureButtons flex flex-row justify-between gap:10px">
                {indexPhoto > 0 ? (
                  <button
                    onClick={handlePhotoAnterior}
                    className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 mb-2 lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 mb-2 lg:w-32 lg:h-16 lg:m-4"
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
                    className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvV1c8rZ2EUx/GXUlZmN0MpJVP8ARYiJQs1Zcg/odipIb+2fmUa1vM/qJkUWbCQlOxsWEiUBSmlrKTo0VW3697vvX1vFs7q1nPO533Oec55bo0PtpoP1lcE0IgNdCSSOcIgrislmQf4igN8zxA5QxdusyCVAEF8D+05bTxFN+7S/OKAISwVEMy7thP8wmZwjAOu0JQXXfD8HK1JwHOF4H/4i63I5wdG8bNCzGvy8QqyALNYyBBaxFTGWSFAyHw4SmQC43jCGv5EwrvoTYEUAnTiEPOYSYiEqkJ1YRf+Vwuow2O0TA0JkRuEJfyG8J20QhXU4yEH8AX31QJ6sJ/Toj7sVAuIX/IcRlCLVawgTN42+qsFhLgwPb8zRnEZk2XG9C12PRrN0K5gAxhDWLgsK3TJBV+GVLd3gEs0l1GMxV6gJflUhNc09LStJOQY02mvaUnd9PC8P1pp6OcHvAADjkIZadn3SQAAAABJRU5ErkJggg==" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 lg:w-32 lg:h-16 lg:m-4"
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
                    className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2 lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2"
                  >
                    <div className="flex flex-row justify-around ">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvt1DEKwkAURdGTRQjaK7gGEdyFYC24HbEWXIyCe7CxF1yEfDCQInFmjOlMGYZ733/Mn8rAXzUw31+QbLikojE22CepjQO5goCfMcMOx1xJjiDgF0xxxwKPXwma8BtWJfAI8WmCEa7v5AFf4pmbvD7XJQh4dD7H1/CuCZrwksCtYdt+Di6I1INWVNfyE0lqD3rfpJQgpum1CzmCWlI/FVuccq9XriB4E6xxyIWnNrmE03m2ZIKvhH9BsrYXxMYgGcobjbkAAAAASUVORK5CYII=" />
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4"
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
                    className="bg-white rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4 border-black border-solid border-2 "
                  >
                    <div className="flex flex-row justify-around">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu91LsuBVEUxvHfiU4hKpd3kChET6HQ6DRUSolEI8QbEAqRUOqodBKVhF40vIO4VCJRIjuZEcbs2WecGavZ+8ua+f77tlZHy9Fp2V8M8JGB83xKR9cZAzxiCMN4QkrXBpxjFlvYRErXBkzgOvtrMhur9E2MUHXJO1jDGeawjfUKXcqoAoziHg8I83AfYR7TtQHhh9TrKeZ/Qf61Di4x1VDhXWE6eH3fwQsGGgIEr8Ei4A5jDQFuMV4E5MXUBCN/2j+OaBV7TbhjBQfFHfTjGWHsJV4xgrciIOglHPXijkWc5B5ldXCI5T9C9hGO+ivKAH1ZFw19qE7sYgPvKUCeX8Bxl4R5nJZ9m2oVea9JcaI+KUA37eMCM7EVpACplSfzrQM+AULROxk9XhFGAAAAAElFTkSuQmCC" />{" "}
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEvt1MGJgjEYhOHHHgTvXrYHBW1H9irYiXgXLEQQaxC0AFlhW1ACCr+If5IPxYu5Jpk3M5mk482j82Z9X0A24UhEMyxxzKpTfQe/mGOPUQmk1kEPW/RxwACnNie1gKTVhOyuTp5CIoAbZI0ftEKigATpYpODtAHOJS1prElOhvhv7ns1IDXr7j4+GlFbQkX5J4GIg1TTogZFAFVvIAKYYHHt/hh/uaZFIppiVfIPRRzkDvwwH3FQBfkCsnFdABLMKBkZIo9PAAAAAElFTkSuQmCC" />
                    </div>
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-stone-400 rounded w-20 sm:w-28 h-12 sm:h-14 mx-2  lg:w-32 lg:h-16 lg:m-4"
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
  );
};
