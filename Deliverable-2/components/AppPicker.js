import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppPickerItem from "../components/AppPickerItem";
import AppScreen from "../components/AppScreen";
import AppText from "../components//AppText";

function AppPicker({
  data,
  icon,
  placeholder,
  numColumns,
  selectedItem,
  onSelectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={30} />}
          <AppText style={styles.text}>
            {" "}
            {selectedItem ? selectedItem.label : placeholder}{" "}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numColumns}
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.inputTextBackground,
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
