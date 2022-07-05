import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStreetView,
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { DatePicker } from "react-native-datepicker";

export default function Inputs({ label, placeholder, iconname }) {
  return (
    <View style={styles.container} editable={false}>
      <View></View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <FontAwesomeIcon style={styles.icon} icon={iconname} />
        <TextInput
          placeholderTextColor={"#A3A3A3"}
          placeholderStyle={{ fontFamily: "poppin" }}
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderBottomWidth: 4,
    borderBottomColor: "red",
    borderStyle: "dashed",
  },
  label: {
    fontSize: 17,
    marginBottom: 0,
    marginLeft: 38.5,
    color: "#3D3D3D",
    fontFamily: "poppin",
  },
  content: {
    height: 45,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  input: {
    marginLeft: 8,
    width: 300,
    height: 45,
    fontSize: 15.5,
  },
  icon: {
    color: "#999999",
    fontSize: 25,
    marginLeft: 15,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
