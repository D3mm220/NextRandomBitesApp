import { typesPlaces } from "@/src/types/typesPlaces";
import { Location, typesGeolocation } from "@/src/types/typesGeolocation";

export const GET = async (request: Request) => {
  const res = await request.url;
  const url = new URL(request.url);
  const lat = url.searchParams.get("location[lat]");
  const lng = url.searchParams.get("location[lng]");
  const apiNearbySearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.NEXT_PUBLIC_API_KEY}&location=${lat},${lng}&radius=2000&keyword=bar`;
  const response = await fetch(apiNearbySearch);
  const data: typesPlaces = await response.json();
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  //return Response.json({ data });
};
