import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { styles } from "./App.styles";
import axios from "axios";
import { NewsCard } from "../components/NewsCard";

export const HomeScreen = () => {
    const API_KEY = '695e07af402f4b119f0703e9b19f4683';
    const COUNTRY = 'us';
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async() => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`
        try {
            console.log("Get News From :",newsURL);
            const res = await axios.get(newsURL);
            // console.log("News :",res.data);
            setNews(res.data.articles);
            setLoading(false);
        } catch (error) {
            console.error("Error while fetching news :",error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Top Headlines in ${COUNTRY.toUpperCase()}`}</Text>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#ff0000"/>
                ) : (
                    <FlatList
                        data={news}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <NewsCard news={item}/>}
                    />
                )
            }
        </View>
    )
}