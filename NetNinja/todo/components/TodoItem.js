import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => pressHandler(item.key)}
    >
      <Text style={styles.content}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: "#15616d",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    borderRadius: 9,
  },
  content: {
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 17,
    color: "#15616d",
  },
});
