import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 25,
  },
});

const ListScreen = () => {
  const friends = [
    { name: 'Mitch', age: '45' },
    { name: 'Paul', age: '48' },
    { name: 'Mo', age: '49' },
    { name: 'Pat', age: '40' },
    { name: 'George', age: '45' },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
      style={styles.listStyles}
      keyExtractor={friend => friend.name}
    />
  );
};

export default ListScreen;
