import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Entypo } from '@expo/vector-icons'
import { black, white } from './utils/colors'
import { Constants } from 'expo'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckDetail: {
    screen: DeckDetail
  }
})

const Tabs = TabNavigator({
  Decks: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30} color={tintColor} />,
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: black
  }
})

function FlashcardsStatusBar({...props}) {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlashcardsStatusBar />
        <Tabs/>
      </View>
    );
  }
}
