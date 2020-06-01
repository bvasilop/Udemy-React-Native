import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingStyle: {
    fontSize: 20,
    color: 'blue',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
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
  <View style={styles.screen}>
    {title}
    {greeting}
  </View>
);
export default ComponentsScreen;
