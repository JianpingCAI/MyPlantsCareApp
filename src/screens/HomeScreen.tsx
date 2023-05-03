import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PlantCard from '../components/PlantCard';
import { useNavigation } from '@react-navigation/native';

const mockData = [
  { id: '1', name: 'Aloe Vera' },
  { id: '2', name: 'Snake Plant' },
  { id: '3', name: 'Peace Lily' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <PlantCard
      plantName={item.name}
      onPress={() => navigation.navigate('Plant', { plantId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Plants</Text>
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

export default HomeScreen;
