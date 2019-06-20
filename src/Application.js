import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './component/AboutPage/About'
import Service from './component/ServicesPage/Service'
import Occupied from '../src/component/ServicesPage/Occupied/IndividualPortfolioSecond'
import Individuals from '../src/component/ServicesPage/Individuals/IndividualPortfolioSecond'
import Brokers from '../src/component/ServicesPage/Brokers/IndividualPortfolioSecond'
import RealEstate from '../src/component/ServicesPage/RealEstate/IndividualPortfolioSecond'
import Interior from '../src/component/ServicesPage/Interior/IndividualPortfolioSecond'

import Contact from './component/ContactUs/Contact'
import Portfolio from './component/Portfolio/portfolio';
import IndividualPortfolioOne from './component/Portfolio/IndividualPortfolio/IndividualPortfolio';
import IndividualPortfolioTwo from './component/Portfolio/IndividualPortfolioSecond/IndividualPortfolioSecond';
import IndividualPortfolioThree from './component/Portfolio/IndividualPortfolioThird/IndividualPortfolioThird';
import IndividualPortfolioFour from './component/Portfolio/IndividualPortfolioFourth/IndividualPortfolioFourth';
import IndividualPortfolioFive from './component/Portfolio/IndividualPortfolioFifth/IndividualPortfolioFourth';
import IndividualPortfolioSix from './component/Portfolio/IndividualPortfolioSix/IndividualPortfolioFourth';
import IndividualPortfolioSeven from './component/Portfolio/IndividualPortfolioSeven/IndividualPortfolioFourth';
import IndividualPortfolioEight from './component/Portfolio/IndividualPortfolioEight/IndividualPortfolioFourth';

import Vacant from '../src/component/ServicesPage/vacant/IndividualPortfolioSecond'
import HomePage from './component/HomePage/HomePage'
export default class Firstsec extends Component {
    render() {
        return (
		<div>
		<Router>
		<Route path="/" exact component={HomePage}/>
		<Route path="/about" exact component={About}/>
		<Route path="/service" exact component={Service}/>
		<Route path="/vacant" exact component={Vacant}/>
		<Route path="/Occupied" exact component={Occupied}/>
		<Route path="/Individuals" exact component={Individuals}/>
		<Route path="/Brokers" exact component={Brokers}/>
		<Route path="/RealEstate" exact component={RealEstate}/>
		<Route path="/Interior" exact component={Interior}/>
		<Route path="/contact" exact component={Contact}/>
		<Route path="/portfolio" exact component={Portfolio}/>
		<Route path="/IndividualPortfolioOne" exact component={IndividualPortfolioOne}/>
		<Route path="/IndividualPortfolioTwo" exact component={IndividualPortfolioTwo}/>
		<Route path="/IndividualPortfolioThree" exact component={IndividualPortfolioThree}/>
		<Route path="/IndividualPortfolioFour" exact component={IndividualPortfolioFour}/>
		<Route path="/IndividualPortfolioFive" exact component={IndividualPortfolioFive}/>
		<Route path="/IndividualPortfolioSix" exact component={IndividualPortfolioSix}/>
		<Route path="/IndividualPortfolioSeven" exact component={IndividualPortfolioSeven}/>
		<Route path="/IndividualPortfolioEight" exact component={IndividualPortfolioEight}/>

		</Router>
		
		</div>
		)
	}
}