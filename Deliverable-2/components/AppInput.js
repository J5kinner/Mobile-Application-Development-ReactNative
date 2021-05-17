import React from "react";
import { View, StyleSheet, Text, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";

const AppInput = ({ icon, ...otherProps }) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = otherProps;
  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={30} />}
        <TextInput
          style={[
            styles.textInput,
            otherProps.multiline && { height: otherProps.numberOfLines * 36 },
            hasError && styles.errorInput,
          ]}
          value={value}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.inputTextBackground,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    marginLeft: 10,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 20,
    width: "89%",
    color: "#000",
    margin: -4,
    flexDirection: "row",
    fontFamily: Platform.OS === "android" ? "System" : "Cochin",
  },
  errorText: {
    fontSize: 15,
    color: "red",
    paddingLeft: "15%",
  },
  errorInput: {
    borderColor: "red",
  },
});

export default AppInput;
