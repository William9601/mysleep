import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'

export default function Home ({ navigation }) {
  const pressHandlerHabits = () => {
    navigation.navigate('Habits')
  }

  const pressHandlerIndicators = () => {
    navigation.navigate('Indicators')
  }
  
  const pressHandlerLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <FlatButton text='Add Habits' onPress={pressHandlerHabits} />
      <FlatButton text='Check indicators' onPress={pressHandlerIndicators} />
      <FlatButton text='Login' onPress={pressHandlerLogin} />
    </View>
  )
}
