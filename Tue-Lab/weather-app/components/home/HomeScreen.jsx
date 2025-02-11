import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

export const HomeScreen = () => {
    const API_KEY = "83e01e3dce5d28839bb5a177cb51af12";
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWeather = async (lat, lon) => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let response = await fetch(URL)
            let data = await response.json();
            console.log("Fetching from :",URL);
            console.log("Data from weather API:", data);
            setWeather(data);
            setLoading(false);
        } catch (error) {
            alert("Error while fetching weather data");
        }
    }

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                alert("Permission Denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const lat = location.coords.latitude;
            const lon = location.coords.longitude;
            console.log("Coordinates :",lat, lon);
            fetchWeather(lat, lon);
        })();
    }, []);

    return (
        <View>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#ff0000"/>
                ) : (
                    <View>
                        <Text style={styles.tempText}>
                            {`Temperature: ${weather.main.temp}°C`}
                        </Text>
                        <Text style={styles.locText}>
                            {`Current Location: ${weather.name}, ${weather.sys.country}`}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    tempText: {
        fontSize: 30,
        marginBottom: 10
    },
    locText: {
        fontSize: 20
    }
});