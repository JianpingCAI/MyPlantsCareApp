
// import React from 'react';
// import { View, Image, FlatList, StyleSheet } from 'react-native';

// const PlantImageGallery = ({ images }) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
//         numColumns={3}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginRight: 10,
//     marginBottom: 10,
//   },
// });

// export default PlantImageGallery;

import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.3;

interface PlantImageGalleryProps {
  images: string[];
}

const PlantImageGallery = ({ images }: PlantImageGalleryProps) => {
  const renderItem = ({ item }: { item: string }) => {
    return <Image style={styles.image} source={{ uri: item }} />;
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal={false}
      numColumns={3}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 5,
  },
});

export default PlantImageGallery;
