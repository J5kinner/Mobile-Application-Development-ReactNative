import React from "react";

import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors.js";
import AppScreen from "../components/AppScreen.js";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="baguette"
          size={90}
          color={AppColors.maroon}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.textInputContainer}>
              <AppTextInput
                icon="email"
                placeholder="Email Address"
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={ handleChange("email")}
              />
              <AppTextInput
                placeholder="Password"
                icon="lock"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
              />
            </View>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    padding: 25,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
  },
  textInputContainer: {
    marginVertical: 75,
  },
});
export default LoginScreen;
