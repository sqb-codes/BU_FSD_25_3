import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ConvertButton.styles";

export function ConvertButton({onPress, unit}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Convert to {unit}</Text>
        </TouchableOpacity>
    )
}