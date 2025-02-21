import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// npm install @react-navigation/bottom-tabs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { ForecastScreen } from './components/ForecastScreen/ForecastScreen';
import { SearchScreen } from './components/SearchScreen/SearchScreen';
import { ConvertTemp } from './components/ConvertTemp/ConvertTemp';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Forecast' component={ForecastScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Converter' component={ConvertTemp}/>
      </Tab.Navigator>
    </NavigationContainer>
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
