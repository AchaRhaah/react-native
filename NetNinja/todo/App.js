import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'Attend google io meetup', time: '10:30pm', key: '1' },
    { text: 'Read for resit', time: '1:00pm', key: '2' },
    { text: 'ask Candy Labelle for that hair product', time: '2:15', key: '3' }
  ]);
  return (
    <View style={styles.container}>
      {/* {header} */}
      <View style={styles.content} >
        {/* To form */}
        <View style={styles.list}>
          <FlatList data={todo}
            renderItem={ }/>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
