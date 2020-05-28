/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const ColorScreen = ({ initialColor }) => {
  const [colors, setColors] = useState(initialColor);

  return (
    <View style={styles.images}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              height: 130,
              width: 130,
              margin: 2,
              backgroundColor: item,
            }}
          />
        )}
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
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ColorScreen.defaultProps = {
  initialColor: [],
};

ColorScreen.propTypes = {
  initialColor: PropTypes.array,
};

export default ColorScreen;
