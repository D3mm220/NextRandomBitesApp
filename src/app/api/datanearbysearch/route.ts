import { typesPlaces } from "@/src/types/typesPlaces";
import { Location, typesGeolocation } from "@/src/types/typesGeolocation";

export const GET = async (coords: Location): Promise<typesPlaces> => {
  const apiNearbySearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.NEXT_PUBLIC_API_KEY}&location=${coords.lat},${coords.lng}&radius=2000&keyword=bar`;
  const response = await fetch(apiNearbySearch);
  const data = await response.json();
  return data;
};
