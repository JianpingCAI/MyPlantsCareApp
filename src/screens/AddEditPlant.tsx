import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPlant, updatePlant } from '../store/actions/plants';

const AddEditPlant = ({ route, navigation }) => {
  const isEditMode = route.params?.plant;
  const [name, setName] = useState(isEditMode ? route.params.plant.name : '');
  const [category, setCategory] = useState(isEditMode ? route.params.plant.category : '');

  const dispatch = useDispatch();

  const handleSave = () => {
    if (isEditMode) {
      dispatch(updatePlant(route.params.plant.id, { name, category }));
    } else {
      dispatch(addPlant({ name, category }));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEditMode ? 'Edit Plant' : 'Add Plant'}</Text>
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
justifyContent: 'center',
paddingHorizontal: 20,
},
title: {
fontSize: 24,
marginBottom: 20,
textAlign: 'center',
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginBottom: 15,
},
button: {
backgroundColor: '#1E90FF',
borderRadius: 5,
padding: 12,
marginBottom: 15,
},
buttonText: {
color: '#fff',
textAlign: 'center',
},
});

export default AddEditPlant;
