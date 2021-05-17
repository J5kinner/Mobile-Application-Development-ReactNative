import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppColors from "../config/AppColors.js";
import AppText from "../components/AppText.js";

function AppListItem({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  onSwipeLeft,
}) {
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight onPress={onPress} underlayColor={AppColors.lightGrey}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textcontainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 37,
    marginLeft: 5,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    marginVertical: 5,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
});
export default AppListItem;
