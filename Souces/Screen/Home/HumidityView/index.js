import React, { useState } from 'react';
import { FlatList, ScrollView, Text, View } from "react-native"

export default function (props) {
    return (
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View><Text>Độ Ẩm</Text></View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 100 }}>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 100 }}>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
                <View style={{ flex: 4, padding: 10, alignItems: "center" }}>
                    <View style={{ backgroundColor: "blue", width: 40, height: 40 }}></View>
                </View>
            </View>
        </View>
    )
}