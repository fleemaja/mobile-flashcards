import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    const navigation = this.props.navigation
    const title = navigation.state.params.title
    const questions = this.props.decks[title]['questions']
    return (
      <View>
        <Text style={{fontSize: 64}}>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewCard', { title })} >
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps, null)(DeckDetail)
