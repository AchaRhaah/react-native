import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStreetView,
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { View, Text, StyleSheet } from "react-native";
export default function Ticket() {
  return (
    <View style={styles.ticket}>
      <View style={styles.right}>
        <Text style={styles.agency}>Mogamo</Text>
        <View style={styles.content}>
          {/* <FontAwesomeIcon style={styles.icon} icon="faStreetView" /> */}
          <Text style={styles.departure}>Bamenda</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.destination}>Buea</Text>
        </View>
        <Text style={styles.date}>01-Oct-2022</Text>
      </View>
      <View style={styles.ticketDecor}>
        <View style={styles.circle1}></View>
        <View style={styles.line}></View>
        <View style={styles.circle2}></View>
      </View>
      <View style={styles.left}>
        <Text style={styles.timeOfDay}>Night</Text>
        <Text style={styles.price}>6000 XFA</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ticket: {
    width: 320,
    height: 200,
    backgroundColor: "#E9ECEF",
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    width: "42.5%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    // alignItems: "center",
  },
  left: {
    width: "42.5%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    // marginLeft: 20,
  },
  icon: {
    fontSize: 10,
  },
  agency: {
    fontSize: 25,
    fontFamily: "poppinBold",
    color: "#003049",
  },
  departure: {
    fontSize: 20,
    fontFamily: "poppin",
    color: "#003049",
  },
  destination: {
    color: "#003049",
    fontSize: 20,
    marginTop: 20,
  },
  date: {
    fontFamily: "lora",
    fontSize: 15,
    color: "#003049",
  },
  circle1: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  circle2: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  line: {
    width: 0.5,
    borderLeftWidth: 1,
    borderStyle: "",

    height: "50%",
    borderLeftColor: "#c4c4c4",
  },
  timeOfDay: {
    fontFamily: "poppin",
    color: "#003049",
    fontSize: 20,
    marginTop: 25,
  },
  price: {
    fontFamily: "lora",
    fontSize: 20,
    color: "#D62828",
    marginBottom: 40,
  },
  ticketDecor: {
    width: "18%",
    height: "170%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
