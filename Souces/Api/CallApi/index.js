
import { convertToQuery } from "../../CommonFunction";
import httpServices from "../../Service/httpServices";
import { FORECAST, LOCATION, URL } from "../ApiURL";
const apiKey = `tifIp0gZmfCxF0HhBGwz8nPQwXXTLHN1`;

export const SearchLocation = async (param) => {
    return await httpServices.get(`${URL + LOCATION.AUTUCOMPLETE}${convertToQuery({ apikey: apiKey, q: param })}`,);
};

export function search(key) {
    return fetch(`${URL + LOCATION.AUTUCOMPLETE}${convertToQuery({ apikey: apiKey, q: key })}`)
        .then(response => response.json())
}

export function listReligion(key) {
    return fetch(`${URL + LOCATION.RELIGION_LIST}${convertToQuery({ apikey: apiKey })}`)
        .then(response => response.json())
}

export function getCurrentLocation() {
    return fetch(`${LOCATION.CURRENT_LOCATION}`)
        .then(response => response.json())
}

export function getCurrentLocationByIP(ipadress) {
    return fetch(`${URL + LOCATION.IP_ADDRESS}${convertToQuery({ apikey: apiKey, q: ipadress })}`)
        .then(response => response.json())
}

export function getWeather(locationKey) {
    return fetch(`${URL + FORECAST.ONE_DAY}${locationKey}${convertToQuery({ apikey: apiKey })}`)
        .then(response => response.json())
}

export function get12H(locationKey) {
    return fetch(`${URL + FORECAST.TWELVE_HOUR_DAY}${locationKey}${convertToQuery({ apikey: apiKey })}`)
        .then(response => response.json())
}

export function get5Days(locationKey) {
    return fetch(`${URL + FORECAST.FIVE_DAY}${locationKey}${convertToQuery({ apikey: apiKey })}`)
        .then(response => response.json())
}


