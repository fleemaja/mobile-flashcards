import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

export default class QuizResults extends Component {
  render() {
    return (
      <View>
        <Text>{ this.props.percentCorrect }% Correct</Text>
        <TouchableOpacity onPress={() => this.props.restartQuiz()} >
          <Text>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
