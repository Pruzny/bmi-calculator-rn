import React from 'react'
import {
  StyleSheet,
  Pressable,
  Keyboard,
} from 'react-native'
import Title from './src/components/Title'
import Main from './src/components/Main'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
})
const App = () => {
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Title/>
      <Main/>
    </Pressable>
  )
}
export default App
