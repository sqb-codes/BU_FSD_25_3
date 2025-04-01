import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';

export const ProductWrapper = ({product_section}) => {
    return (
        <View style={styles.product_wrapper}>
            {
                product_section.map((item) => (
                    <View key={item.id} style={styles.product_card}>
                        <TouchableOpacity>
                            <Image style={styles.product_img} source={{uri: item.image}}/>
                            <View>
                                <Text style={styles.product_name}>{item.name}</Text>
                                <Text style={styles.product_price}>{item.price}</Text>
                                <Text style={styles.product_brand}>{item.brand}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    product_wrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginBottom: 20
    },
    product_card: {
        width: "46%",
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    product_img: {
        width: "100%",
        height: 150
    }    
});