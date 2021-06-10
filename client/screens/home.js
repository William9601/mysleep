import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Habits');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title='Add Habits' onPress={pressHandler}/>
    </View>
  )
}

//#E5E5E5