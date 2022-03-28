import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Vibration,
  Keyboard,
} from 'react-native'
import BmiCalculate from './BmiCalculate'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  form: {
    alignItems: 'center'
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
    paddingTop: 20,
    padding: 30,
    borderRadius: 30,
  },
  boxForm: {
    width: '100%',
  },
  normalText: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 0,
    padding: 10,
  },
  input: {
    height: deviceWidth * 0.1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#252525',
    color: 'white',
  },
  button: {
    width: deviceWidth * 0.7,
    height: 40,
    backgroundColor: '#cc25dd',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textButton: {
    color: 'white',
    fontSize: 24,
  },
  error: {
    color: 'red',
    paddingLeft: 10,
  },
})

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [text, setText] = useState('Write your height and weight')
  const [hasText, setHasText] = useState(false)
  const [result, setResult] = useState(null)
  const [heightError, setHeightError] = useState(null)
  const [weightError, setWeightError] = useState(null)

  function bmiCalculator() {
    return setResult((weight/height**2).toFixed(2))
  }

  function checkError() {
    if (height === null) {
      setHeightError('Required field*')
    } else {
      setHeightError(null)
    }
    if (weight === null) {
      setWeightError('Required field*')
    } else {
      setWeightError(null)
    }
  }

  function validateImc() {
    Keyboard.dismiss()
    checkError()
    if (weight != null && height != null) {
      bmiCalculator()
      setHeight(null)
      setWeight(null)
      setHasText(true)
      setText('Your BMI is')
    } else {
      setResult(null)
      setHasText(false)
      setText('Write your height and weight')
      Vibration.vibrate(500)
    }
  }

  return (
    <View style={styles.form}>
      <View style={styles.box}>
        <View style={styles.boxForm}>
          <Text style={styles.normalText}>Height</Text>
          <Text style={styles.error}>{heightError}</Text>
          <TextInput
            onChangeText={setHeight}
            value={height}
            style={styles.input}
            placeholder='Example: 1.75'
            placeholderTextColor={'gray'}
            keyboardType='numeric'
          />
          <Text style={styles.normalText}>Weight</Text>
          <Text style={styles.error}>{weightError}</Text>
          <TextInput
            onChangeText={setWeight}
            value={weight}
            style={styles.input}
            placeholder='Example: 59.9'
            placeholderTextColor={'gray'}
            keyboardType='numeric'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => validateImc()}
          >
            <Text style={styles.textButton}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BmiCalculate
        message={text}
        hasText={hasText}
        bmi={result}
      />
    </View>
  )
}
