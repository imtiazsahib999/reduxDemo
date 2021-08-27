import React,{useState, useEffect} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CNPJ from './appScreens/CNPJ';
import Details from './appScreens/details';
const Stack = createStackNavigator();
const HomeStack = () =>{
  return(
    <Stack.Navigator initialRouteName='cnpj' headerMode='none'>
      <Stack.Screen
      name='cnpj'
      component={CNPJ}
      />
      <Stack.Screen
      name='details'
      component={Details}
      />
    </Stack.Navigator>
  )
}

const App = () =>{
  return(
      <NavigationContainer>
          <HomeStack />
      </NavigationContainer>
  )
}
export default App
