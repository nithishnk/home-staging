import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import './HomeStageSectionThree.css'
import Kitchen from '../../../images/Home/Kitchen.png'
import Interior from '../../../images/Home/Interior.png'
import Flooring from '../../../images/Home/Flooring.png'
export default class HomeStageSectionThree extends Component {
    render() {
        return (
            <div>
                <div class="container-fulid">
                 <div className="row mx-0">
                   <div className="col-md-4 p-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Kitchen}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Vacant Staging</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="#">View Detail</Button>
                          </ButtonToolbar>
                          </div>
                           </div> 
                            </div>
                            </div>
                            <div className="col-md-4 p-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Flooring}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Occupied Staging</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="#">View Detail</Button>
                          </ButtonToolbar>
                          </div>
                           </div> 
                            </div>
                            </div>
                            <div className="col-md-4 p-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Interior}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Interior Designing</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="#">View Detail</Button>
                          </ButtonToolbar>
                          </div>
                           </div> 
                            </div>
                            </div>
                             </div>
                             </div> 
                             </div>
        )
    }
}
