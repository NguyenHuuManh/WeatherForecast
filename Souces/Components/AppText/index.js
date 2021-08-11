import { Text, TextProps } from "react-native";
import React from "react";
import styles from "./styles";

interface AppTextProps extends TextProps {
  children?: any;
  style?: any;
}

const AppText = (props: AppTextProps) => {
  return <Text
    {...props}
    style={props.style || styles.textStyle}>
    {props.children}
  </Text>;
};
export default AppText;
