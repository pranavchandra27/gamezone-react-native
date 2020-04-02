import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row"
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  },
  headerTitle: {
    flexDirection: "row",
    marginStart: 30
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  }
});
