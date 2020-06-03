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
});

const TextScreen = ({ initialValue }) => {
  const [password, setPassword] = useState(initialValue);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? (
        <Text>Password must be at least 4 characters</Text>
      ) : null}
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
