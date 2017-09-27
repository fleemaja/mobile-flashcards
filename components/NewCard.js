import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { white, black } from '../utils/colors'

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
      <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <Text style={styles.instructions}>Add Card</Text>
        <Text style={styles.inputLabel}>Question</Text>
        <TextInput
          style={styles.input}
          placeholder='question'
          onChangeText={(question) => this.setState({question})}
          value={this.state.question} />
        <Text style={styles.inputLabel}>Answer</Text>
        <TextInput
          style={styles.input}
          placeholder='answer'
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer} />
        <TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit}>
          <Text style={{color: white}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  instructions: {
    fontSize: 42,
    fontWeight: '500',
    marginBottom: 40
  },
  inputLabel: {
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 20,
    padding: 10,
    width: 300,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  submitButton: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: black,
    borderRadius: 5
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
  }
}

export default connect(null, mapDispatchToProps)(NewCard)
