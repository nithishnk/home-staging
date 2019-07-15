import React, { Component } from 'react'
import './Firstsec.css'
import Main from '../../../images/About/main.jpg'
export default class Firstsec extends Component {
    render() {
        return (
<div className="parent1">
            <div className="container-fluid a">
			<div className="imagess">
                <img src={Main} className="img-fluid"/>
				</div>
                    <div className="container">
                    <div className="row ab">
                     <div className="col-md-6 col-sm-12" data-aos="fade-right">
                                <p className="text1" >HI! Glad you stopped by!</p>
                                <p className="text2">"I LOVE when the SOLD price is a record-breaking price for the street…which happens OFTEN!” ~ Sue Kempton.
                                </p>
                            </div>
                     <div className="col-md-6 col-sm-12" data-aos="fade-left">
                                <p className="text3">Sue Kempton has over 20 years of experience in Home Staging. Sue is extremely focused and does her magic with each Staging transformation. Her goal, for each property, SOLD for TOP DOLLAR in RECORD TIME!</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            )
    }
}
