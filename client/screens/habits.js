import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import Card from '../shared/card'


export default function Habits({ navigation }) {
  const [habits, setHabits] = useState([])

  const pressHandler = () => {
    navigation.goBack()
  }

  const addHabbit = (habit) => {
    habit.date = Date.now(); // returns 1623333945959
    setHabits((currentHabits) => {
      return [habit, ...currentHabits]
    });
    console.log(habits)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Today's habits</Text>
      <Formik
        initialValues={{habit: ''}}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addHabbit(values)
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
      <Button title='Home' onPress={pressHandler}/>
    </View>
    </TouchableWithoutFeedback>
  )
}