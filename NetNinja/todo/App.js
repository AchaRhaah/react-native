import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
export default function App() {
  const [tasks, setTask] = useState([
    { text: "attend google io", time: "10:30am", key: "1" },
    { text: "read for resit", time: "1:30pm", key: "2" },
    { text: "eat", time: "6:30pm", key: "4" },
    { text: "call my family", time: "10:30pm", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
