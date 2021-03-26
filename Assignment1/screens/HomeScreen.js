import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";

function HomeScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="baguette"
          size={90}
          color={AppColors.maroon}
        />
      </View>
      <View style={styles.profileContainer}>
        <AppListItem
          image={require("../assets/The-20-Best-Royalty-Free-Music-Sites-in-2019.png")}
          title="Jonah skinner"
          subtitle="abc@gmail.com"
        />
      </View>

      {/* <AppIcon
        name="anvil"
        size={80}
        iconColor="black"
        backgroundColor="white"
      /> */}
      <View style={styles.iconLinks}>

      <AppListItem  title="My Bangers" IconComponent={<AppIcon name="gavel" size={65} iconColor={AppColors.background} backgroundColor={AppColors.maroon}/>}/>
      <AppListItem  title="My artists" IconComponent={<AppIcon name="anvil" size={65} iconColor={AppColors.background} backgroundColor={AppColors.maroon}/>} />
      </View>

    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
  },
  profileContainer: {
    marginTop: 10,
    height: 90, 
    backgroundColor: AppColors.inputTextBackground,
    justifyContent:"center",
  },
  iconLinks:{
      marginVertical:75,
      height: 150,
      justifyContent:"space-around",
      backgroundColor: AppColors.inputTextBackground,
      paddingLeft: 10,
  }
});
export default HomeScreen;
