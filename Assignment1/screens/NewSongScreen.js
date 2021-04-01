import React, {useState} from "react";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppPicker from "../components/AppPicker";

const categories = [
  {
    label: "Adventure",
    value: 1,
    icon: "airplane-takeoff",
    backgroundColor: "red",
  },
  { label: "Thriller", value: 2, icon: "ghost", backgroundColor: "blue" },
  { label: "Fantasy", value: 3, icon: "flash", backgroundColor: "green" },
];


function NewSongScreen(props) {
    const [category, setCategory] = useState();
  return (
    <AppScreen style={{ backgroundColor: AppColors.otherColor }}>
      <AppPicker
      selectedItem={category}
      onSelectedItem = {item => setCategory(item)}
        data={categories}
        icon="apps"
        placeholder="Categories"
        numColumns={3}
      />
    </AppScreen>
  );
}

export default NewSongScreen;
