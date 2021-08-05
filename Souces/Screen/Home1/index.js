import React, { useState } from 'react';
import { Text, TextInput, View } from "react-native"
import { AppButton } from '../../Components';
import { search } from '../../Api/CallApi';
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
        <View style={{ backgroundColor: "pink", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <AppButton title="Button" onPress={() => { navigation.navigate('Home') }} style={{ width: "100%", backgroundColor: "green" }} textStyle={{ color: "red" }} />

            <TextInput
                onChange={(e) => {
                    console.log(e.target.value)
                    callSearch(e.target.value);
                }}
            />

            <Text style={{ backgroundColor: "yellow" }}>{txt}</Text>
            {
                dataDumy.map((e) => (
                    <View>
                        <Text style={{ color: "white" }}>{e.lable}</Text>
                    </View>
                ))
            }
        </View>

    )
}