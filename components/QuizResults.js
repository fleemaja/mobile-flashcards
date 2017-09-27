import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'

export default class QuizResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quizResults}>{ this.props.percentCorrect }% Correct</Text>
        <TouchableOpacity style={styles.restartButton} onPress={() => this.props.restartQuiz()} >
          <Text>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToDeckButton} onPress={() => this.props.navigation.goBack()} >
          <Text style={{color: white}}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
  },
  quizResults: {
    fontSize: 42,
    fontWeight: '500'
  },
  restartButton: {
    marginTop: 60,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  backToDeckButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: black,
    borderRadius: 5
  }
})
