import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import {heightScreen, widthScreen} from '../../CommonFunction';
import { AppButton, AppText } from '../../Components';
import { search } from '../../Api/CallApi';
import style from "../Home1/style";
import styleCommon from '../../CSS/common/styleCommon';
import { Icon } from 'react-native-vector-icons/Icon';
export default function ({ navigation }) {
    const [txt, setTxt] = useState("Home1");
    const dataDumy = [
        {
            lable: "lable1"
        },
        {
            lable: "lable2"
        }, {
            lable: "lable3"
        },
    ]

    const callSearch = (keySeach) => {
        search(keySeach)
    }

    return (
       <ImageBackground
        source={require('../../Asset/Image/1.png')}
        style={{width: widthScreen, height: heightScreen}}>
            <ScrollView
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled
        scrollEnabled
        style={{height: heightScreen}}>
        <View  style={{display: "flex", justifyContent: 'space-between'}}>
        <Image 
        source={require("../../Asset/Image/back.png")}
        style = {style.backIcon}
        />
            <Text 
        style= {style.textHeader}
        >
            Chi tiết hàng ngày
        </Text>
        </View>
            </ScrollView>
       </ImageBackground>

    )
}