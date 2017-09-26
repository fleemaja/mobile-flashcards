import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    const navigation = this.props.navigation
    const title = navigation.state.params.title
    const deck = this.props.decks[title]
    const questions = deck['questions']
    return (
      <View>
        <Text style={{fontSize: 64}}>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewCard', { title })} >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz', { deck })} >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps, null)(DeckDetail)
