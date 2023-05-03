// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// interface PlantCardProps {
//   plantName: string;
//   onPress: () => void;
// }

// const PlantCard: React.FC<PlantCardProps> = ({ plantName, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//       <View>
//         <Text style={styles.plantName}>{plantName}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   plantName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default PlantCard;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PlantCard = ({ plant, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: plant.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{plant.name}</Text>
        <Text style={styles.category}>{plant.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
});

export default PlantCard;
