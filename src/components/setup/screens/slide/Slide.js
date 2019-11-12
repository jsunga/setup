import React, { Component } from 'react'
import hideIcon from '../../assets/hide-icon.svg'
import './_slide.scss'

export default class Slide extends Component {

  state = {
    toggle: 'slide-on'
  }

  handleHideIcon = _ => {
    let { toggle } = this.state
    if(toggle === 'slide-on') {
      this.setState({
        toggle: 'slide-off'
      })
    } else {
      this.setState({
        toggle: 'slide-on'
      })
    }
  }

  render() {
    return (
      <div className={this.state.toggle}>
        <div className="overlay">
          <img 
            src={hideIcon} 
            alt="hide icon" 
            onClick={this.handleHideIcon}
          />
        </div>
      </div>
    )
  }
}
