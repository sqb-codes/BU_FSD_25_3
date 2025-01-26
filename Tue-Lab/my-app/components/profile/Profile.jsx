import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Profile.styles";

export function ProfileCard() {
    return (
        <View>
            <View>
                <Image style={styles.profilePic} source={{ uri: "https://media.licdn.com/dms/image/v2/C4E03AQFwP-pXEcbDqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663167951336?e=2147483647&v=beta&t=y7xpZWdwhegvz5rHQ0slADjUN8eBfvZ5wYdxaifz9Wc" }} />
                <View>
                    <Text>John Smith</Text>
                    <Text>
                        I am a Full Stack Developer
                    </Text>
                </View>
            </View>
        </View>
    )
}