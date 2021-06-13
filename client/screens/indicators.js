import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'
import ClickService from '../services/ClickService'
import Card from '../shared/card'

export default function Indicators () {

  const [habitList, setHabitList] = useState([])

  useEffect(() => {
    ClickService.getSortedData().then(habits => setHabitList(habits))
  }, [])

  // const listMap = habitList.map(el => el.habit)
  const pressHandlerShowIndicators = () => {
    console.log(habitList);
  }
  // console.log('hablist', habitList)

  const Item = ({ habit }) => (
    <View>
      <Card>
        <Text style={globalStyles.componentText}>{habit}</Text>
      </Card>
    </View>
  )
  
  const renderItem = ({ item }) => <Item habit={item.habit} />
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Sleep Quality Indicators</Text>
      <FlatButton text='Show indicators' onPress={pressHandlerShowIndicators}/>
        <View>
        <SafeAreaView>
          <FlatList 
            data={habitList} 
            keyExtractor={item => item._id} 
            renderItem={renderItem}
            />
        </SafeAreaView>
      </View>
    </View>
  )
}
