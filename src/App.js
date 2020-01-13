import React, { Component } from 'react'
import Setup from './components/setup/Setup'
import Test from './components/test/Test'
import Main from './components/main/Main'
import './App.scss'
import SplitPaneComponent from './components/split-pane/SplitPane'

export default class App extends Component {

  render() {
    return (
      <>
        <Main />
      </>
    )
  }
  
}
