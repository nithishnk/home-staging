import React, { Component } from 'react'
import layout1 from '../../../images/Home/layout1.png'
import layout4 from '../../../images/Home/layout4.jpg'
import layout3 from '../../../images/Home/layout3.jpg'
import layout5 from '../../../images/Home/layout5.png'
import HomeBackImage1 from '../../../images/hstage.png'
import Tv from '../../../images/tv.png'
import nature from '../../../images/nature6.png'
import './HomeStageSectionFive.css'
export default class Sectionone extends Component {
  render() {
    return (
      <div className="bg-clr my_own_css">
      <div className="container pt-5" >
      <div className="row">

      
      </div>
      </div>
      <div className="container">
      <div className="row">
      
      <div className="col-md-6">
      
      <div class="content content_modi">
<a href="/IndividualPortfolioOne" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={layout1}></img>
<div class="content-details content-details-modi fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>Bloomfield St.</h4>

<span className=" spans pfont">View details</span>

</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-6  ">
      <div class="content content_modi  content_modi_only">
<a href="/IndividualPortfolioTwo" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={HomeBackImage1}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>HARVEY HOUSE</h4>

<span className="spans pfont">View details</span>
</div>
</div>
</a>
</div>
<div class="content content_modi Content_modi_padding ">
<a href="/IndividualPortfolioThree" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={layout3}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>STATELY RESIDENCE</h4>

<span className="spans pfont">View details</span>

</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-12">
      <div class="content content_modi Content_modi_padding">
<a href="/IndividualPortfolioFour" target="_blank">
<div class="content-overlay"></div>
<img className="content-image content-image1" src={layout4}></img>
<div class="content-details content-details-modi1 fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>WHITBY MANSION</h4>

<span className="spans pfont">View details</span>

</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-6">
      <div class="content content_modi Content_modi_padding">
<a href="/IndividualPortfolioFive" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={HomeBackImage1}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>Windsor Brooklyn.</h4>

<span className="spans pfont">View details</span>

</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-6">
      <div class="content content_modi Content_modi_padding">
<a href="/IndividualPortfolioSix" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={layout5}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont"></p>
<h4>Banwell House.</h4>

<span className="spans pfont">View details</span>

</div>
</div>
</a>
</div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
