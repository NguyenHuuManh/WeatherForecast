import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { heightScreen, widthScreen } from "../../CommonFunction";
import { AppText } from "../../Components";

import AppCircleTime from "../../Components/AppCircleTime";
import styleCommon from "../../CSS/common/styleCommon";
import style from "../../CSS/HourView/style";
import ChartWeather from "./ChartWeather";
import Header from "./Header";
import HoursView from "./HoursView";
import HumidityView from "./HumidityView";
import WinSpeed from "./WinSpeed";
import { getCurrentLocation, getCurrentLocationByIP, getWeather } from "../../Api/CallApi";
import { isEmpty } from "lodash";

export default function ({ navigation }) {
  const [currenLocation, setCurrentLocation] = useState();
  const [inforDay, setInforDay] = useState({});
  console.log(inforDay, "inforDay");
  useEffect(() => {
    getCurrentLocation().then((response) => {
      getCurrentLocationByIP(response.IPv4).then((e) => {
        setCurrentLocation(e);
      });
    });
  }, [])

  useEffect(() => {
    if (isEmpty(currenLocation)) return;
    getWeather(currenLocation.ParentCity.Key).then((res) => {
      setInforDay(res.DailyForecasts[0]);
    });
  }, [currenLocation])

  const convertTemp = (f) => {
    return parseInt((f - 32) * 0.555)
  }
  return (
    <ImageBackground source={require("../../Asset/Image/background.png")} style={{ width: widthScreen, height: heightScreen }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled
        scrollEnabled
        style={{ height: heightScreen }}
      >
        <Header
          location={{
            name: currenLocation?.ParentCity?.LocalizedName || "",
            t: parseInt((convertTemp(inforDay?.Temperature?.Maximum?.Value) + convertTemp(inforDay?.Temperature?.Minimum?.Value)) / 2),
            tMax: convertTemp(inforDay?.Temperature?.Maximum?.Value) || 0,
            tMin: convertTemp(inforDay?.Temperature?.Minimum?.Value) || 0,
            doAm: 23,
            mota: "Có Mây",
          }}
        />
        <View style={[styleCommon.containerComponent]}>
          <ChartWeather />
        </View>

        <View>
          <View
            style={[style.containerHourView]}
          >
            <AppText>Dự báo hằng ngày</AppText>
            <AppText>25 ngày</AppText>
          </View>
          <View style={styleCommon.containerComponent}>
            <HoursView />
          </View>
        </View>
        <HumidityView />
        <WinSpeed />
        <AppCircleTime width={widthScreen} height={150} />
      </ScrollView>
    </ImageBackground>
  );
}