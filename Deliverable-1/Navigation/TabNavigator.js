import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import * as React from "react";

import AppColors from "../config/AppColors";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Explore") {
          return (
            <Ionicons
              name={focused ? "map-sharp" : "map-outline"}
              size={size}
              color={color}
            />
          );
        } else if (route.name === "Saved") {
          return (
            <Ionicons
              name={focused ? "heart-sharp" : "heart-outline"}
              size={size}
              color={color}
            />
          );
        } else if (route.name === "Profile") {
          return (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              size={size}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: AppColors.red,
      inactiveTintColor: AppColors.grey,
    }}
  >
    <AppTab.Screen name="Explore" component={ExploreScreen} />
    <AppTab.Screen name="Saved"component={SavedScreen} options={{ tabBarBadge: 3 }}/>
    <AppTab.Screen name="Profile" component={ProfileScreen} />
  </AppTab.Navigator>
);

export default TabNavigator;
