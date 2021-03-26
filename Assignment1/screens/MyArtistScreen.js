import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";

const artists = [
  {
    id: 1,
    name: "Smash Mouth",
    image: require("../assets/smash.jpeg"),
  },
  {
    id: 2,
    name: "Kaleo",
    image: require("../assets/Kaleo.jpg"),
  },
];

function MyArtistScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(artist) => artist.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.name}
            image={item.image}
            onPress={() => console.log(item)}
            onSwipeLeft = {() => (
                <View style={styles.deleteView}>
                    <AppIcon
                        name="trash-can"
                        size={80}
                        iconColor={AppColors.white}
                    
                    />
                </View>)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    flex: 1,
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: AppColors.primaryColor,
  },
  deleteView:{
      backgroundColor: AppColors.red,
      width: 75, 
      justifyContent:"center",
      alignItems: "center",
  }
});

export default MyArtistScreen;
