import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";
const screens = {
  About: {
    screen: Home,
    navigationOptions: {
      title: "About",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee", height: 90 },
  },
});
export default AboutStack;
