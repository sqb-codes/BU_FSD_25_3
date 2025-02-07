import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Profile.style";
// npm install @expo/vector-icons
import { FontAwesome } from "@expo/vector-icons";

export function ProfileCard({name, desc, onPressRedirect, imgUrl}) {
    return (
        <View style={styles.profileCard}>
            <View style={styles.header}>
                <View>
                    <Image 
                        style={styles.avatar} 
                        source={{ uri : imgUrl }} 
                    />
                </View>
                <View style={styles.profileDesc}>
                    <Text>{name}</Text>
                    <Text>
                        {desc}
                    </Text>
                </View>
            </View>

            <View style={styles.socialMediaIcons}>
                <TouchableOpacity onPress={() => onPressRedirect("linkedin")}>
                    <FontAwesome 
                        name="linkedin" 
                        size={24} 
                        color={"#0A66C2"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressRedirect("twitter")}>
                    <FontAwesome 
                        name="twitter" 
                        size={24}
                        color={"#1DA1F2"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressRedirect("github")}>
                    <FontAwesome 
                        name="github" 
                        size={24}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressRedirect("youtube")}>
                    <FontAwesome 
                        name="youtube" 
                        size={24}
                        color={"#CD201F"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}