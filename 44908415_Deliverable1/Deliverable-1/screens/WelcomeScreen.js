/*
 * Luggage image is from https://www.freepik.com/free-vector/trip-concept-illustration_6610843.htm#page=1&query=travel&position=39
 */
import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

const blueRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen style={styles.background}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="tower-beach"
          size={75}
          color={AppColors.maroon}
        />
        <AppText>Welcome to Wanderer</AppText>
        <Image
          style={styles.image}
          source={require("../assets/luggage.jpg")}
          // blurRadius={blueRadiusValue}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Register"
          color="blue"
          onPress={() => navigation.navigate("Register")}
        />
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={styles.authorContainer}>
        <AppText style={styles.authorContainer}>Created by Jonah Skinner</AppText>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.white,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 47,
    flex: 3,
    paddingTop: 50,
  },
  buttonContainer: {
    flex: 0.5,
    marginTop: 30,
    padding: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  authorContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
