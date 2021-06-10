import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';


export default function Habits({ navigation }) {
  const [habits, setHabits] = useState([])

  const pressHandler = () => {
    navigation.goBack()
  }

  // Adds habit
  const addHabit = (habit) => {
    habit.key = Date.now().toString(); // returns 1623333945959
    setHabits((currentHabits) => {
      return [habit, ...currentHabits]
    });
    console.log(habits)
  }

  // Remove habit
  const removeHabit = (habit) => {
    setHabits(habits.filter((el) => {
      return el.habit !== habit
    }))

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Today's habits</Text>

      <Formik
        initialValues={{habit: ''}}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addHabit(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput 
              style={globalStyles.input}
              placeholder='Add habit'
              onChangeText={props.handleChange('habit')}
              value={props.values.habit}
            />
            <Button title='submit' color='#E6AACE' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={globalStyles.container}>
        <FlatList
          data={habits}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => removeHabit(item.habit) }>
                <Card>
                  <Text style={globalStyles.componentText}>{ item.habit }</Text>
                </Card>
              </TouchableOpacity>
            </View>
          )}
            
        />
      </View>
          <Button title='Home' onPress={pressHandler}/>
    </View>
    </TouchableWithoutFeedback>
  )
}