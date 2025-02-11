import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native";

export const SearchScreen = () => {
    const API_KEY = "83e01e3dce5d28839bb5a177cb51af12";
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            let response = await fetch(URL)
            let data = await response.json();
            console.log("Fetching from :",URL);
            console.log("Data from weather API:", data);
            setWeather(data);
        } catch (error) {
            alert("Error while fetching weather data");
        }
    }

    return (
        <>
            <View>
                <TextInput
                    placeholder="Enter City"
                    onChangeText={setCity}
                />
            </View>
            <Button onPress={fetchWeather} title="Get Weather" />
            {weather && <Text>{`Temp: ${weather.main.temp}`}</Text>}
        </>
    )

}