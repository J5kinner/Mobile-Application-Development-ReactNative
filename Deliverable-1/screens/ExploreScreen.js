import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppIcon from "../components/AppIcon";
import AppTitle from "../components/AppTitle";
import DataManager from "../config/DataManager";
import * as ImagePicker from "expo-image-picker";


const categories = [
  {
    label: "Place to Stay",
    value: 1,
    icon: "home",
    backgroundColor: AppColors.blue,
  },
  {
    label: "Experience",
    value: 4,
    icon: "compass",
    backgroundColor: AppColors.welcomeBackground,
  },

  {
    label: "Activity",
    value: 3,
    icon: "run-fast",
    backgroundColor: AppColors.orange,
  },
];

const getAdventures = () => {
  let commonData = DataManager.getInstance();
  return commonData.adventures;
};

function ExploreScreen({ navigation }) {
  const saveList = getAdventures();
  getAdventures();

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
  };

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Title");
    setSubTitleError(
      subtitle.length > 0 ? "" : "Please set a valid Description"
    );
    setCategoryError(subtitle.length > 0 ? "" : "Please choose a Category");
    setImageError(image ? "" : "Please choose a photo");
    return title.length > 0 && subtitle.length > 0 && category && image
      ? true
      : false;
  };

  const addListing = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const adventures = commonData.getAdventures(user);
    const adventID = adventures.length + 2;
    const newAdvent = {
      title: title,
      subtitle: subtitle,
      category: category.label,
      advid: adventID,
      userid: user,
      image: image.path,
    };
    console.log(newAdvent);
    commonData.addListing(newAdvent);
  };

  return (
    <ScrollView>

    <AppScreen style={{ backgroundColor: AppColors.otherColor, padding: 5 }}>
        <AppTitle>Explore</AppTitle>
       
        <AppText>Create your own listing</AppText>
        <AppTextInput
          icon="home"
          placeholder="Location"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />
        {titleError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {titleError}
          </AppText>
        ) : (
          <></>
        )}
        <AppTextInput
          icon="compass"
          placeholder="Short Description"
          value={subtitle}
          onChangeText={(inputText) => setSubTitle(inputText)}
        />
        {subTitleError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {subTitleError}
          </AppText>
        ) : (
          <></>
        )}

        <AppPicker
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item)}
          data={categories}
          icon="apps"
          placeholder="Categories"
          numColumns={3}
        />
        {categoryError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {categoryError}
          </AppText>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={openImagePickerAsync}
        >
          <AppIcon
            name="camera"
            size={80}
            iconColor={AppColors.grey}
            backgrounColor={AppColors.fadedGrey}
          />
          {image && <Image source={{ uri: image.path }} style={styles.image} />}
        </TouchableOpacity>

        {imageError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {imageError}
          </AppText>
        ) : (
          <></>
        )}
        <AppButton
          title="Add Listing"
          onPress={() => {
            if (doErrorCheck()) {
              addListing();
              navigation.navigate("Saved");
            }
          }}
        />
    </AppScreen>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    flex: 1,
  },
  iconButton: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
});

export default ExploreScreen;
