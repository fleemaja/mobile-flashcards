import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function DeckListItem({ title, questions }) {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => alert("hey")} >
        <Text>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
})
