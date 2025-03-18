import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../components/ProductComponent";

const PRODUCTS = [...Array(100).keys()].map((i) => ({
    id: i+1,
    name: `Product ${i+1}`,
    brand: 'Company X',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/030/607/510/small/cosmetic-rounded-all-white-soap-bottle-mockup-on-white-table-ai-generative-free-photo.jpg',
    price: ((i + 1) * 10).toFixed(2) + '$'
}));

export const HomeScreen = () => {
    const trending = PRODUCTS.slice(0,10);
    const top_deals = PRODUCTS.slice(20,24);
    const recommended = PRODUCTS.slice(30,36);
    return (
        <ScrollView style={styles.container}>
            <Image 
                style={styles.ad_image}
                source={{uri: "https://static.vecteezy.com/system/resources/previews/004/852/367/non_2x/christmas-online-sale-banner-design-christmas-sale-text-with-online-mobile-shopping-app-for-xmas-virtual-shop-promotion-ads-illustration-vector.jpg"}}/>
            
            <Product title="Latest & Trending" products={trending}/>

            <Image 
                style={styles.ad_image}
                source={{uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/261567211/original/46ebee634abf184f41d56e173fb7fab80368502d/design-google-ads-banner-website-banners-or-web-banner.jpg"}}/>

            <Product title="Top Deals" products={top_deals}/>

            <Product title="Recommended" products={recommended}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    ad_image: {
        width: "100%",
        height: 200,
        marginBottom: 15
    }
})