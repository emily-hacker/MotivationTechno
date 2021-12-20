import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EcranSelection from './pages/ecranSelection/EcranSelection';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navi/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

