import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppTitle from "../components/AppTitle";

function ProfileScreen({ navigation, route }) {
  console.log(route.params.paramEmail);
  return (
    <AppScreen style={styles.container}>
      <AppTitle>Profile</AppTitle>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="tower-beach"
          size={90}
          color={AppColors.maroon}
        />
      </View>
      <View style={styles.profileContainer}>
        <AppListItem
          image={route.params.paramImage}
          title={route.params.paramName}
          subtitle={route.params.paramEmail}
        />
      </View>
      <View style={styles.iconLinks}>
        <AppListItem
          title="My Saved Trips  "
          IconComponent={
            <AppIcon
              name="heart"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.maroon}
            />
          }
          onPress={() => navigation.navigate("Saved")}

        />
        <AppListItem
          title="Explore"
          IconComponent={
            <AppIcon
              name="map"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.maroon}
            />
          }
          onPress={() => navigation.navigate("Explore")}
        />
        <AppListItem
          title="Log Out"
          IconComponent={
            <AppIcon
              name="exit-run"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.maroon}
            />
          }
          onPress={() => navigation.navigate("Welcome")}
        />
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
    marginTop: 20,
  },
  profileContainer: {
    marginTop: 10,
    height: 90,
    backgroundColor: AppColors.inputTextBackground,
    justifyContent: "center",
  },
  iconLinks: {
    marginVertical: 75,
    height: 150,
    justifyContent: "space-around",
    backgroundColor: AppColors.inputTextBackground,
    paddingLeft: 10,
  },
});
export default ProfileScreen;
