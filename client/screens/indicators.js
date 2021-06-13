import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'
import ClickService from '../services/ClickService'
import Card from '../shared/card'

export default function Indicators () {

  const [habitList, setHabitList] = useState([])

  const DATA = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },]

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
