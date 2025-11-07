import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';

const App = () => {
  return <LoginScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;