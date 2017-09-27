import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions'
import { white, black } from '../utils/colors'

class NewDeck extends Component {

  state = {
    title: ''
  }

  handleSubmit = () => {
    const title = this.state.title
    if (title !== '') {
      this.props.saveDeckTitle(title)
      this.props.navigation.navigate('Decks')
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.formPrompt}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
          placeholder='deck title'
          value={this.state.title} />
        <TouchableOpacity style={styles.submitButton}
          onPress={this.handleSubmit}>
          <Text style={{color: white, fontWeight: 'bold'}}>Submit</Text>
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
  formPrompt: {
    fontSize: 42,
    fontWeight: '500'
  },
  input: {
    marginTop: 60,
    marginBottom: 20,
    padding: 10,
    width: 300,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  submitButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: black,
    borderRadius: 5
  }
})

function mapDispatchToProps(dispatch) {
  return {
    saveDeckTitle: (title) => dispatch(saveDeckTitle(title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
