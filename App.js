import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StudentScreen } from './src/screens/StudentScreen';
import { ApiScreen } from './src/screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#4b1c71" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StudentScreen"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#4b1c71' },
          }}
        >
          {/* Pantalla 1: Información del Estudiante */}
          <Stack.Screen name="StudentScreen" component={StudentScreen} />

          {/* Pantalla 2: Consumo de API */}
          <Stack.Screen name="ApiScreen" component={ApiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
