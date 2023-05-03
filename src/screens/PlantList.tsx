import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../store/actions/plants';
import PlantCard from '../components/PlantCard';

const PlantList = ({ navigation }) => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plants</Text>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <PlantCard
            plant={item}
            onPress={() => navigation.navigate('PlantDetails', { plantId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PlantList;