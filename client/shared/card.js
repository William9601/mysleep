import React from 'react';
import { StyleSheet, view } from 'react-native';

export default function Card(props) {
  return (
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>
        { PopStateEvent.children}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {

  }, 
  cardContent: {
    
  }
})