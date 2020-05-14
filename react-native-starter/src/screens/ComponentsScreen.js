import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const titleStyles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
const greetingStyles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'blue',
  },
});
const title = (
  <Text style={titleStyles.textStyle}>This is the components screen</Text>
);
const greeting = <Text style={greetingStyles.textStyle}>Hi there!</Text>;

const ComponentsScreen = () => (
  <View>
    {title}
    {greeting}
  </View>
);
export default ComponentsScreen;
