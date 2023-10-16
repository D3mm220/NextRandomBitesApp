export const GET = async (request: Request) => {
  const res = await request.url;
  const url = new URL(request.url);
  const photoReference = url.searchParams.get("currentPhoto");

  const apiPlacePhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(apiPlacePhoto);
  const data = await response.url;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  //return Response.json(data);
};
