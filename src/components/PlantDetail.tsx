import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlantDetailProps {
  title: string;
  value: string;
}

const PlantDetail: React.FC<PlantDetailProps> = ({ title, value }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default PlantDetail;
