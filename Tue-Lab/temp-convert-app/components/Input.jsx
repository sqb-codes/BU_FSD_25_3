import { View, TextInput } from "react-native";
import { styles } from "./Input.styles";

export function Input({defaultValue}) {
    return (
        <View style={styles.root}>
            <TextInput
            style={styles.input}
            maxLength={3}
            placeholder="Enter temperature"
            defaultValue={defaultValue.toString()}
            />
        </View>
    )
}