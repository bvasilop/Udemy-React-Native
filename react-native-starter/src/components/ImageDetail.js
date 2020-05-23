/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = ({ title, score, imageSource }) => (
  <View>
    <Image source={imageSource} />
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>Image score - {score}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default ImageDetail;

ImageDetail.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  imageSource: PropTypes.number,
};
