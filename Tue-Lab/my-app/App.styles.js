import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    box: {
        marginTop: 20,
        padding: 20,
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid",
        height: 100
    },
    textStyle: {
        color: "blue",
        fontWeight: "bold"
    }
});