import React, { useState } from "react";

import { Switch, View, StyleSheet } from "react-native";

function TestScreen(props) {
  const [isEnabled, setisEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={(input) => setisEnabled(input)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

export default TestScreen;
