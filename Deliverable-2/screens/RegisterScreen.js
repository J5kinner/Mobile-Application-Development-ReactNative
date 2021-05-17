import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik, Field } from "formik";
import * as yup from "yup";

import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import DataManager from "../config/DataManager";


const signUpValidateschema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password needs a small letter")
    .matches(/\w*[A-Z]\w*/, "Password needs a capital letter")
    .matches(/\d/, "Password needs a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password needs a special character"
    )
    .min(8, ({ min }) => `Password needs at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Confirm password is required"),
});


const createUser = ({email}) => {
  let commonData = DataManager.getInstance();
  let userID = "newUser1";
  commonData.setUserID(userID);
}

function RegisterScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="tower-beach"
          size={100}
          color={AppColors.maroon}
        />
        <AppText>Register Here</AppText>
      </View>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpValidateschema}
        onSubmit={(values, { resetForm }) => {
          createUser(values);
          navigation.navigate("TabNav", {
            screen: "Profile",
              params:{
                paramEmail: values.email,
                paramName: values.fullName,
                paramImage:values.image=require("../assets/user2.jpg")
              }
          });
        }}
      >
        {({ values, handleSubmit, isValid }) => (
          <>
            <Field
              component={AppInput}
              icon="account"
              name="fullName"
              placeholder="Full Name"
              value={values.fullName}
            />
            <Field
              component={AppInput}
              icon="email"
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
              value={values.email}
            />

            <Field
              component={AppInput}
              icon="shield-lock-outline"
              name="password"
              placeholder="Password"
              secureTextEntry
            />

            <Field
              component={AppInput}
              icon="shield-lock"
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
              value={values.confirmPassword}
            />

            <AppButton
              title="register"
              onPress={handleSubmit}
              disabled={isValid || values.name === "" || values.email === ""}
            />
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
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    padding: 1,
  },
});
export default RegisterScreen;
