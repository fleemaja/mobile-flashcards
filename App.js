import React from 'react'
import { View } from 'react-native'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import { StackNavigator } from 'react-navigation'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckDetail: {
    screen: DeckDetail
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}
