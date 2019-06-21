import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'
import banner from '../../../../images/banner.jpg'

export default class Sectionfirst extends Component {
  render() {
    return (

      <div className="bg-clr">
      <div className="container ">
      <div className="row ">
      <div className="col-md-6">
        <h2 className="mt-5 txt-head">STATELY RESIDENCE</h2>
        <span className="txt-property">Adding small things make the place more vivacious.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5">At Stately Residence, we mainly concentrated on accessories, lamps, and fixtures as it had a beautiful living room and needed some de-cluttering. We enhanced the place with beautiful and spacious wooden cabinets. Our staged home was sold in less than 24 hours!</p>
        <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter-square p-1"></i>
        <i class="fab fa-google-plus p-1"></i>
        <i class="fab fa-linkedin p-1"></i>
        <i class="fab fa-pinterest-square p-1"></i>
        </div>
        </div> 
      </div>
      </div> 
        
      </div>
    )
  }
}
