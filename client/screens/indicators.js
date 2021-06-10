import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Indicators() {
  return (
    <View style={styles.container}>
      <Text>Indicators screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})