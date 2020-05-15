import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  greetingStyle: {
    fontSize: 20,
    color: 'blue',
  },
});

const titleText = 'Getting started with React Native!';
const title = <Text style={styles.titleStyle}>{titleText}</Text>;

const greetingText = 'My name is';
const name = 'Bill';

const greeting = (
  <Text style={styles.greetingStyle}>
    {greetingText} {name}
  </Text>
);

const ComponentsScreen = () => (
  <View>
    {title}
    {greeting}
  </View>
);
export default ComponentsScreen;
