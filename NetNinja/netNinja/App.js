import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [hairstyles, setAppointment] = useState([
    { name: "Knotless", price: 6000, key: 1 },
    { name: "twists", price: 6500, key: 2 },
    { name: "Ghana Braids", price: 3500, key: 3 },
    { name: "Jungle Braids", price: 7000, key: 4 },
    { name: "butterfly Locs", price: 10000, key: 5 },
  ]);
  return (
    <View style={styles.container}>
      {hairstyles.map((item) => {
        return (
          <View key={item.key}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
