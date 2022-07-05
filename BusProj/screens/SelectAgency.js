import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStreetView,
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ticket from "../components/Ticket";

export default function SelectAgency() {
  return (
    <View style={styles.main1}>
      <Text style={styles.heading}>Bamenda - Buea</Text>
      <View style={styles.main2}>
        <Ticket />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main1: {
    backgroundColor: "#003049",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    top: 0,
  },
  main2: {
    // marginTop: 170,
    backgroundColor: "#fff",
    width: "100%",
    height: "90%",
    borderTopLeftRadius: 53,
    borderTopRightRadius: 53,
    justifyContent: "center",
    // alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 20,
  },
});
