import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './screens/Home';
import Details from './screens/Details';
import Contact from './screens/Contact';

export type RootStackParamList = {
  Home: undefined;
  Details: {productID: string};
  Contact: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{
        // headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title:"Trending Products",
            gestureEnabled: true
          }} 
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title:"Product Details",
            gestureEnabled: true
          }} 
        />
         <Stack.Screen
          name='Contact'
          component={Contact}
          options={{
            title:"Contact Info",
            gestureEnabled: true
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
