import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, gray, black } from '../utils/colors'

class DeckDetail extends Component {
  render() {
    const navigation = this.props.navigation
    const title = navigation.state.params.title
    const deck = this.props.decks[title]
    const questions = deck['questions']
    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>{ title }</Text>
        <Text style={styles.numCards}>{ `${questions.length} cards` }</Text>
        <TouchableOpacity style={styles.addCardButton}
          onPress={() => navigation.navigate('NewCard', { title })} >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizButton}
          onPress={() => navigation.navigate('Quiz', { deck })} >
          <Text style={{color: white}}>Start Quiz</Text>
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
  deckTitle: {
    fontSize: 42,
    fontWeight: '500'
  },
  numCards: {
    fontSize: 18,
    fontWeight: '500',
    color: gray
  },
  addCardButton: {
    marginTop: 60,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  startQuizButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: black,
    borderRadius: 5
  }
})

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps, null)(DeckDetail)
