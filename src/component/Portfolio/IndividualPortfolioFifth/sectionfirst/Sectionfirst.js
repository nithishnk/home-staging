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
        <h2 className="mt-5 txt-head">WINDSOR BROOKLYN</h2>
        <span className="txt-italic">Neutralizing the colors can lead in numerous offers on this estate.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5 txt-para">This beautiful home with a central location, we added a chefs gourmet kitchen. Added a beauty to a custom natural gas fire pit and matching outdoor kitchen equipped with granite counter top. 
        In the dining area, the rustic wall at the corner was left rough & unpolished, adding the perfect amount of character to space. The flooring was changed to a dramatic brown coordinating with table and high stools. 
        Buyers could more readily imagine themselves in space by neutralizing the colors, leading in numerous offers on this estate. A neutral rug, curtains removal, and a few accessories made this home look smooth and outstanding.</p>
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
