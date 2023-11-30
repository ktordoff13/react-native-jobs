import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./screenheader.style";
import { icons } from "../../../constants";

const ScreenHeaderBtn = ({ iconName, color, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <AntDesign name={iconName} size={32} color={color} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
