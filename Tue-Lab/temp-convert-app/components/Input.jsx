import { View, TextInput, Text } from "react-native";
import { styles } from "./Input.styles";

export function Input({defaultValue, onChange, unit}) {
    return (
        <View style={styles.root}>
            <TextInput
            style={styles.input}
            maxLength={4}
            placeholder="Enter temperature"
            defaultValue={defaultValue.toString()}
            onChangeText={(text) => {
                onChange(text)
            }}
            />
            <Text>{unit}</Text>
        </View>
    )
}