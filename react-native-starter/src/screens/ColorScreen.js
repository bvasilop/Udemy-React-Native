/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const ColorScreen = ({ initialColor }) => {
  const [colors, setColors] = useState(initialColor);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRgb(),
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

ColorScreen.defaultProps = {
  initialColor: [],
};

ColorScreen.propTypes = {
  initialColor: PropTypes.array,
};

export default ColorScreen;
