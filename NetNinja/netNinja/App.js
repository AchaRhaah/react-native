import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setAppointment] = useState("Knotless");
  const [age, setAge] = useState(30);
  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="eg John Doe"
        onChangeText={(val) => setAppointment(val)}
      ></TextInput>
      <Text>{name}</Text>
      <Text>Enter your age: </Text>
      <TextInput
        keyboardType="numeric"
        placeholder="eg 95"
        style={styles.input}
        onChangeText={(val) => setAge(val)}
      ></TextInput>
      <Text>Your age is {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
