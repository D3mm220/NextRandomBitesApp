export const GET = async (request: Request) => {
  const res = await request.url;
  const url = new URL(request.url);
  const photoReference = url.searchParams.get("currentPhoto");
  console.log("🚀 ~ file: route.ts:5 ~ GET ~ photoReference:", photoReference);

  const apiPlacePhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(apiPlacePhoto);
  const data = await response.url;
  console.log("🚀 ~ file: route.ts:10 ~ GET ~ data:", data);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  //return Response.json(data);
};
