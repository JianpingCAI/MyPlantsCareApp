import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import PlantList from "../screens/PlantList";
import PlantDetails from "../screens/PlantDetails";
import AddEditPlant from "../screens/AddEditPlant";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";

// const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  PlantList: undefined;
  PlantDetails: { plantId: string };
  AddEditPlant: { plantId?: string };
  Settings: undefined;
  Notifications: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="PlantList"
        component={PlantList}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="PlantDetails" component={PlantDetails} />
      <Stack.Screen name="AddEditPlant" component={AddEditPlant} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
