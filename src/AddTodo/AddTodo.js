import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(input) => setText(input)}
        value={text}
        placeholder="Название задачи..."
        autoCorrect={false}
      />
      <Button
        title="Добавить"
        onPress={() => {
          addTask();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    fontSize: 15,
    padding: 5,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "#555",
  },
});

export default AddTodo;
