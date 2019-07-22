import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'


export default class Sectionfirst extends Component {
  render() {
    return (

      <div className="bg-clr">
      <div className="container ">
      <div className="row ">
      <div className="col-md-6">
        <h2 className="mt-5 txt-head">The Highbrooke House</h2>
        <span className="txt-italic">Windows with a view make it worth.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5 txt-para">Nestled into the perfect ravine location, this beautiful property with a walk-out basement, was sure to please many!  We Staged it focusing on its MANY upgrades and high end finishes.  Its features, too many to list  SOLD within days!
        </p>
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
