import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Counter from './src/components/Counter'
import { Provider } from 'react-redux'
import store from './src/redux/Store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    )
  }
}

export default App