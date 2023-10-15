import { typesPlaceId } from "@/src/types/typesPlaceId";

export const GET = async (currentId: string) => {
  const apiPlaceId = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.NEXT_PUBLIC_API_KEY}&place_id=${currentId}&fields=address_components,formatted_address,name,photos,url,types`;
  const response = await fetch(apiPlaceId);
  const data = await response.json();
  return Response.json(data);
};
