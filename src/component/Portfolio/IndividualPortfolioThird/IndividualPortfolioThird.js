import React, { Component } from 'react'
import Header from '../../Navbar'
import SectionOne from './sectionfirst/Sectionfirst'
import SectionTwo from './Boxmodel/Boxmodel'
import SectionThree from './sectionone/Sectionone'
import Enquiry from '../../Enquiry/Enquiry'

import Footer from '../../../component/SectionSeventh/SectionSeventh';
export default class IndividualPortfolio extends Component {
  render() {
    return (
	<div>
	<Header/>
	<SectionOne/>
	<SectionTwo/>
	<SectionThree/>
	<Enquiry/>
	<Footer/>
	</div>
	)
	}
	}
	