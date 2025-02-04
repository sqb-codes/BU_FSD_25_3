import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { styles } from './App.styles';
import tempBg from "./assets/temp-bg.jpg";
import { Input } from './components/Input';

export default function App() {
  return (
    <ImageBackground style={styles.bgImg} source={tempBg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.workspace}>
          <Text>Temperature</Text>
          {/* <Text>Input</Text> */}
          <Input defaultValue={0}/>
          <Text>Button</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}


