import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = () => <Text style={styles.text}>Hello World!</Text>;

export default HomeScreen;
