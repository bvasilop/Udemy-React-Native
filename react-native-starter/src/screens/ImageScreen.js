/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
  <View style={styles.image}>
    <Text style={styles.text}>Images</Text>
    <ImageDetail
      title="Forest"
      score={9}
      imageSource={require('../../assets/forest.jpg')}
    />
    <ImageDetail
      title="Beach"
      score={7}
      imageSource={require('../../assets/beach.jpg')}
    />
    <ImageDetail
      title="Mountain"
      score={10}
      imageSource={require('../../assets/mountain.jpg')}
    />
  </View>
);

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default ImageScreen;
