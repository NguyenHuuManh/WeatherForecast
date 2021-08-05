export const URL = "http://dataservice.accuweather.com/"
export const LOCATION = {
    ADMIN_AREA_LIST: "locations/v1/adminareas/", //{countryCode}
    COUNTRY_LIST: "locations/v1/countries/",//"{regionCode}",
    RELIGION_LIST: `locations/v1/regions`,
    AUTUCOMPLETE: "locations/v1/cities/autocomplete",
    SEARCH_LOCATION_KEY: "locations/v1/", //"{locationKey}",
    IP_ADDRESS: "locations/v1/cities/ipaddress",
    CURRENT_LOCATION: "https://geolocation-db.com/json/047c8da0-f163-11eb-8424-a55724a45f8a",
}

export const FORECAST = {
    ONE_DAY: "forecasts/v1/daily/1day/",//"{locationKey}"
    FIVE_DAY: "forecasts/v1/daily/5day/",//"{locationKey}",
    TEN_DAY: "forecasts/v1/daily/10day/",//"{locationKey}",
    FIFTEEN_DAY: "forecasts/v1/daily/15day/",//"{locationKey}"
    //
    ONE_HOUR_DAY: "forecasts/v1/hourly/1hour/", //"{locationKey}"
    TWELVE_HOUR_DAY: "forecasts/v1/hourly/12hour/", //"{locationKey}"
    TWENTY_FOUR_HOUR_DAY: "forecasts/v1/hourly/24hour/", //"{locationKey}"
    SEVENTY_TWO_HOUR_DAY: "forecasts/v1/hourly/72hour/", //"{locationKey}"
    HUNDERED_TWENTY_HOUR_DAY: "forecasts/v1/hourly/120hour/", //"{locationKey}"
}
