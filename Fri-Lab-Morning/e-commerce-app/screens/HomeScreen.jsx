import { Image, ScrollView, StyleSheet } from "react-native";
import { ProductSection } from "../components/ProductContainer";

const PRODUCTS = [...Array(50).keys()].map((i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    brand: 'Brand X',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/030/607/510/small/cosmetic-rounded-all-white-soap-bottle-mockup-on-white-table-ai-generative-free-photo.jpg',
    price: ((i + 1) * 10).toFixed(2)
}));

export const HomeScreen = () => {
    const trending = PRODUCTS.slice(0, 4);
    const top_deals = PRODUCTS.slice(10, 14);
    const recommended = PRODUCTS.slice(20, 24);
    return (
        <ScrollView style={styles.scroll_container}>
            <Image 
                source={{uri : "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/261567211/original/46ebee634abf184f41d56e173fb7fab80368502d/design-google-ads-banner-website-banners-or-web-banner.jpg"}}
                style={styles.adImage}
            />

            <ProductSection
                title="Latest & Trending Products"
                products={trending}
            />

            <Image 
                source={{uri : "https://img.freepik.com/premium-vector/online-shop-banner-template_653829-23.jpg"}}
                style={styles.adImage}
            />

            <ProductSection
                title="Top Deals"
                products={top_deals}
            />

            <ProductSection
                title="Recommended for you"
                products={recommended}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll_container: {
        padding: 15,
    },
    adImage: {
        width: "100%",
        height: 200,
        marginBottom: 20
    }
})