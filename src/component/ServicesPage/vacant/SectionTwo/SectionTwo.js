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
      <h1 className="txt-head mt-0">VACANT STAGING</h1>
      {/*<h5 className="txt-italic">Interactively procrastinate high-payoff content without backward-compatible data.</h5>
      <h2 className="txt-head2">CREATING YOUR STYLE</h2>
      <p className="txt-para">Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate B2C users.Uniquely matrix economically sound value through cooperative technology.</p>
      <h2 className="txt-head2">PLANNING YOUR SCHEME</h2>
      <p className="txt-para">Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
    <h2 className="txt-head2">LET US HELP</h2>*/}
      <p className="txt-indi">We help customers to fill a vacant home with our exquisite collection and arrange furniture in such a way that clients are overwhelmed instantly, where they can imagine spending time with their family. <br></br>Customers can choose to stage a whole house or just rooms. Staging, can not only make your home sell faster also it can fetch higher returns on your home.
      Vacant staging is very critical as most of the buyers fail to notice the represented area.<br></br>Once the vacant home is staged considering the area to be highlighted or covering the weaker area. Buyers will appreciate the beauty. Empty rooms give a cold and lifeless vibe to many buyers. Carefully styled home is often appreciated and sold within no time.<br></br>
      We keep many things in mind when we stage home. Plus, if you don’t have an eye for décor or latest trends, you may fail to maximize your home’s value even if you are ready to do the legwork. So, it is always better to hire a professional stager to stage our home.</p>
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}
