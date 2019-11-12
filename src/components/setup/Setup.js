import React from 'react'
import Slide from './screens/slide/Slide'
import './_setup.scss'

const sliders = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]

const Setup = _ => {
    return (
      <div className="setup-window">
        <div className="header">
          <h4>Setup</h4>
        </div>
        <div className="content">
          <div className="slider-container">
            {sliders.map(_ => (
              <Slide />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Setup