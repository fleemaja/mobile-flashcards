import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import QuizResults from './QuizResults'

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
      const percentCorrect = Math.round((numberCorrect/questions.length) * 100)
      return (
        <QuizResults percentCorrect={percentCorrect}
                     restartQuiz={() => this.restartQuiz()}
                     navigation={this.props.navigation} />
      )
    } else {
      return (
        <View>
          <Text>Deck: { title }</Text>
          <Text>{currentQuestion} / {questions.length}</Text>
          {
            showQuestion ?
            <Text>{ questions[currentQuestion - 1].question }</Text> :
            <Text>{ questions[currentQuestion - 1].answer }</Text>
          }
          <TouchableOpacity onPress={this.flipCard}>
            <Text>{ showQuestion ? 'answer' : 'question' }</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getNextQuestion.bind(null, true)}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getNextQuestion.bind(null, false)}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
