import { typesPlaceId } from "../types/typesPlaceId";
import { typesPlaces } from "../types/typesPlaces";

export const getDataNearbySearch = async (): Promise<typesPlaces> => {
    const apiNearbySearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.NEXT_PUBLIC_API_KEY}&location=-34.6167431,-58.3767212&radius=10&keyword=bar`
    const response = await fetch(apiNearbySearch)
    const data = await response.json();
    return data;
};

export const getDataPlaceId = async (currentId: string): Promise<typesPlaceId> => {
    const apiPlaceId = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.NEXT_PUBLIC_API_KEY}&place_id=${currentId}&fields=address_components,formatted_address,name,photos,url,types`
    const response = await fetch(apiPlaceId);
    const data = await response.json();
    return data;
};

export const getPlacePhoto = async (photoReference: string): Promise<any> => {
        console.log(photoReference);
        const apiPlacePhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AUacShjy-U02H-0ClbaI6WT12LNMg0mrJLWOnkXntwm-TWrmgMNmBAJFO4e3tan1RCJrU0G4Hc1lUicfm1WCkuIqLAVX_Aqn20ZZlfOn_Q2u36Xdgvx1NF9xSUkPLIEkpZGwKkmLHHNjIXX4b4twXtrT7XyH6pz7NyCOEpE-z8_9gvGj-Lis&key=${process.env.NEXT_PUBLIC_API_KEY}`
        const response = await fetch(apiPlacePhoto)
        console.log(response)
        const data = await response.url
        return await data;
}