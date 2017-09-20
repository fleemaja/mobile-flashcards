import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecks } from '../utils/helpers'

export default class DeckList extends Component {
  renderItem = ({ item }) => {
    return <DeckListItem {...item} />
  }
  render() {
    const dummyData = getDecks()
    return (
      <View>
        <FlatList
          data={dummyData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}
