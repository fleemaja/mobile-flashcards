import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text>Create a new Deck</Text>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
