import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import AddTodo from "./src/AddTodo/AddTodo";
import Navbar from "./src/Navbar";
import { ToDo } from "./src/ToDo";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now().toString(), title: title }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <View>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTask} />
        {/* <ScrollView>
          {tasks.map((task) => (
            <ToDo key={task.id} task={task} />
          ))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={tasks}
          renderItem={({ item }) => <ToDo task={item} onRemove={removeTask} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#ccc",
  },
});
