import React, { Component } from 'react'
import Img from '../../../../images/vacant.jpg'
import '../SectionTwo/SectionTwo.css'


export default class SectionTwo extends Component {
  render() {
    return (
      <div className="container">
      <div className="row mt-5">
      <div className="col-md-6">
      <img className="i" src={Img}></img>
      </div>
      <div className="col-md-6">
      <div>
      <h1 className="txt-head mt-0">INTERIOR DESIGNING (REDESIGN)</h1>
      {/*<h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">We are happy to help you to give a new look for brand-new home reflecting your lifestyle. Also, we can create a new view for your home which can help you to buy furniture and other accessories for your home. <br></br>We have a highly talented team that use their diverse skill sets to deliver beautiful interiors that are useful and amazing.
      </p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
