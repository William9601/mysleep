import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Habits() {
  return (
    <View style={styles.container}>
      <Text>Habits screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})