import React, { Component } from 'react'
import SectionOne from './sectionone/Sectionone'
import Enquiry from '../../Enquiry/Enquiry'
import Banner from '../BannerSection/Banner'
import Tabs from '../Services'
import SectionTwo from '../vacant/SectionTwo/SectionTwo'
import SectionFour from '../vacant/SectionFour/SectionFour'
export default class IndividualPortfolio extends Component {
  render() {
    return (
	<div>
	<Banner/>
	<Tabs/>
	<SectionTwo/>
	<SectionOne/>
	<SectionFour/>
	<Enquiry/>

	</div>
	)
	}
	}
	