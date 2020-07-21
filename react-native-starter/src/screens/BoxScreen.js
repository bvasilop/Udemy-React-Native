import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    // flexDirection: 'row',
    height: 200,
    // alignItems: 'flex-end',
    // justifyContent: 'space-around',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 20,
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 20,
    flex: 4,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 20,
    flex: 2,
  },
});

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>
);

export default BoxScreen;
