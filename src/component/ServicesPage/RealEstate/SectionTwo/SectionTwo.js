import React, { Component } from 'react'
import Img from '../../../../images/Service/RealEstate/portrait_image.jpg'
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
      <h1 className="txt-head mt-0">HOMESTAGINGS FOR REAL ESTATE</h1>
      {/*<h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">Marketing a property is a must in real estate if they want to fetch the right amount on the investment.<br></br>
      Staging is a must for Real Estate agents if they want to sell properties fast, especially in slow-paced markets. Home staging will make your home to stand out keeping the views, and spacing in mind. Many customers will be interested if you have a tie-up with Home staging company. <br></br>
      
      This will set you aside from other real estate agents and will be one of the major highlights of your portfolio. It is said that the Real Estate Staging Association reports that 90 percent of all staged homes successfully sell within a month of hitting the market.</p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
