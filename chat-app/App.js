import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './screens/SignIn';
// npm install @react-navigation/native @react-navigation/stack
// npm install @react-navigation/material-top-tabs
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ChatHome } from './screens/ChatHome';

export default function App() {

  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if(user) {
        setCurrUser(user)
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    // <View style={styles.container}>
    //   <SignIn/>
    // </View>

    <NavigationContainer style={styles.container}>
      {
        !currUser ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ChatHome}/>
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
