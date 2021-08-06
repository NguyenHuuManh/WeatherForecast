import React from "react"
import SvgUri from 'react-native-svg-uri';
import testSvg from '../../../Asset/Image/sun.svg';


import {
    Text as TextSVG,
    Image as ImageSVG,
    G,
} from "react-native-svg";
import { ScrollView, Text, View } from "react-native";
import AppChart from "../../../Components/AppChart";
import { widthScreen } from "../../../CommonFunction";
export default function () {
    const renderItem = ({ x, y, title }) => {
        return (
            <G>
                <TextSVG fill="#fff" x={`${x}`} y={`${y - 5}`} font-style="normal" fontSize={10}>
                    {title}
                </TextSVG>
                {/* <ImageSVG href={require('../../../Asset/Image/sun.svg')} x={`${x}`} y={`${y}`} /> */}

                <SvgUri
                    // source={`../../../Asset/Image/sun.svg`}
                    svgXmlData={testSvg}
                />
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
                dataValue={[34, 35, 30, 33, 29, 35, 31, 32, 34, 35, 30, 33, 29, 35, 31, 32]}
                labelTopValue={["00:00", "01:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "00:00", "01:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00"]}
                labelVertical
                renderLabelTop={renderItem}
            />
        </ScrollView>
    )
}