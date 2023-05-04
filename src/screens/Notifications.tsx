import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchWateringReminders } from "../services/WateringReminders";
import { RootState } from "../store/reducers";
import { Plant } from "../store/types";
import PlantCard from "../components/PlantCard";

const Notifications = () => {
  const [loading, setLoading] = useState(false);
  const plants = useSelector((state: RootState) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetchWateringReminders()
      .then((reminders) => {
        // Do something with the fetched reminders, e.g., update the plant list
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const renderItem = ({ item }: { item: Plant }) => {
    return <PlantCard plant={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={plants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default Notifications;
