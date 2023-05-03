import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PlantCard from "../components/PlantCard";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const mockData = [
  { id: "1", name: "Aloe Vera" },
  { id: "2", name: "Snake Plant" },
  { id: "3", name: "Peace Lily" },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <PlantCard
      plantName={item.name}
      onPress={() => navigation.navigate("Plant", { plantId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Plants</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <ScrollView contentContainerStyle={styles.navigationButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("EditPlant")}>
          <Text style={styles.buttonText}>New Plant</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <Text style={styles.buttonText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
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
  list: {
    flexGrow: 1,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200EE",
  },
});

export default HomeScreen;
