import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    fontSize: 20,
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    fontSize: 20,
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    fontSize: 20,
    height: 50,
    width: 50,
  },
});

const BoxScreen = () => (
  <View style={styles.parentStyle}>
    <Text style={styles.viewOneStyle}>Child #1</Text>
    <Text style={styles.viewTwoStyle}>Child #2</Text>
    <Text style={styles.viewThreeStyle}>Child #3</Text>
  </View>
);

export default BoxScreen;
