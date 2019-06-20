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
      <h1 className="txt-head mt-0">HOME STAGINGS FOR BROKERS
      </h1>
      {/*<h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">Home staging for a luxury property is important as high-end buyers prefer to purchase a furnished property. Also, brokers who are interested in getting better pictures of their prospective home which are on sale. A broker will have an upper hand compared to others. Home staging will promote for a quicker sale, and it justifies the price of the home.<br></br>

      Home staging is a boon when the property is in a hurry to be sold. Customers will have a better impression of staged homes. Only if buyers can visualize the house as their home, an offer will be made. A staged home provides us with a better, and beautiful photos on your listings which can be an instant hit with the customers.</p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
