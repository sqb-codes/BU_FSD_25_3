import { useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {

    const SEND_OTP_URL = "http://localhost:4545/send-otp";
    const VERIFY_OTP_URL = "http://localhost:4545/verify-otp";
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const navigation = useNavigation();
    
    const sendOTP =  async () => {
        try {
            const res = axios.post(SEND_OTP_URL, {phone});
            if(!res) {
                throw new Error("");
            }
            Alert.alert("OTP Sent");
            setOtpSent(true);
        } catch (error) {
            console.log("Error while sending OTP",error);
            Alert.alert("Failed to send OTP...");
        }
    }

    const verifyOTP =  async () => {
        try {
            const response = await axios.post(VERIFY_OTP_URL, {phone, otp});
            // Alert.alert("OTP Verified");
            Alert.alert(
                "Success", "OTP Verified Successfully",
                [
                    {
                        text: "OK",
                        onPress: () => navigation.replace("Home")
                    }
                ]
            )
        } catch (error) {
            console.log("Error while verifying OTP",error);
        }
    }

    return (
        <View style={styles.container}>
        {
            !otpSent ? (
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>Enter Phone Number</Text>
                        <TextInput
                            placeholder="Enter phone number"
                            style={styles.textBox}
                            onChangeText={setPhone}
                            value={phone}
                            keyboardType="phone-pad"
                        />
                        <TouchableOpacity onPress={sendOTP}>
                            <Text style={styles.btn}>Send OTP</Text>
                        </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.inner_container}>
                    <Text style={styles.title}>Enter OTP</Text>
                    <TextInput
                        placeholder="Enter OTP"
                        style={styles.textBox}
                        onChangeText={setOtp}
                        value={otp}
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity onPress={verifyOTP}>
                        <Text style={styles.btn}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            )
        }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "70%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    inner_container: {
        width: "90%",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#eee",
        marginBottom: 20,
        marginTop: 15,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "600"
    },
    textBox: {
        borderColor: "red",
        borderWidth: 1,
        width: "90%",
        height: 50,
        paddingLeft: 5,
        backgroundColor: "#fff"
    },
    btn: {
        backgroundColor: "#ddd",
        width: 200,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 24,
        textAlign: "center"
    }
})