import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class DeckDetail extends Component {
  render() {
    const title = this.props.navigation.state.params.title
    const questions = this.props.navigation.state.params.questions
    return (
      <View>
        <Text style={{fontSize: 64}}>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
      </View>
    )
  }
}
