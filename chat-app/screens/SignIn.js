import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to Bennett Chat</Text>
            </View>
            <View>
                <Image
                    source={require("../assets/logo.webp")}
                    style={styles.logoImg}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Enter Email ID"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textBox}
                />
                <TextInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.textBox}
                />
            </View>
            <View>
                <Button
                    title="Sign In"
                    disabled={!password || !email}
                />
            </View>

            <View>
                <Text>Already have an account?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 20
    },
    logoImg: {
        height: 200,
        width: 200,
        marginBottom: 30
    },
    textBox: {
        borderBottomColor: "green",
        borderBottomWidth: 1,
        width: 200,
        marginBottom: 25
    }
})