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

    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />

    {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
);
export default HomeScreen;

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};
