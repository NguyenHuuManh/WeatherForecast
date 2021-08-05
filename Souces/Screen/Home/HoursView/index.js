import React, { useState } from 'react';
import { FlatList, ScrollView, Text, View, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppText } from '../../../Components';
import { useNavigation } from '@react-navigation/native'

import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../../../CSS/HourView/style';
const dataDumy = [
    {
        id: 1,
        lable: "Hà Nội"
    },
    {
        id: 2,
        lable: "Hải Phòng"
    },
    {
        id: 3,
        lable: "Hải Dương"
    },
    {
        id: 4,
        lable: "Hà Nội"
    },
    {
        id: 5,
        lable: "Hải Phòng"
    },
    {
        id: 6,
        lable: "Hải Dương"
    },
    {
        id: 7,
        lable: "Hà Nội"
    },
]

export default function (props) {
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={style.itemContainer} onPress={() => { navigation.navigate('Home1') }} key={index} >
            <View style={{ width: "100%", flexDirection: "row", paddingLeft: 5, paddingRight: 5 }}>
                <View style={{ flex: 1 }}>
                    <AppText>Hôm nay</AppText>
                    <AppText>4/6/2021</AppText>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Image
                            source={require("../../../Asset/Image/sun.svg")}
                            style={style.icon}
                        />
                    </View>
                    <View>
                        <AppText>25%</AppText>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <AppText>Nắng gắt</AppText>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ justifyContent: "center" }}>
                            <AppText>34</AppText>
                        </View>
                        <View>
                            <AppText>''</AppText>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                        <AppText>-</AppText>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ justifyContent: "center" }}>
                            <AppText>34</AppText>
                        </View>
                        <View>
                            <AppText>''</AppText>
                        </View>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
    return (
        < View>
            <SafeAreaView>
                <View style={style.itemContainer}>
                    <AppText>Mưa đông từ thứ 2 đến chủ nhật</AppText>
                </View>
            </SafeAreaView>

            <SafeAreaView>
                <FlatList
                    data={dataDumy}
                    renderItem={renderItem}
                    keyExtractor={(item) => { item.id }}
                    scrollEnabled={false}
                    key={(item) => { item.id }}
                />
            </SafeAreaView>
        </View >
    )
}