import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 38,
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#ff7d00",
  },
  title: {
    alignSelf: "center",
    fontSize: 40,
    color: "#fff",
  },
});
