import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import QuizResults from './QuizResults'
import { setLocalNotification, clearLocalNotification } from '../utils/_notifications'
import { white, black, gray, green, red } from '../utils/colors'

export default class Quiz extends Component {

  state = {
    currentQuestion: 1,
    showQuestion: true,
    numberCorrect: 0,
    quizOver: false
  }

  flipCard = () => {
    const showQuestion = !this.state.showQuestion
    this.setState({ showQuestion })
  }

  getNextQuestion = (lastCardCorrect) => {
    const deck = this.props.navigation.state.params.deck
    const questions = deck.questions
    const numberCorrect = (lastCardCorrect ?
                          this.state.numberCorrect + 1 :
                          this.state.numberCorrect)
    const currentQuestion = this.state.currentQuestion + 1
    const showQuestion = true
    this.setState({ currentQuestion, showQuestion, numberCorrect })
    if (currentQuestion > questions.length) {
      this.setState({ quizOver: true })
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 1,
      showQuestion: true,
      numberCorrect: 0,
      quizOver: false
    })
  }

  render() {
    const deck = this.props.navigation.state.params.deck
    const title = deck.title
    const questions = deck.questions
    const { currentQuestion, showQuestion, numberCorrect, quizOver } = this.state
    if (quizOver) {
      clearLocalNotification()
        .then(setLocalNotification)
      const percentCorrect = Math.round((numberCorrect/questions.length) * 100)
      return (
        <QuizResults percentCorrect={percentCorrect}
                     restartQuiz={() => this.restartQuiz()}
                     navigation={this.props.navigation} />
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.numCards}>{currentQuestion} / {questions.length}</Text>
          {
            <Text style={styles.cardText}>
              {
                showQuestion ?
                questions[currentQuestion - 1].question :
                questions[currentQuestion - 1].answer
              }
            </Text>
          }
          <TouchableOpacity style={styles.flipCardButton}
                            onPress={this.flipCard}>
            <Text>{ showQuestion ? 'answer' : 'question' }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.correctButton}
                            onPress={this.getNextQuestion.bind(null, true)}>
            <Text style={{color: black, fontWeight: 'bold'}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.incorrectButton}
            onPress={this.getNextQuestion.bind(null, false)}>
            <Text style={{color: black, fontWeight: 'bold'}}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }
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
  cardText: {
    fontSize: 42,
    fontWeight: '500'
  },
  numCards: {
    fontSize: 18,
    fontWeight: '500',
    color: gray
  },
  flipCardButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  correctButton: {
    marginTop: 60,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: green,
    borderRadius: 5
  },
  incorrectButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: red,
    borderRadius: 5
  }
})
