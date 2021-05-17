import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppPickerItem({ onPress, label, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name={icon}
        iconColor="white"
        backgroundColor={backgroundColor}
      />

      <AppText> {label} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    paddingVertical: 15,
    width: "33%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default AppPickerItem;
