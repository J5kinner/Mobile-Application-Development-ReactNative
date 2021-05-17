import React from "react";

import {
  View,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.inputTextBackground,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    fontSize: 20,
    color: "#000",
    marginLeft: 10,
    flex: 1,
    fontFamily: Platform.OS === "android" ? "System" : "Cochin",
  },
});

export default AppTextInput;
