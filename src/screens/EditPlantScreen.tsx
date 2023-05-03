import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addPlant, updatePlant, deletePlant } from "../redux/actions/plantActions";

const EditPlantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { plant } = route.params ?? {};

  const [name, setName] = useState(plant ? plant.name : '');  

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (plant) {
      dispatch(updatePlant({ ...plant, name }));
    } else {
      const newPlant = {
        id: Date.now().toString(),
        name,
      };
      dispatch(addPlant(newPlant));
    }
    navigation.goBack();
  };

  const handleDelete = () => {
    dispatch(deletePlant(plant.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Plant Name"
        value={name}
        onChangeText={setName}
      />
      {/* Add more input fields for other plant details */}
      <Button title="Save" onPress={handleSubmit} />
      {plant && (
        <Button title="Delete Plant" color="red" onPress={handleDelete} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
});

export default EditPlantScreen;
