import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileCard: {
        width: "90%",
        padding: "10",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 5,
            height: 5
        }
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    profileDesc: {

    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: "50%"
    },
    socialMediaIcons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})