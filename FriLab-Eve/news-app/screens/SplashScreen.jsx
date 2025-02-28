import React, { useEffect } from 'react';
import { Text } from 'react-native';
// npm install lottie-react-native
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                style={styles.splashCard}
                source={require('../assets/splash-anim.json')}
                autoPlay
                loop
            />

            <Text style={styles.title}>News App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    splashCard: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
});