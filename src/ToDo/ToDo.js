import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ToDo = (props) => {
  return (
    <TouchableOpacity
      onPress={console.log("Pressed ", props.task.id)}
      onLongPress={() => {
        props.onRemove(props.task.id);
      }}
    >
      <View style={styles.task}>
        <Text>{props.task.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 10,
  },
});
