/* eslint-disable global-require */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = ({ title, imageSource }) => (
  <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({});

export default ImageDetail;

ImageDetail.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.number,
};
