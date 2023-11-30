import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Kuba</Text>
      <Text style={styles.userMessage}>Find your perfect job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are your looking for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
