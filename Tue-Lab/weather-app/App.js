import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './components/home/HomeScreen';
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen } from './components/search/SearchScreen';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    // <SafeAreaView style={styles.container}>
    //     <View>
    //       <Text style={styles.title}>Weather App</Text>
    //     </View>
    //     <HomeScreen/>
    // </SafeAreaView>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    fontSize: 50
  }
});
