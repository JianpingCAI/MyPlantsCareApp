import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PlantCardProps {
  plantName: string;
  onPress: () => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plantName, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.plantName}>{plantName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlantCard;
