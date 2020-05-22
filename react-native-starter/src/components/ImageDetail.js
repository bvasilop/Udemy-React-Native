/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { BorderlessButton } from 'react-native-gesture-handler';

const ImageDetail = ({ title, imageSource }) => (
  <View>
    <Image source={imageSource} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default ImageDetail;

ImageDetail.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.number,
};
