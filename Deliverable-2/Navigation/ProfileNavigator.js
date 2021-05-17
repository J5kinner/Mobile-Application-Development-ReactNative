import React from "react";

import { Easing } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";

const AppStack = createStackNavigator();

const openConfig = {
  animation: "spring",
  config: {
    stiffness: 999,
    damping: 49,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.03,
    restSpeedThreshold: 0.02,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 400,
    easiing: Easing.linear,
  },
};

const profileNavigator = () => (
  <AppStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      transitionSpec: {
        open: openConfig,
        close: closeConfig,
      },
    }}
  >
    <AppStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Saved"
      component={SavedScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default profileNavigator;
