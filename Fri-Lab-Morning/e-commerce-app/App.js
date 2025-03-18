import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
