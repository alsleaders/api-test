import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Destinations from './Destinations'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <Destinations />
      </>
    )
  }
}

export default App
