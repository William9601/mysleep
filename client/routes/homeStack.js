import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Habits from '../screens/habits';
import Indicators from '../screens/indicators';

const screens = {
  Home: {
    screen: Home
  },
  Habits: {
    screen: Habits
  },
  Indicators: {
    screen: Indicators
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);