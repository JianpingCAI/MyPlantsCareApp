import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlantById } from "../store/actions/plants";
import PlantImageGallery from "../components/PlantImageGallery";
import { Ionicons } from "@expo/vector-icons";

const PlantDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const plant = useSelector((state) =>
    state.plants.find((p) => p.id === route.params.plantId)
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchPlantById(route.params.plantId)).catch((error) => {
      setError(error.message);
    });
  }, [dispatch, route.params.plantId]);

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error, [{ text: "OK" }]);
    }
  }, [error]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("PlantList")}>
          <Ionicons
            name="md-arrow-back"
            size={24}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{plant.name}</Text>
      <ScrollView horizontal={true}>
        <PlantImageGallery images={plant.images} />
      </ScrollView>
      <View style={styles.info}>
        <Text style={styles.label}>Category: {plant.category}</Text>
        <Text style={styles.label}>
          Watering frequency: {plant.wateringFrequency}
        </Text>
        <Text style={styles.label}>Daily care: {plant.dailyCare}</Text>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          navigation.navigate("AddEditPlant", { plantId: plant.id })
        }
      >
        <Text style={styles.editButtonText}>Edit Plant</Text>
      </TouchableOpacity>
    </ScrollView>
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
  info: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#5C921F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
  },
  backIcon: {
    marginLeft: 10,
  },
});

export default PlantDetails;
