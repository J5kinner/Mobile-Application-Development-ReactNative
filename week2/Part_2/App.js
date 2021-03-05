import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handleClick = () => Linking.openURL("http://netflix.com.au");
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={
          (() => console.log("Wow Console Feedback"),
          Alert.alert("G'day", "Do you love Netflix?", [
            { text: "Yes", onPress: () => alert("Yay!!!!") },
            { text: "No", onPress: () => alert("Oh No!") },
          ]))
        }
      >
        <Text style={styles.text}>No FeedBack</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={{ uri: "https://logodix.com/logo/786654.jpg" }}
        />
      </TouchableOpacity>

      <Text
        style={styles.text}
        onPress={() => Linking.openURL("http://netflix.com.au")}
      >
        NETFLIX
      </Text>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/netflix_logo.png")}
        style={styles.image}
      />
      <Button
        color="#ee3523"
        title="ENTER SITE"
        onPress={() => alert("Site under Construction")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 100,
  },
  text: {
    color: "red",
    fontStyle: "italic",
    fontSize: 45,
    fontWeight: "bold",
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 25,
  },
});
