import { Text } from "react-native";

export function DisplayAge({ age }) {
  return <Text style={{ fontSize: 40 }}> I am {age} years old</Text>;
}