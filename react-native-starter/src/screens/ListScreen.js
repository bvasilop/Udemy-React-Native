import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  listStyles: {
    fontSize: 30,
  },
});

const ListScreen = () => {
  const friends = [
    { name: 'Mitch' },
    { name: 'Paul' },
    { name: 'Mo' },
    { name: 'Pat' },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      style={styles.listStyles}
      keyExtractor={friend => friend.name}
    />
  );
};

export default ListScreen;
