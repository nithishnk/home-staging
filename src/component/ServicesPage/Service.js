import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'
import ServiceSectionOne from './BannerSection/Banner'
import ServiceSectionTwo from './Latestprojects/LatestProjects'
import VacantTab from '../ServicesPage/vacant/IndividualPortfolioSecond'
import OccupiedTab from '../ServicesPage/Occupied/IndividualPortfolioSecond'
import IndividualsTab from '../ServicesPage/Individuals/IndividualPortfolioSecond'
import BrokersTab from '../ServicesPage/Brokers/IndividualPortfolioSecond'
import RealEstateTab from '../ServicesPage/RealEstate/IndividualPortfolioSecond'
import Services from '../ServicesPage/Services'

import AllServices from '../ServicesPage/AllServices/AllServices'
import Enquiry from '../Enquiry/Enquiry'

import {Tabs,Tab,Sonnet} from 'react-bootstrap'
AOS.init();
export default class Firstsec extends Component {
	state={
bannerheader:"All Services",
home:"HOME",
protfolio:"SERVICES",
currentpage:"All Services",
}


    render() {
        return (
		<div className="App">
<ServiceSectionOne 
bannerheader={this.state.bannerheader}
home={this.state.home}
protfolio={this.state.protfolio}
currentpage={this.state.currentpage}
/>
<ServiceSectionTwo/>
<Services/>
<AllServices/>
<Enquiry/>
</div>

		)
	}
}