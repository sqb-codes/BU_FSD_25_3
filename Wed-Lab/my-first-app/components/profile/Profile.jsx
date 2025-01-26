import { View, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./Profile.styles"

export function ProfileCard() {
    return (
        <View>
            <Image style={styles.avatar} source={{uri: "https://images.news18.com/ibnlive/uploads/2024/09/virat-kohli-sportzpics-feature-2024-09-410b8ad3a04894a57a462eea1c2f60d4.png?impolicy=website&width=360&height=270"}} />
        </View>
    )
}