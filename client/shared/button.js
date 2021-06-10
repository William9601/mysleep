import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableOpacityBase } from 'react-native';

export default function FlatButton( { text } ) {
  return (
    <TouchableOpacity>
      <View style={StyleSheet.button}>
        <Text></Text>
      </View>
    </TouchableOpacity>
  )
}