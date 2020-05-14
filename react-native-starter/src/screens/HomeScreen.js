import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => <Text style={styles.text}>Hello World!</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
