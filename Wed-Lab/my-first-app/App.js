import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './App.styles';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileCard } from './components/profile/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Section-1 */}
      <View style={styles.wrapper}>
        <Text style={styles.title}>My First App</Text>
      </View>

      {/* Section-2 */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>Column-1</Text>
        </View>

        <View style={styles.col}>
          <Text>Column-2</Text>
        </View>

        <View style={styles.col}>
          <Text>Column-3</Text>
        </View>
      </View>

      <ProfileCard/>

    </SafeAreaView>
  );
}
