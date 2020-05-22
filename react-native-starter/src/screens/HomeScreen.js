import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <TouchableOpacity onPress={() => console.log('List Pressed')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
);
export default HomeScreen;

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};
