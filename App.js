import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Entypo } from '@expo/vector-icons'
import { black, white } from './utils/colors'
import { Constants } from 'expo'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { setLocalNotification } from './utils/_notifications'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(thunk)
  )
)

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckDetail: {
    screen: DeckDetail
  },
  NewCard: {
    screen: NewCard
  },
  Quiz: {
    screen: Quiz
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
    activeTintColor: black,
    labelStyle: {
      color: black
    },
    style: {
      backgroundColor: white
    }
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
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar />
          <Tabs/>
        </View>
      </Provider>
    );
  }
}
