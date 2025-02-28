import { Image, StyleSheet, Text, View } from "react-native";

export const NewsCard = (news) => {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: news.news.urlToImage}}/>
            <Text style={styles.newsTitle}>
                {news.news.title}
            </Text>
            <Text>
                {news.news.description}
            </Text>
            <Text>
                {news.news.author}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 40,
        backgroundColor: "#fff",
        padding: 10
    },
    img: {
        height: 300,
        width: "100%",
        borderRadius: 3
    },
    newsTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 15
    }
})