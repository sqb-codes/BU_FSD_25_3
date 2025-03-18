import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Product = ({title, products}) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
                <View style={styles.product_wrapper}>
                {
                    products.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.product_card}>
                            <View>
                                <Image style={styles.img} source={{uri: item.image}}/>
                            </View>
                            <View>
                                <Text style={styles.p_name}>{item.name}</Text>
                                <Text style={styles.p_price}>{item.price}</Text>
                                <Text style={styles.p_brand}>{item.brand}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    product_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    product_card: {
        width: "48%",
        marginBottom: 20,
        shadowColor: "#aaa",
        shadowOpacity: 10
    },
    img: {
        height: 100,
        width: "100%"
    },
})