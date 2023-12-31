import { Location, typesGeolocation } from "@/src/types/typesGeolocation";

export const POST = async () => {
  const apiLocation = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(apiLocation, {
    method: "POST",
  });
  const data: typesGeolocation = await response.json();
  //return Response.json(data.location);
  return new Response(JSON.stringify(data.location), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// no se usaaaa
