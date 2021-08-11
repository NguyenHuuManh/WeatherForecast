import React from "react"
import img from "../../../Asset"


import Svg, {
    Text as TextSVG,
    Image as ImageSVG,
    G,
    Path,
} from "react-native-svg";
import { ScrollView, Text, View } from "react-native";
import AppChart from "../../../Components/AppChart";
import { widthScreen } from "../../../CommonFunction";
export default function (props) {
    const { data12H } = props
    const convertTemp = f => {
        return parseInt((f - 32) * 0.555);
    };
    const renderItem = ({ x, y, title, value }) => {
        return (
            <G>
                <TextSVG fill="#fff" x={`${x}`} y={`${y - 5}`} font-style="normal" fontSize={10}>
                    {title}
                </TextSVG>
                <Path
                    x={`${x}`} y={`${y}`}
                    d={img.img.rain_day} fill="white" />

                <TextSVG fill="#dee6a8" x={`${x}`} y={`${y+50}`} font-style="normal" fontSize={10}>
                    {value}
                </TextSVG>
            </G>
        );
    }
    return (
        <ScrollView
            horizontal={true}
            scrollEnabled={true}
            style={{ width: widthScreen }}
        >
            <AppChart
                width={widthScreen * 2}
                height={150}
                dataValue={data12H.map((res) => convertTemp(res.Temperature.Value))}
                labelTopValue={["00:00", "01:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"]}
                labelVertical
                renderLabelTop={renderItem}
            />
        </ScrollView>
    )
}