import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header() {

  const openMenu = () => {
    //navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View>
        <Text style={globalStyles.titleText}>My Sleep.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 16
  }
})