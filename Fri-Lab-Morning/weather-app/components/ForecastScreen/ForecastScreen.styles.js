import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bgImg: {
        height: "100%"
    },
    home_container : {
        flex: 1,
        justifyContent: "space-evenly",
        // alignItems: "center"
        paddingLeft: 20
    },
    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 20
    },
    tempText: {
        color:"#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomColor: "red",
        borderBottomWidth: 1,
        
    }
})