import { StyleSheet } from "react-native";

export default StyleSheet.create({

    containerHourView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },


    itemContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: "#D9D7D7",
        shadowColor: 'rgba(217, 215, 215, 0.89)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    headerHourView: {
        borderWidth:0,
        borderBottomWidth: 1,
        borderBottomColor: "#D9D7D7",
        shadowColor: 'rgba(217, 215, 215, 0.89)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        borderRightWidth:0,
    }
});
