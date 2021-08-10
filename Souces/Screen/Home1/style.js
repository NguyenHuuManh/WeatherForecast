import { StyleSheet } from "react-native";
import { block } from "react-native-reanimated";
import { heightScreen } from "../../CommonFunction";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dayView: {
    backgroundColor: "red",
    width: "100%",
    height: heightScreen / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  weekView: {

  },
  
    icon: {
      width: 20,
      height: 20,
    },
    backIcon: {
      width: 30, 
      height: 30,
      marginTop: 20,
      marginLeft: 20,
    },
    textHeader: {
      fontSize: 23,
      color: "white",
      borderStyle: "solid",
      borderColor: "black",
      display: "flex",
    },
    block: {
     
    }
  });
  