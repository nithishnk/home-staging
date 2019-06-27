import React, { Component } from 'react'
import Img from '../../../../images/Service/Individuals/portrait_image.jpg'
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
      <h1 className="txt-head mt-0">HOME STAGINGS FOR INDIVIDUALS
      </h1>
      {/*<h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">Individuals can maximize your home’s potential by staging home. Our hands-on expertise in creating amazing spaces can help gain more value for your home and makes your home sell faster. <br></br>
      Home staging service is time-saving and it makes your home visually appealing, and optimizing the flow and features with the use of paint colours, and repairing the surfaces that are dainty.<br></br>
      Home staging is not just about decorating or using fancy furniture. It will highlight your important areas, and cover for weaker sections of the room.</p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
