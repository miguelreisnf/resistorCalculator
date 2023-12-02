import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import corVolt from './src/telas/corVolt/index.js'
import voltCor from './src/telas/voltCor/index.js'
import corVolto from './src/telas/voltCor/index2.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trabalho Resistores"
          component={corVolt}
        />
        <Stack.Screen
          name='voltCor'
          component={voltCor}
        />
        <Stack.Screen
          name='corVolto'
          component={corVolto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

