// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "../screens/HomeScreen";
// import PlantScreen from "../screens/PlantScreen";
// import CategoryScreen from "../screens/CategoryScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// import EditPlantScreen from "../screens/EditPlantScreen";
// import Login from "../screens/Login"
// import Signup from "../screens/Signup";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Plant"
//         component={PlantScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Category"
//         component={CategoryScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="EditPlant"
//         component={EditPlantScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import PlantList from '../screens/PlantList';
import PlantDetails from '../screens/PlantDetails';
import AddEditPlant from '../screens/AddEditPlant';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PlantList" component={PlantList} />
      <Stack.Screen name="PlantDetails" component={PlantDetails} />
      <Stack.Screen name="AddEditPlant" component={AddEditPlant} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default AppNavigator;