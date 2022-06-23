import react from "react";
import { styles } from "./styles/formStyles";
import { TextInput, View, Text, StyleSheet } from "react-native";
// import { Formik } from 'formik'

const SpecificationsForm = () => {
  return (
    <View style={styles.container}>
      <Text>Book A Trip</Text>
      <TextInput
        type="text"
        style={styles.input}
        placeholder="Leaving from..."
      />
      <TextInput type="text" style={styles.input} placeholder="Going to..." />
      <TextInput
        type="text"
        style={styles.input}
        placeholder="Date of journey"
      />
      <TextInput
        type="text"
        style={styles.input}
        placeholder="Date of journey"
      />
      <TextInput
        type="text"
        style={styles.input}
        placeholder="Time of journey"
      />
    </View>
  );
};
export default SpecificationsForm;
