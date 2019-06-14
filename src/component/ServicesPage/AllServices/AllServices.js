import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import '../AllServices/AllServices.css'
import Vacant from '../../../images/service_vacant.jpg'
import Occupied from '../../../images/service_2.jpg'
import Individuals from '../../../images/service_3.jpg'
import Brokers from '../../../images/service_4.jpg'
import RealEstate from '../../../images/service_5.jpg'


export default class HomeStageSectionThree extends Component {
    render() {
        return (
            <div>
                <div class="container-fulid">
                 <div className="row">
                   <div className="col-md-4 pad-img pr-1 pb-0 pl-0 pt-0 mx-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Vacant}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Vacant</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="/vacant">View Detail</Button>
                          </ButtonToolbar>
                          </div>
                           </div> 
                            </div>
                            </div>
                            <div className="col-md-8 pl-0 pt-0 pr-0 pb-1">
                            <div className="row mx-0">
                            <div className="col-md-6 pr-1 pb-0 pt-0 pl-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Occupied}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Occupied</h1>
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
                            <div className="col-md-6 p-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Individuals}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title">Individuals</h1>
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
                            <div className="col-md-12 pt-1 pl-0 pr-0 pb-0 mx-0">
                            <div class="cont">
                            <div class="cont-overlay"></div>
                             <img class="cont-image" src={Brokers}/>
                             <div  className="cont-details1 fadeIn-bottom">
                             <h1 class="cont-title">Brokers</h1>
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
                            <div className="col-md-12 p-0 mx-0">
                            <div class="cont">
                            <div class="cont-overlay"></div>
                             <img class="cont-image" src={RealEstate}/>
                             <div  className="cont-details1 fadeIn-bottom">
                             <h1 class="cont-title">Real Estate</h1>
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
