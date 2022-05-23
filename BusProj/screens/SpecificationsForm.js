import react from "react"
import { TextInput, View, Text, StyleSheet } from "react-native";
// import { Formik } from 'formik'

const SpecificationsForm = () => {
    return <View>

        <Text>Book A Trip</Text>
        <TextInput type="text" style={styles.input} placeholder="Place of departure" />
        <TextInput type="text" style={styles.input} placeholder="Destination" />
        <TextInput type="text" style={styles.input} placeholder="Date of journey" />
        <TextInput type="text" style={styles.input} placeholder="Date of journey" />
        <TextInput type="text" style={styles.input} placeholder="Time of journey" />
    </View>
}
const styles = StyleSheet.create({
    input: {
        // borderColor: 'red'
    }
});
export default SpecificationsForm