import React, { Component } from 'react';
import Header from '../Navbar'
import SectionOne from './header'
import SectionTwo from './Form'
import SectionThree from './map'
import Footer from '../SectionSeventh/SectionSeventh'
export default class Home extends Component {
render()
{
return(
<div>
<Header/>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
<Footer/>
</div>
)
}
}