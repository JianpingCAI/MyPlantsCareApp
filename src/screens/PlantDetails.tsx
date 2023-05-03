import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlantById } from '../store/actions/plants';
import PlantImageGallery from '../components/PlantImageGallery';

const PlantDetails = ({ route }) => {
    const dispatch = useDispatch();
    const plant = useSelector((state) => state.plants.find((p) => p.id === route.params.plantId));
    
    useEffect(() => {
    dispatch(fetchPlantById(route.params.plantId));
    }, [dispatch, route.params.plantId]);
    
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
    <PlantImageGallery images={plant.images} />
    <View style={styles.info}>
    <Text style={styles.label}>Category: {plant.category}</Text>
    <Text style={styles.label}>Watering frequency: {plant.wateringFrequency}</Text>
    <Text style={styles.label}>Daily care: {plant.dailyCare}</Text>
    </View>
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
    });
    
    export default PlantDetails;