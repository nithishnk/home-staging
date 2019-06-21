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
        <h2 className="mt-5 txt-head">BANWELL HOUSE</h2>
        <span className="txt-property">Make the best use of what is already available.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5">We have done some de-cluttering in Banwell House to remove all private items so that customers can imagine themselves in the home. Staging with furniture that blends with home allows customers to focus on what they like about their home.
        The color of the wall enhanced natural light beauty, making the building very tempting and attractive. Considering that we added a center painting, and a hanging chandelier made the room more pleasing giving it a fresh look. Adequately scaled nightlamps made it look great to match the chandelier. 
        According to statistics, if the home is staged, there are 49 percent increases in the dollar value offered.</p>
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
