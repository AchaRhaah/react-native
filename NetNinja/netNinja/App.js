import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [hairStyle, setAppointment] = useState({
    name: "Knotless",
    price: 6000,
  });
  const pressHandler = () => {
    setAppointment({ name: "twist", price: 6000 });
  };

  return (
    <View style={styles.container}>
      <Text>
        {hairStyle.name} cost {hairStyle.price}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={pressHandler} />
      </View>
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
});
