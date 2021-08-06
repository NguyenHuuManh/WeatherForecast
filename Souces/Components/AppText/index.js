import { Text, TouchableOpacityProps } from "react-native";
import React from "react";
import styles from "./styles";

interface AppTextProps {
  children?: any;
  style?: any;
}

const AppButton = (props: AppButtonProps) => {
  return <Text style={props.style||styles.textStyle}>{props.children}</Text>;
};
export default AppButton;
