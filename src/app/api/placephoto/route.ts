export const GET = async (photoReference: string): Promise<any> => {
  const apiPlacePhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const response = await fetch(apiPlacePhoto);
  const data = await response.url;
  return data;
};
