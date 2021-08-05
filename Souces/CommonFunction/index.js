import { Dimensions } from "react-native";

export function convertToQuery(param) {
    return (
        "?" +
        Object.keys(param)
            .map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(param[key]);
            })
            .join("&")
    );
}


export const widthScreen = Dimensions.get("window").width;
export const heightScreen = Dimensions.get("window").height;