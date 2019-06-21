import React, { Component } from 'react'
import './HomeStageSectionOne.css'
import {Button, ButtonToolbar} from 'react-bootstrap'
import HomeStageSectionTwo from '../HomeStageSectionTwo/HomeStageSectionTwo'
export default class HomeStageSectionOne extends Component {
    render() {
        return (
            <>
            <div className="Home_Selection">
            <div className="containe Main_Home_Selection">
            <section class="rw-wrapper">
            {/* <h2 class="rw-sentence"></h2> */}
                
                <div class="rw-words rw-words-1">
                    <h1 className="txt-slider">Homestaging Needs</h1>
                    <h1 className="txt-slider">Exceptional Clients</h1>
                    <h1 className="txt-slider">Since decades</h1>
                    
                    
                   
                </div>

                <div class="rw-words2 rw-words-3">
                    <h1 className="txt-slider">For all your</h1>
                    <h1 className="txt-slider">Exceptional Homestaging</h1>
                    <h1 className="txt-slider">Staging Homes</h1>
                    {/* <h1>wonder</h1> */}
                   
                </div>
            
        </section>
        <div className="container d-flex alg-btn">
        <div className="row">
        <div className="col-md-12">
        <ButtonToolbar>
                          <Button className="btn-algn" href="#">Request a consultation</Button>
                          </ButtonToolbar>
                          </div>    
                          <div className="col-md-12">
        <a href="#"><i class="fas fa-chevron-circle-down circle-style"></i></a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }
}
