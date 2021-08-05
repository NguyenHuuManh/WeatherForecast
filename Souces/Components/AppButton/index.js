import { Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

interface AppButtonProps extends TouchableOpacityProps {
    children?: any;
    title?: any;
    textStyle?: TextStyle;
    transparent?: boolean;
    style?: any;
}
const AppButton = (props: AppButtonProps) => {

    return (
        <TouchableOpacity
            {...props}
            onPress={props.onPress}
            style={props.style}
        >
            <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};
export default AppButton;
