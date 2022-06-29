import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Homes",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee", height: 90 },
  },
});
export default createAppContainer(HomeStack);
