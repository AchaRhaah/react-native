import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import drawer from "./routes/drawer";
import { globalStyles } from "./styles/global";

export default function App() {
  return <drawer />;
}
