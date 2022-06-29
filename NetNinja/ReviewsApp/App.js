import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/homeStack";
import { globalStyles } from "./styles/global";

export default function App() {
  return <Navigator />;
}
