import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from "react-native";
// npm install expo-location
import * as Location from 'expo-location';
import { styles } from "./ForecastScreen.styles";
import tempBg from "../../assets/img-2.jpg";

const Item = ({temp}) => (
    <View>
        <Text style={styles.tempText}>
            {`Temperature: ${temp}`}
        </Text>
    </View>
)

export const ForecastScreen = () => {
    const API_KEY = '83e01e3dce5d28839bb5a177cb51af12';
    const [weather, setWeather] = useState(null);
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        (async () => {            
            let location = await Location.getCurrentPositionAsync({});
            let lat = location.coords.latitude;
            let lon = location.coords.longitude;
            console.log("Coordinates :",lat, lon);
            fetchWeather(lat, lon);
        })()
    }, []);

    const fetchWeather = async(lat, lon) => {
        try {
            let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let response = await fetch(URL);
            let data = await response.json();
            console.log(data);
            setWeather(data.list);
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
                <Text style={styles.title}>Temperature Forecast</Text>
            </View>
            <View>
                {
                    loader ? (
                        <ActivityIndicator size="large" color="#ff0000"/>
                    ) : (
                        <FlatList
                            data={weather.slice(0,20)}
                            keyExtractor={(item) => item.dt.toString()}
                            renderItem={({ item }) => <Item
                                temp={item.main.temp}
                            />}

                        />
                        // <View>
                        //     <Text style={styles.tempText}>
                        //         {`Temperature: ${weather[0].main.temp}`}
                        //     </Text>
                        // </View>
                    )
                }
            </View>
        </View>
        </ImageBackground>
    )
}