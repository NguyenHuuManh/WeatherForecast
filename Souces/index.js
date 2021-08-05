import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from "react-native"
import { AppButton } from "../Components"
import Routers from '../Souces/Routers';
export default function () {
    const [txt, setTxt] = useState("");
    return (
        <NavigationContainer>
            <Routers/>
        </NavigationContainer>
    )
}