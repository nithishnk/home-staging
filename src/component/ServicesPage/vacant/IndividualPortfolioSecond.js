import React, { Component } from 'react'
import Header from '../../Navbar'
import SectionOne from './sectionone/Sectionone'
import Enquiry from '../../Enquiry/Enquiry'
import Banner from '../vacant/BannerSection/Banner'
import Tabls from '../vacant/Tabl/Tabl'
import SectionTwo from '../vacant/SectionTwo/SectionTwo'
import SectionFour from '../vacant/SectionFour/SectionFour'

import Footer from '../../../component/SectionSeventh/SectionSeventh';
export default class IndividualPortfolio extends Component {
  render() {
    return (
	<div>
	<Header/>
	<Banner/>
	<Tabls/>
	<SectionTwo/>
	<SectionOne/>
	<SectionFour/>
	<Enquiry/>
	<Footer/>
	</div>
	)
	}
	}
	