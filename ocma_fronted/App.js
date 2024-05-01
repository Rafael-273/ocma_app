import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { loadFonts } from './fonts';
import React, { useEffect } from 'react';

import Login from './screens/login';

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Login/>
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
