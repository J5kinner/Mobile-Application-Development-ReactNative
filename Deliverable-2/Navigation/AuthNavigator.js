import React from "react";

import { Easing } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import AppColors from "../config/AppColors";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";

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

const AuthNavigator = () => (
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
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: "",
        headerShown: false,
        headerStyle: {
          height: 100,
          backgroundColor: AppColors.inputTextBackground,
        },
        headerTintColor: AppColors.maroon,
      }}
    />
    <AppStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: "",
        headerShown: false,
        headerStyle: {
          height: 100,
          backgroundColor: AppColors.inputTextBackground,
        },
        headerTintColor: AppColors.maroon,
      }}
    />
    <AppStack.Screen
      name="TabNav"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
