import React from "react";

import { Text, StyleSheet, Platform } from "react-native";

function AppText({ style, children }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontFamily: Platform.OS === "android" ? "System" : "Avenir-Roman",
  },
});

export default AppText;
