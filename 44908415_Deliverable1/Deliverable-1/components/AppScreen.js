import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";

function AppScreen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      <KeyboardAvoidingView behavior="padding" style={styles.paddingView}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight - 10,
  },
  paddingView: {
    flex: 1,
    padding: 10,
  },
});

export default AppScreen;
