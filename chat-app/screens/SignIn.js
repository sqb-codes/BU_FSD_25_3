import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { signIn, signUp } from "../firebase";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMode, setLoginMode] = useState("signUp");

    async function handlePress(params) {
        if(loginMode === "signUp") {
            await signUp(email, password);
        }
        if(loginMode === "signIn") {
            await signIn(email, password);
        }
    }

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
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Button
                    title={loginMode === "signUp" ? "Sign Up" : "Sign In"}
                    disabled={!password || !email}
                    onPress={handlePress}
                />
            </View>

            <TouchableOpacity 
                onPress={() => 
                    loginMode === "signUp" ? setLoginMode("signIn") : setLoginMode("signUp")
                }>
                <View>
                    <Text>
                        {
                            loginMode === "signUp"
                            ? "Already have an account? Sign In"
                            : "Don't have account? Sign Up"
                        }
                    </Text>
                </View>
            </TouchableOpacity>
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