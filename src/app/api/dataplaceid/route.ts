import { typesPlaceId } from "@/src/types/typesPlaceId";

export const GET = async (request: Request) => {
  const res = await request.url;
  const url = new URL(request.url);
  const currentId = url.searchParams.get("currentId");
  const apiPlaceId = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.NEXT_PUBLIC_API_KEY}&place_id=${currentId}&fields=address_components,formatted_address,name,photos,url,types`;
  const response = await fetch(apiPlaceId);
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  //return Response.json(data);
};
