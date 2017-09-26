import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class NewCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const title = this.props.navigation.state.params.title
    const card = { question, answer }
    if (question !== '' && answer !== '') {
      this.props.addCardToDeck(title, card)
      this.props.navigation.goBack()
      this.setState({ question: '', answer: '' })
    }
  }

  render() {
    const title = this.props.navigation.state.params.title
    return (
      <KeyboardAvoidingView behavior='padding' >
        <Text>Add card to the {title} Deck</Text>
        <Text>Question</Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question} />
        <Text>Answer</Text>
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer} />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
  }
}

export default connect(null, mapDispatchToProps)(NewCard)
