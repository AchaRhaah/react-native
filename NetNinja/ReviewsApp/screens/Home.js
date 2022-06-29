import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of freash air",
      rating: "5",
      body: "loren ipsum",
      key: "1",
    },
    {
      title: "Gotta catch them all again",
      rating: "3",
      body: "loren ipsum",
      key: "2",
    },
    {
      title: 'Not so "Final" Fantasy',
      rating: "4",
      body: "loren ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <Text>C'mon</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
