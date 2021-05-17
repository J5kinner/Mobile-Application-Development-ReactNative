import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";

function AppButton({ title, color = "maroon", onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: AppColors[color] }]}>
        <Text style={styles.text}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.maroon,
    borderRadius: 5,
    padding: 11,
    marginBottom: 15,
    marginVertical: 9,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: AppColors.white,
    fontSize: 21,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
