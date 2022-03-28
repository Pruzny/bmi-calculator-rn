import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  title: {
    height: '20%',
    justifyContent: 'center',
  },
  normalText: {
    color: '#cc25dd',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
})  

export default function Title() {
  return (
      <View style={styles.title}>
          <Text style={styles.normalText}>
              BMI Calculator
          </Text>
      </View>
  )
}
