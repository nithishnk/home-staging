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
        <h2 className="mt-5 txt-head">WHITBY MANSION</h2>
        <span className="txt-property">Finishing a basement can be a good investment.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5">Whitby Mansion was beautiful, but realtor was finding it difficult to sell. So, in addition to the home, we staged the basement into a TV room along with accessories, and cozy furniture. Customized basement, enhances the beauty of the home, making the place attractive and useful. Once it was out in the market, it sold within the time frame and above the asking price. 
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
