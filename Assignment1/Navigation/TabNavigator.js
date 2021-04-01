import React from "react";
import {} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import MyBangerScreen from "../screens/MyBangerScreen";
import NewSongScreen from "../screens/NewSongScreen";
import AppIcon from "../components/AppIcon";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{ activeTintColor: "red", activeBackgroundColor: "grey" }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="baguette"
            backgroundColor="indigo"
            iconColor="white"
          />
        ),
      }}
    />
    <AppTab.Screen
      name="Songs"
      component={MyBangerScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="account-box-multiple"
            backgroundColor="indigo"
            iconColor="white"
          />
        ),
      }}
    />
    <AppTab.Screen
      name="New Song"
      component={NewSongScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="turtle"
            backgroundColor="indigo"
            iconColor="white"
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
