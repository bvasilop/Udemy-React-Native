import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = () => (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      onPress={() => console.log('button pressed')}
      title="Go to Components Demo"
    />
  </View>
);
export default HomeScreen;
