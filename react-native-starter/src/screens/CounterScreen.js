/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const CounterScreen = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  return (
    <View>
      <Text style={styles.text}>Current Count: {counter}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setCounter(initialCount);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

CounterScreen.defaultProps = {
  initialCount: 0,
};

CounterScreen.propTypes = {
  initialCount: PropTypes.number,
};

export default CounterScreen;
