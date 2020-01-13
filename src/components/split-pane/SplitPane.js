import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import './_splitPane.scss'

export default class SplitPaneComponent extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={100}>
        <div className="pane" />
        <div className="pane" />
      </SplitPane>
    )
  }
}
