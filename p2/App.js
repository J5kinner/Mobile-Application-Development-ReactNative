import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Pressable,
  Platform, 
  StatusBar
} from "react-native";

export default function App() {
  const handleImageClick = () => console.log("Doge Booped");
  const [count, setCount] = useState(0);
  const secretButton = () => setCount((prevCount) => prevCount + 1);
  const trickButton = () => setCount((prevCount) => prevCount - 1);
  const handleAlert = () => alert("Doge Coins Dangerously Low!");
  const alertAlertHandler = () => Alert.alert("You Booped Doge, ",  "Doge?", 
  [
    {text:"Yes",  onPress: () => alert('Wow much thank')},
    {text:"No", onPress: () => alert('sad face.')}
  ]);

  displayAlert = () => {
    if (count < 0) {
      Alert.handleAlert;
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.view1} />
      <TouchableWithoutFeedback onPress={alertAlertHandler}>
        <Image
          blurRadius={0}
          source={{ uri: "https://i.redd.it/pbznfp8l24f61.jpg" }}
          style={styles.banner}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>Welcome Fellow Doge</Text>
      <TouchableOpacity onPress={secretButton}>
        <Image source={require("./assets/image.jpeg")} style={styles.image} />
      </TouchableOpacity>
      <Button onPress={trickButton} title="Claim Some Doge?" />
      {/* <View style={styles.view2} />
      <View style={styles.view3} /> */}
      <Pressable onPress={displayAlert}>
        <Text style={styles.text2}>Doge Coins Acquired: {count}</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0, 
    backgroundColor: "#3b5998",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  text2: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 20,
  },
  banner: {
    width: 300,
    height: 300,
  },
  // view1:{
  //   backgroundColor:'#ADB9D3',
  //   flex:1,
  // },
  // view2:{
  //   backgroundColor:'#fff2eb',
  //   flex:1,
  // },
  // view3:{
  //   backgroundColor:'#edf5ff',
  //   flex:1,
  // }
});
