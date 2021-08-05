import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import {
  Svg,
  Text as TextSVG,
  Image as ImageSVG,
  Line,
  Circle,
  Rect,
  G,
} from "react-native-svg";

export default function (props) {
  const { width, height } = props;



  const renderCircle = () => {
    const point = { x: width / 2, y: width / 2 + 10 };
    
    return (
      <G>
        <Circle
          cx={`${point.x}`}
          cy={`${point.y}`}
          r={width / 2}
          stroke="blue"
          strokeWidth={2.5}
          fill="white"
        />
        
      </G>
    );
  };
  return (
    <>
      <Svg
        width={width}
        height={width}
        style={{backgroundColor:"blue"}}
      >
        {renderCircle()}
      </Svg>
      <View style={{height:100}}/>
    </>
  );
}
