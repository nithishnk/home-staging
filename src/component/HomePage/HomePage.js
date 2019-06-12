import React, { Component } from 'react'
import HomeStageSectionOne from './HomeStageSectionOne/HomeStageSectionOne'
import HomePageSectionTwo from './HomeStageSectionTwo/HomeStageSectionTwo'
import HomePageSectionThree from './HomeStageSectionThree/HomeStageSectionThree'
import HomePageSectionFour from './HomeStageSectionFour/HomeStageSectionFour'
import Quote from './TextSlider/Quote'
import TextSlider from './TextSlider/TextSlider'
export default class HomePage extends Component {
  render() {
    return (
      <div>
       <HomeStageSectionOne/>
       <HomePageSectionTwo/> 
       <HomePageSectionThree/> 
       <HomePageSectionFour/> 
       <Quote/>
       <TextSlider/> 
      </div>
    )
  }
}
