import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Share,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  placeholderText: {
    color: 'white',
    marginTop: 30,
    padding: 20,
  },
  results: {
    width: '50%',
    color: 'white',
    marginTop: 30,
    backgroundColor: '#151515',
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 5,
    alignSelf: 'center',
  },
  number: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
  },
  shareButton: {
    backgroundColor: '#a42ab0',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    borderRadius: 20,
    padding: 3,
    marginTop: 10,
  },
  shareText: {
    color: 'white',
  },
})

export default function BmiCalculate(props) {

  const resultShare = async () => {
    const result = await Share.share({
      message: `My BMI is: ${props.bmi} .`
    })
  }

  if (props.hasText) {
    return (
      <View style={styles.results}>
        <Text style={styles.text}>{props.message}</Text>
        <Text style={styles.number}>{props.bmi}</Text>
        <TouchableOpacity
          onPress={resultShare}
          style={styles.shareButton}
        >
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View style={styles.placeholderText}>
        <Text style={styles.text}>{props.message}</Text>
      </View>
    )
  }

}
