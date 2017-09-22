import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/_decks'

export default class NewDeck extends Component {

  state = {
    title: ''
  }

  handleSubmit = () => {
    saveDeckTitle(this.state.title)
    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' >
        <Text>Create a new Deck</Text>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          value={this.state.title} />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
