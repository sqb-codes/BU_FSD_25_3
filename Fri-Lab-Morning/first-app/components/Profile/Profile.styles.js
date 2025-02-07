import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileCard: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 3,
        height: 160,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 20
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    header: {
        height: 120,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    mediaIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})