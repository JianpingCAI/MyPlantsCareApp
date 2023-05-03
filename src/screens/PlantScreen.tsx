import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PlantDetail from "../components/PlantDetail";
import WateringReminder from "../components/WateringReminder";
import { TouchableOpacity } from "react-native-gesture-handler";

const PlantScreen = () => {
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);

  const toggleReminder = () => {
    setIsReminderEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aloe Vera</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/300" }}
        style={styles.image}
      />
      <PlantDetail title="Watering" value="Every 2-3 weeks" />
      <PlantDetail title="Light" value="Bright, indirect light" />
      <PlantDetail title="Temperature" value="15-30°C (59-86°F)" />
      <WateringReminder
        isEnabled={isReminderEnabled}
        toggleSwitch={toggleReminder}
      />
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("EditPlant", { plant: mockData })}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
});

export default PlantScreen;
