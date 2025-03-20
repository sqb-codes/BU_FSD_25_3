import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { ProductWrapper } from '../components/ProductCard';

const PRODUCTS = [...Array(100).keys()].map((i) => ({
    id: i+1,
    name: `Product ${i+1}`,
    brand: 'Brand X',
    image: 'https://fuelshoes.com/cdn/shop/files/8_1e1df76b-b544-44fc-8c2f-e31dba4b1eb3.jpg?v=1720001401&width=3000',
    price: ((i + 1) * 10).toFixed(2)
}));

export const HomeScreen = () => {
    const trending = PRODUCTS.slice(0,6);
    const top_deals = PRODUCTS.slice(10,14);
    const recommended = PRODUCTS.slice(20,24);

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{uri: "https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/02/22222247/auto-draft-1378.jpg"}}
                style={styles.banner_img}
            />
            <Text style={styles.title}>Latest & Trending Products</Text>
            <ProductWrapper
                product_section={trending}
            />

            <Image
                source={{uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/261567211/original/46ebee634abf184f41d56e173fb7fab80368502d/design-google-ads-banner-website-banners-or-web-banner.jpg"}}
                style={styles.banner_img}
            />

            <Text style={styles.title}>Top Deals</Text>
            <ProductWrapper
                product_section={top_deals}
            />

            <Image
                source={{uri: "https://s.tmimgcdn.com/scr/1200x750/259600/fashion-web-banners-google-ads-banner-psd-social-media_259643-original.jpg"}}
                style={styles.banner_img}
            />

            <Text style={styles.title}>Recommended</Text>
            <ProductWrapper
                product_section={recommended}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    banner_img: {
        width: "100%",
        height: 250,
        marginBottom: 20
    }    
});
  