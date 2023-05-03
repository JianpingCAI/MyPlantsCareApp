// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// interface PlantDetailProps {
//   title: string;
//   value: string;
// }

// const PlantDetail: React.FC<PlantDetailProps> = ({ title, value }) => {
//   return (
//     <View style={styles.detailContainer}>
//       <Text style={styles.title}>{title}:</Text>
//       <Text style={styles.value}>{value}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   detailContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//   },
// });

// export default PlantDetail;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PlantImageGallery from '../components/PlantImageGallery';
import { Plant } from '../store/types';

interface PlantDetailsProps {
  plant: Plant;
}

const PlantDetails = ({ plant }: PlantDetailsProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: plant.imageUrl }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subtitle}>Category: {plant.category}</Text>
        <Text style={styles.subtitle}>Watering Frequency: {plant.wateringFrequency}</Text>
        <Text style={styles.subtitle}>Daily Care: {plant.dailyCare}</Text>
      </View>
      <PlantImageGallery images={plant.images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default PlantDetails;
