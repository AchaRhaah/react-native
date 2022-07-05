import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Try() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please work!!!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "lora",
  },
  content: {
    borderColor: "#c4c4c4",
    borderWidth: 2,
    height: 45,
    borderRadius: 25,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 6,
    width: 300,
    height: 45,
  },
  icon: {
    color: "red",
    fontSize: 25,
    marginLeft: 15,
  },
});
