import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, gray } from '../utils/colors'

export default class DeckListItem extends Component {
  render() {
    const { title, questions, navigation } = this.props
    return (
      <View style={styles.listItem}>
        <TouchableOpacity style={styles.textContainer}
                          onPress={() => navigation.navigate('DeckDetail', { title })} >
          <Text style={styles.deckTitle}>{ title }</Text>
          <Text>{ `${questions.length} cards` }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: gray
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckTitle: {
    fontWeight: 'bold',
    fontSize: 24
  }
})
