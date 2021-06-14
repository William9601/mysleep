import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'
import ClickService from '../services/ClickService'
import Card from '../shared/card'

export default function Indicators () {
  const [habitList, setHabitList] = useState([])

  useEffect(() => {
    ClickService.getData().then(habits => setHabitList(habits))
  }, [])

  const list = habitList.map(el => {
    el.deepSleepAverage = (el.deepSleepTotal / el.count)
    return el
  })
  
  const sortedList = list.sort(function (a, b) {
    const sorted = a.deepSleepAverage - b.deepSleepAverage
    return sorted
  })
  
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
      <View>
        <SafeAreaView>
          <FlatList
            data={sortedList}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}
