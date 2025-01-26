import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './App.styles';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from './components/profile/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello this is my first App...</Text>

      <ProfileCard/>

      {/* <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>Column-1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textStyle}>Column-2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textStyle}>Column-3</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
}


