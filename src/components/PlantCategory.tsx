import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PlantCategoryProps {
  categoryName: string;
  onPress: () => void;
}

const PlantCategory: React.FC<PlantCategoryProps> = ({ categoryName, onPress }) => {
  return (
    <TouchableOpacity style={styles.category} onPress={onPress}>
      <Text style={styles.categoryName}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlantCategory;
