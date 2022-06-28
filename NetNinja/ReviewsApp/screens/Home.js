import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.conntainer}>
      <Text style={styles.titleText}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
});
