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
export const convertTemp = f => {
    return parseInt((f - 32) * 0.555);
};


export const widthScreen = Dimensions.get("window").width;
export const heightScreen = Dimensions.get("window").height;