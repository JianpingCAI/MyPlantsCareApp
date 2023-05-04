import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPlant, updatePlant } from "../store/actions/plants";
import { Ionicons } from "@expo/vector-icons";

const AddEditPlant = ({ route, navigation }) => {
  const isEditMode = route.params?.plant;
  const [name, setName] = useState(isEditMode ? route.params.plant.name : "");
  const [category, setCategory] = useState(
    isEditMode ? route.params.plant.category : ""
  );
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error, [{ text: "OK" }]);
    }
  }, [error]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSave = async () => {
    if (!name || !category) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      if (isEditMode) {
        await dispatch(updatePlant(route.params.plant.id, { name, category }));
        navigation.navigate("PlantDetails", { plantId: route.params.plant.id });
      } else {
        await dispatch(addPlant({ name, category }));
        navigation.navigate("PlantList");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isEditMode ? "Edit Plant" : "Add Plant"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Plant Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        onChangeText={setCategory}
        value={category}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  backIcon: {
    marginLeft: 10,
  },
});

export default AddEditPlant;
