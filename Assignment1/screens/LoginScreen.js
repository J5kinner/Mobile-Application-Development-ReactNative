import React from "react";

import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const users = [
  {
    name: "Phil Dooley",
    email: "phil@gmail.com",
    password: "asdf",
  },
  {
    name: "Bob Marley",
    email: "Bob@gmail.com",
    password: "qwer",
  },
];

const validateUser = ({email, password}) => {
  return(
    users.filter((user) => user.email === email && user.password === password).length > 0
  );
};

function LoginScreen({ navigation }) {
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
        onSubmit={(values, {resetForm}) => {
          if(validateUser(values)){
            console.log(values);
            resetForm();
            navigation.navigate("Home");
          } else {
            resetForm();alert("Invalid Login Details")
          }
        }}
        validationSchema={schema}
      >
        {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
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
                value={values.email}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && (
                <AppText style={styles.error}>{errors.email}</AppText>
              )}
              <AppTextInput
                placeholder="Password"
                icon="lock"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                secureTextEntry
                value={values.password}

                textContentType="password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && (
                <AppText style={styles.error}>{errors.password}</AppText>
              )}
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
    backgroundColor: AppColors.background,
    padding: 25,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginVertical: 75,
  },
  error: {
    color: "red",
    fontSize: 17,
  },
});
export default LoginScreen;
