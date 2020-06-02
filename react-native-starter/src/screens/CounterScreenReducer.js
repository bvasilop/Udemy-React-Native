/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement' }
  switch (action.type) {
    case 'change_increment':
      return { ...state, count: state.count + action.payload };
    case 'change_decrement':
      return { ...state, count: state.count - action.payload };
    case 'change_reset':
      return { count: 0 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  console.log(state);

  return (
    <View>
      <Text style={styles.text}>Current Count: {count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'change_increment', payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({
            type: 'change_decrement',
            payload: COUNTER_INCREMENT,
          });
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ type: 'change_reset', payload: state });
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

export default CounterScreen;
