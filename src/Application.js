import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './component/AboutPage/About'
import Service from './component/ServicesPage/Service'
import Contact from './component/ContactUs/Contact'
import Portfolio from './component/Portfolio/portfolio';
import IndividualPortfolioOne from './component/Portfolio/IndividualPortfolio/IndividualPortfolio';
import IndividualPortfolioTwo from './component/Portfolio/IndividualPortfolioSecond/IndividualPortfolioSecond';
import IndividualPortfolioThree from './component/Portfolio/IndividualPortfolioThird/IndividualPortfolioThird';
import IndividualPortfolioFour from './component/Portfolio/IndividualPortfolioFourth/IndividualPortfolioFourth';
import IndividualPortfolioFive from './component/Portfolio/IndividualPortfolioFifth/IndividualPortfolioFourth';
import IndividualPortfolioSix from './component/Portfolio/IndividualPortfolioSix/IndividualPortfolioFourth';

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
		<Route path="/contact" exact component={Contact}/>
		<Route path="/portfolio" exact component={Portfolio}/>
		<Route path="/IndividualPortfolioOne" exact component={IndividualPortfolioOne}/>
		<Route path="/IndividualPortfolioTwo" exact component={IndividualPortfolioTwo}/>
		<Route path="/IndividualPortfolioThree" exact component={IndividualPortfolioThree}/>
		<Route path="/IndividualPortfolioFour" exact component={IndividualPortfolioFour}/>
		<Route path="/IndividualPortfolioFive" exact component={IndividualPortfolioFive}/>
		<Route path="/IndividualPortfolioSix" exact component={IndividualPortfolioSix}/>

		</Router>
		
		</div>
		)
	}
}