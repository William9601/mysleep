import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Habits from '../screens/habits'
import Indicators from '../screens/indicators'
import Login from '../screens/login'
import Header from '../shared/header'
import React from 'react'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  },
  Habits: {
    screen: Habits,
    navigationOptions: {
      title: 'My Sleep.'
    }
  },
  Indicators: {
    screen: Indicators,
    navigationOptions: {
      title: 'My Sleep.'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'My Sleep.'
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#A0DDFF', height: 70 },
    headerTitleStyle: {
      fontFamily: 'alegreya-bold',
      fontSize: 26,
      color: '#56564D',
      marginTop: 12,
      marginBottom: 10
    }
  }
})

export default createAppContainer(HomeStack)
