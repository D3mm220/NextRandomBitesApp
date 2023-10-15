import { typesPlaces } from "@/src/types/typesPlaces";
import { Location, typesGeolocation } from "@/src/types/typesGeolocation";

export const GET = async (request: Request) => {
  const res = await request.url;
  //http://localhost:3000/api/datanearbysearch?location[lat]=-34.701312&location[lng]=-58.425344
  const url = new URL(request.url);
  const lat = url.searchParams.get("location[lat]");
  const lng = url.searchParams.get("location[lng]");
  console.log("aaaaaaaaa", res);
  const apiNearbySearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.NEXT_PUBLIC_API_KEY}&location=${lat},${lng}&radius=2000&keyword=bar`;
  console.log(apiNearbySearch);
  const response = await fetch(apiNearbySearch);
  const data: typesPlaces = await response.json();
  return Response.json({ data });
};
