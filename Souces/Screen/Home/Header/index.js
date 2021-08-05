import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
// import SvgUri from "react-native-svg-uri";
import { AppText } from "../../../Components";
import style from "../style";
export default function (props) {
  const navigation = useNavigation();
  const { location } = props;
  return (
    <>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          margin: 10,
          marginTop: 50,
        }}
      >
        <View style={style.icon}>
          <TouchableOpacity style={style.icon}>
            <Image
              source={require("../../../Asset/Image/span_ic.png")}
              style={style.icon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText>{location.name}</AppText>
        </View>
        <View style={style.icon}>
          <TouchableOpacity style={style.icon}
            onPress={() => {
              navigation.navigate(`AddLocation`)
            }}
          >
            <Image
              source={require("../../../Asset/Image/add_ic.png")}
              style={style.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          margin: 10,
          height: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText>{location.mota}</AppText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText>{location.t}</AppText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ paddingRight: 5 }}>
            <AppText>Nhiệt độ : {location.t}</AppText>
          </View>
          <View>
            <AppText>{location.doAm}</AppText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ paddingRight: 5 }}>
            <AppText>max: {location.tMax}</AppText>
          </View>
          <View>
            <AppText>min: {location.tMin}</AppText>
          </View>
        </View>
      </View>
    </>
  );
}
