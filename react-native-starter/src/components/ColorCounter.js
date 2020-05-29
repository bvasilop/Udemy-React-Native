import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ColorCounter = ({ color, onIncrease, onDecrease }) => (
  <View>
    <Text style={styles.text}>{color}</Text>
    <Button onPress={() => onIncrease()} title={`Increase ${color}`}></Button>
    <Button onPress={() => onDecrease()} title={`Decrease ${color}`}></Button>
  </View>
);

ColorCounter.propTypes = {
  color: PropTypes.string,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export default ColorCounter;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});
