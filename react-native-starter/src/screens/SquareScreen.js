/* eslint-disable no-empty */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = ({ initialColor }) => {
  const [red, setRed] = useState(initialColor);
  const [green, setGreen] = useState(initialColor);
  const [blue, setBlue] = useState(initialColor);

  const setColor = (color, change) => {
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
      } else {
        setRed(red + change);
      }
    }
  };
  return (
    <View style={styles.images}>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

SquareScreen.defaultProps = {
  initialColor: 0,
};

SquareScreen.propTypes = {
  initialColor: PropTypes.number,
};

export default SquareScreen;
