import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./Profile.styles";

export function ProfileCard({username, description, pic, onPressSocialMedia}) {
    return (
        <>
            <View style={styles.profileCard}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Image
                            style={styles.avatar}
                            source={{ uri: pic }}/>
                    </View>

                    {/* Header Content */}
                    <View>
                        <Text>{username}</Text>
                        <Text>{description}</Text>
                    </View>
                </View>

                <View style={styles.mediaIcons}>
                    <TouchableOpacity 
                        onPress={() => onPressSocialMedia("twitter")}>
                        <FontAwesome name="twitter" size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => onPressSocialMedia("linkedin")}>
                        <FontAwesome name="linkedin" size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => onPressSocialMedia("github")}>
                        <FontAwesome name="github" size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => onPressSocialMedia("facebook")}>
                        <FontAwesome name="facebook" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}