import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => pressHandler(item.key)}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.content}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: "#15616d",
    borderWidth: 1,
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    margin: 6,
    borderRadius: 9,
    paddingLeft: 12,
  },
  content: {
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 17,
    color: "#15616d",
  },
  item: {
    flexDirection: "row",
    //     padding: 16,
    //     marginTop: 16,
    //     borderColor: "#bbb",
    //     borderWidth: 1,
    //     borderStyle: "dashed",
    //     borderRadius: 10,
  },
});
