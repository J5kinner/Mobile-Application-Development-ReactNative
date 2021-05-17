import React from "react";

import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik, Field } from "formik";
import * as yup from "yup";

import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

const schema = yup.object().shape({
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
});

const users = [
  {
    id: "user1",
    name: "Fake Account",
    email: "fake@fake.com",
    password: "Asdfgh1!",
    image: require("../assets/user3.jpg"),
  },
  {
    id: "user2",
    name: "Bake Account",
    email: "baked@gmail.com",
    password: "Asdfgh1!",
    image: require("../assets/user4.jpg"),
  },
];

const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

const getUser = ({email}) => {
  return users.find((user) => user.email === email);
}

const createUser = ({email}) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({email}).id;
  commonData.setUserID(userID);
}

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="tower-beach"
          size={100}
          color={AppColors.maroon}
        />
        <AppText>Good to see you again</AppText>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            resetForm();
            createUser(values);
            navigation.navigate("TabNav", {
              screen: "Profile",
                params:{
                  paramEmail: values.email,
                  paramName: getUser(values).name,
                  paramImage:getUser(values).image
                },
            });
          } else {
            resetForm();
            alert("Invalid Login Details");
          }
        }}
        validationSchema={schema}
      >
        {({ values, handleSubmit, isValid }) => (
          <>
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
              icon="shield-lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              value={values.password}
            />

            <AppButton
              title="LOG IN"
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
    flex: 2,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  textInputContainer: {
    paddingVertical: 15,
  },
  error: {
    color: "red",
    fontSize: 16.5,
  },
});
export default LoginScreen;
