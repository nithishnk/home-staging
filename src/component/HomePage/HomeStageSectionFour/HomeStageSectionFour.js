import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import './HomeStageSectionFour.css'
import Seemore from '../../../images/Home/Seemore.png'
export default class HomeStageSectionFour extends Component {
    render() {
        return (
            <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../../../images/Home/Seemore.png')}
      bgImageAlt="Men"
      strength={200}
    >
<div className="parallax_main">
      <h1 className="parallax_text txt-head2 link-style"><a href="/service">SEE OTHER SERVICES </a></h1>
      </div>
      <div style={{ height: '200px' }} />
    </Parallax>
    
            </div>
        )
    }
}
