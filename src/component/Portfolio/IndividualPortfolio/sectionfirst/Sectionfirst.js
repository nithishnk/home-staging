import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'


export default class Sectionfirst extends Component {
  render() {
    return (

      <div className="bg-clr">
      <div className="container ">
      <div className="row ">
      <div className="col-md-6">
        <h2 className="mt-5 txt-head">The Savannah Residence</h2>
        <span className="txt-italic">Transformed it into a beautiful home with enormous natural lights.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5 txt-para">This property is a beautifully crafted, elegantly appointed custom built DeNoble Model Home located in Whitby, ON.  We designed the spaces of this gorgeous property to appeal to the serene senses of a potential Buyer.  Rich and sophisticated in its feel, it will surely be the floor plan for many DeNoble customers.</p>
        <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-instagram p-1"></i>
        <a className="a-t-prop" href="https://www.facebook.com/FinesseInteriorsStaging"><i class="far fa-envelope-open p-1"></i></a>
        </div>
        </div> 
      </div>
      </div> 
        
      </div>
    )
  }
}
