import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecksArray, clearAll } from '../utils/_decks'

export default class DeckList extends Component {

  state = {
    decks: []
  }

  componentDidMount = () => {
    this.loadDecks();
  }

  loadDecks = async () => {
    const decks = await getDecksArray()
    this.setState({ decks })
  }

  renderItem = ({ item }) => {
    return <DeckListItem {...item} navigation={this.props.navigation} />
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}
