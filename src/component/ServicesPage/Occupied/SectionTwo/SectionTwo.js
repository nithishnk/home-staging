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
      <h1 className="txt-head mt-0">OCCUPIED STAGING</h1>
     {/* <h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">Homeowners who are living in the house while on the market is called occupied staging.<br></br>
      We can help you in recreating your home in a more presentable manner. Our eye for detail will transform your existing home in a new elegant manner. As per the Real Estate statistics, staged homes sell 80% faster than occupied unstaged homes. For up to 15% more money!<br></br>
      We help in decluttering, and depersonalizing your home so that buyers can imagine themselves in your home. We have seen that the investment in staging has offered our clients a huge return! We look forward to helping you too!<br></br>
      Maintaining excellent customer relations by building each home effectively, through persistent efforts, and consistent approach.</p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
