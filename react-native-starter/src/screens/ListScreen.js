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
    { name: 'Mitch' },
    { name: 'Paul' },
    { name: 'Mo' },
    { name: 'Pat' },
    { name: 'George' },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>{item.name}</Text>
      )}
      style={styles.listStyles}
      keyExtractor={friend => friend.name}
    />
  );
};

export default ListScreen;
