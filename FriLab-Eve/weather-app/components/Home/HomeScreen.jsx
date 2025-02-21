import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native"
// npm install expo-location
import * as Location from 'expo-location';

export const HomeScreen = () => {
    const API_KEY = '83e01e3dce5d28839bb5a177cb51af12';
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status != "granted") {
                alert("Permission denied to access location");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            let lat = location.coords.latitude;
            let lon = location.coords.longitude;
            console.log("Coordinates :",lat, lon);
            fetchWeather(lat, lon);
        })();
    }, []);

    const fetchWeather = async (lat, lon) => {
        let URL =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        setWeather(data);
        setLoading(false);
    }

    return (
        <>
            <View>
                <Text>Weather App</Text>

                {
                    loading ? (
                        <ActivityIndicator size="large" color="#ff0000"/>
                    ) : (
                        <View>
                            <Text>
                                {`Temperature : ${weather.main.temp} Celcius`}
                            </Text>
                            <Text>
                                {`Location : ${weather.name}, ${weather.sys.country}`}
                            </Text>
                        </View>
                    )
                }

            </View>
        </>
    )
}