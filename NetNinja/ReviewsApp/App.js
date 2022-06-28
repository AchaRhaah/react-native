import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
