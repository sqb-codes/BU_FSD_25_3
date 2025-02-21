import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import * as Location from 'expo-location';

export const ForecastScreen = () => {
    const API_KEY = '83e01e3dce5d28839bb5a177cb51af12';
    const [forecast, setForecast] = useState([]);
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
            fetchForecastData(lat, lon);
        })();
    }, []);

    const fetchForecastData = async (lat, lon) => {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            console.log("URL is : ",URL);
            let response = await fetch(URL);
            let data = await response.json();
            console.log("Forecast data :",data);
            setForecast(data.list);
            setLoading(false);
        } catch(error) {
            console.log("Error :",error);
            alert("Error while fetching data...");
        }
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
                            <FlatList
                                data={forecast.slice(0,15)}
                                keyExtractor={(item) => item.dt.toString()}
                                renderItem={({ item }) => (
                                    <Text>
                                        {`Temperature : ${item.main.temp} Celcius`}
                                    </Text>
                    )}
                            />
                        </View>
                    )
                }

            </View>
        </>
    )
}