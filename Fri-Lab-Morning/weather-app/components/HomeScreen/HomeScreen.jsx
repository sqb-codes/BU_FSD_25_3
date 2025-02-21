import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, Text, View } from "react-native";
// npm install expo-location
import * as Location from 'expo-location';
import { styles } from "./HomeScreen.styles";
import tempBg from "../../assets/img-2.jpg";


export const HomeScreen = () => {
    const API_KEY = '83e01e3dce5d28839bb5a177cb51af12';
    const [weather, setWeather] = useState(null);
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status != 'granted') {
                alert("Permission denied to access location");
                return;
            }
            
            let location = await Location.getCurrentPositionAsync({});
            let lat = location.coords.latitude;
            let lon = location.coords.longitude;
            console.log("Coordinates :",lat, lon);
            fetchWeather(lat, lon);
        })()
    }, []);

    const fetchWeather = async(lat, lon) => {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
            let response = await fetch(URL);
            let data = await response.json();
            console.log(data);
            setWeather(data);
            setLoader(false);
        } catch (error) {
            alert("Error while fetching data...");
        }
    }

    return (
        <ImageBackground 
            style={styles.bgImg} 
            source={tempBg}
        >
        <View style={styles.home_container}>
            <View>
                <Text style={styles.title}>Welcome to Weather App</Text>
            </View>
            <View>
                {
                    loader ? (
                        <ActivityIndicator size="large" color="#ff0000"/>
                    ) : (
                        <View>
                            <Text style={styles.tempText}>
                                {`Temperature: ${weather.main.temp}`}
                            </Text>
                            <Text style={styles.tempText}>
                                {`Location: ${weather.name}, ${weather.sys.country}`}
                            </Text>
                        </View>
                    )
                }
            </View>
        </View>
        </ImageBackground>
    )
}