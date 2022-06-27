import { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "code", key: "1" },
    { text: "sleep", key: "2" },
    { text: "eat", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((ha) => {
      return ha.filter((todo) => key != todo.key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 4) {
      setTodo((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oopps", "Todo must be over 4 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    // padding: 10,
  },
  list: {
    marginTop: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todo: {
    backgroundColor: "#15616d",
    height: 40,
    marginBottom: 2,
    padding: 10,
    borderRadius: 10,
    width: "98%",
  },
});
