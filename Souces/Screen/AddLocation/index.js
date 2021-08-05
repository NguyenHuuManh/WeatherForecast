import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import { search } from "../../Api/CallApi";
import { heightScreen, widthScreen } from "../../CommonFunction";
import { AppText } from "../../Components";
import styleCommon from "../../CSS/common/styleCommon";
export default () => {
    const [keyWord, setKeyWord] = useState("");
    const [data, setData] = useState([]);
    const SearchLocation = (key) => {
        console.log(keyWord)
        search(key).then((res) => {
            setData(res);
        })
    }
    useEffect(() => {
        setTimeout(() => { SearchLocation(keyWord) }, 1000);
    }, [keyWord])

    return (
        <ImageBackground source={require("../../Asset/Image/addBG.jpg")} style={{ width: widthScreen, height: heightScreen }}>
            <View style={styleCommon.containerComponent}>
                <AppText>Tim Kiem</AppText>
                <TextInput
                    style={{ backgroundColor: "#fff" }}
                    onChangeText={(e) => { setKeyWord(e) }}
                    value={keyWord}
                />
                {
                    data.map((e, index) => {
                         return (
                            <View key={index}>
                                <AppText>{`${e?.AdministrativeArea?.LocalizedName}-${e?.Country?.LocalizedName}`}</AppText>
                            </View>
                        )
                    })
                }
            </View>
        </ImageBackground>
    )
}