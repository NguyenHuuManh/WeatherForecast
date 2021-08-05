import { StyleSheet } from "react-native";
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
});
