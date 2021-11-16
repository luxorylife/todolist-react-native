import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: "#228",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Navbar;
