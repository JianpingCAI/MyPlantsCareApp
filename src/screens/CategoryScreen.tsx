import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PlantCategory from '../components/PlantCategory';

const mockData = [
  { id: '1', name: 'Succulents' },
  { id: '2', name: 'Indoor' },
  { id: '3', name: 'Outdoor' },
];

const CategoryScreen = () => {
  const renderItem = ({ item }) => (
    <PlantCategory categoryName={item.name} onPress={() => console.log(`${item.name} Pressed!`)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    flexGrow: 1,
  },
});

export default CategoryScreen;
