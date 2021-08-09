import { Text } from "react-native";
import React from "react";
import styles from "./styles";

interface AppTextProps {
  children?: any;
  style?: any;
}

const AppText = (props: AppTextProps) => {
  return <Text style={props.style || styles.textStyle}>{props.children}</Text>;
};
export default AppText;
