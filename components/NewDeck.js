import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions'

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

function mapDispatchToProps(dispatch) {
  return {
    saveDeckTitle: (title) => dispatch(saveDeckTitle(title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
