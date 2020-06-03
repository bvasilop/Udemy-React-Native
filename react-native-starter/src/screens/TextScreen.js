import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    width: 200,
    fontSize: 20,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});

const TextScreen = ({ initialValue }) => {
  const [name, setName] = useState(initialValue);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text style={styles.name}>My name is {name}</Text>
    </View>
  );
};
export default TextScreen;

TextScreen.defaultProps = {
  initialValue: '',
};

TextScreen.propTypes = {
  initialValue: PropTypes.string,
};
