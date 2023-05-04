import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../store/actions/plants";
import PlantCard from "../components/PlantCard";
import { Ionicons } from "@expo/vector-icons";

const PlantList = ({ navigation }) => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.plants);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchPlants()).catch((error) => {
      setError(error.message);
    });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error, [{ text: "OK" }]);
    }
  }, [error]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="md-settings" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Ionicons
              name="md-notifications"
              size={24}
              color="black"
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plants</Text>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <PlantCard
            plant={item}
            onPress={() =>
              navigation.navigate("PlantDetails", { plantId: item.id })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddEditPlant")}
      >
        <Ionicons name="md-add" size={30} color="white" />
      </TouchableOpacity>
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
  addButton: {
    backgroundColor: "#5C921F",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  headerButtons: {
    flexDirection: "row",
    marginRight: 10,
  },
  notificationIcon: {
    marginLeft: 20,
  },
});

export default PlantList;
