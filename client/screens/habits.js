import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Habits({ navigation }) {

  const pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Today's habits</Text>
      <Button title='Home' onPress={pressHandler}/>
    </View>
  )
}