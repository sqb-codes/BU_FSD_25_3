import { Text } from "react-native";
import { styles } from "./DisplayTemp.styles";

export function DisplayTemp({temp, unit}) {
    return (
        <Text style={styles.temp}>
            {temp} {unit}
        </Text>
    )
}