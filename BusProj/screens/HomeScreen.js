import React from "react";
import Inputs from "../components/Inputs";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
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
    <ScrollView>
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
            <View style={styles.searchBtn}>
              <TouchableOpacity>
                <Text style={styles.search}>Search for a bus</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 35,
    borderRadius: 20,
    overflow: "hidden",
  },
  heading: {
    fontFamily: "poppinBold",
    fontSize: 30,
    color: "#003049",
    width: 220,
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
  },
  searchBtn: {
    width: 325,
    height: 70,
    backgroundColor: "#003049",
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "poppinBold",
  },
  container: {
    padding: 10,
  },
  keyboard: {
    alignItems: "center",
  },
});
