import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView>
      <LoginScreen/>
      {/* <HomeScreen/> */}
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
