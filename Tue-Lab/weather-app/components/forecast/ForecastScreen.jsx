import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { ActivityIndicator, Text, View, StyleSheet, FlatList } from "react-native";


const Item = ({temp}) => (
    <View>
      <Text>Temperature : {temp}</Text>
    </View>
  );

export const ForecastScreen = () => {
    const API_KEY = "83e01e3dce5d28839bb5a177cb51af12";
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWeather = async (lat, lon) => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let response = await fetch(URL)
            let data = await response.json();
            console.log("Fetching forecast data :",URL);
            console.log("Forecast Data :", data.list[0].main);
            setWeather(data.list);
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
                        <Text>Temperature Forecasting</Text>
                        {/* <Text style={styles.tempText}>
                            {`Temperature: ${weather.main.temp}°C`}
                        </Text> */}
                        <FlatList
                                data={weather.slice(0,20)}
                                keyExtractor={(item) => item.dt.toString()}
                                renderItem={({ item }) => <Item temp={item.main.temp} />                                    
                                }
                            />
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