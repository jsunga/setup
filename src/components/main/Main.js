import React, { Component } from 'react'
import { Resizable } from 're-resizable'
import H from './assets/handleIconV.svg'
import './_main.scss'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left-container">
          <Resizable
            enable={{
              top: false,
              right: true,
              bottom: true,
              left: false,
            }}
            defaultSize={{
              width: '1537px',
              height: '864.5px'
            }}
            maxWidth={1537}
            minWidth={960}
            maxHeight={864.5}
            minHeight={540}
            lockAspectRatio={true}
            className="top"
            handleClasses={{right: 'right-handle', bottom: 'bottom-handle'}}
          >
            <img src={H} />
          </Resizable>
          <div className="bottom">
            
          </div>
        </div>
        <div className="right-container">
            
        </div>
      </div>
    )
  }
}
