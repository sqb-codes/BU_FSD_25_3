import axios from "axios";
import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const LoginScreen = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            const res = await axios.post("http://localhost:4000/send-otp", {phone});
            setOtpSent(true);
            Alert.alert("OTP Send Successfully...");
        } catch (error) {
            console.log("Failed to send OTP",error);
            Alert.alert("Failed to send OTP");
        }
    }

    const verifyOtp = async () => {
        try {
            const res = await axios.post("http://localhost:4000/verify-otp", {phone, otp});
            setOtpSent(true);
            Alert.alert("OTP Verified Successfully...");
            // Alert.alert(
            //     "Success", "OTP Verified Successfully",
            //     [
            //         {
            //             text: "OK",
            //             onPress: () => navigation.replace("Home")
            //         }
            //     ]
            // )
            setOtp("");
        } catch (error) {
            console.log("Failed to verify OTP",error);
            Alert.alert("Failed to verify OTP");
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Online Shopping App</Text>
                
                {
                    !otpSent ? (
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>Enter Phone Number</Text>
                            <TextInput
                                placeholder="Enter Mobile Number"
                                keyboardType="phone-pad"
                                onChangeText={setPhone}
                                value={phone}
                                style={styles.textBox}
                            />
                            <TouchableOpacity onPress={sendOtp}>
                                <Text style={styles.btn}>Send OTP</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>Enter OTP</Text>
                            <TextInput
                                placeholder="Enter OTP"
                                keyboardType="phone-pad"
                                onChangeText={setOtp}
                                value={otp}
                                style={styles.textBox}
                            />
                            <TouchableOpacity onPress={verifyOtp}>
                                <Text style={styles.btn}>Verify OTP</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#2A55E5",
        color: "#fff",
        width: "100%",
        textAlign: "center",
        padding: 20
    },
    wrapper: {
        height: "70%",
        width: "90%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#eee",
    },
    title: {
        fontSize: 26,
        fontWeight: "600"
    },
    textBox: {
        borderColor: "#2A55E5",
        borderWidth: 1,
        width: "80%",
        height: 40,
        padding: 10
    },
    btn: {
        backgroundColor: "#2A55E5",
        color: "#fff",
        width: 200,
        textAlign: "center",
        padding: 20,
        fontSize: 20
    }
})