import React from "react";
import Inputs from "../components/Inputs";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStreetView,
  faLocationDot,
  faCalendarDays,
  faClockNine,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.heading}>Where do you want to go?</Text>
        <View style={styles.form}>
          <Inputs
            label={"Place of departure"}
            placeholder="Leaving from..."
            iconname={faStreetView}
          />
          <Inputs
            label={"Destination"}
            placeholder={"Going to..."}
            iconname={faLocationDot}
          />
          <Inputs
            label={"Date of journey"}
            placeholder={"1 October"}
            iconname={faCalendarDays}
          />
          <Inputs
            label={"Time of journey"}
            placeholder={"day or night"}
            iconname={faClock}
          />
        </View>
        <View style={styles.searchBtn}>
          <TouchableOpacity>
            <Text style={styles.search}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 35,
    borderRadius: 20,
  },
  heading: {
    fontFamily: "poppinBold",
    fontSize: 25,
    color: "#003049",
    width: 200,
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
  },
  searchBtn: {
    width: 150,
    height: 50,
    backgroundColor: "#003049",
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    fontSize: 20,
    color: "#fff",
  },
  container: {
    padding: 10,
  },
  keyboard: {
    alignItems: "center",
  },
});
