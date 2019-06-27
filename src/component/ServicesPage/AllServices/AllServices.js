import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import '../AllServices/AllServices.css'
import Vacant from '../../../images/Service/01.jpg'
import Occupied from '../../../images/Service/02.jpg'
import Individuals from '../../../images/Service/03.jpg'
import Brokers from '../../../images/Service/04.jpg'
import RealEstate from '../../../images/Service/05.jpg'


export default class HomeStageSectionThree extends Component {
    render() {
        return (
            <div>
                <div class="container">
                 <div className="row">
                   <div className="col-md-4 pad-img pr-1 pb-0 pl-0 pt-0 mx-0">
                       <div class="cont">
                         <div class="cont-overlay"></div>
                          <img class="cont-image" src={Vacant}/>
                          <div  className="cont-details1 fadeIn-bottom">
                          <h1 class="cont-title txt-head2">VACANT</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Staging, can not only make your home sell faster also it can fetch higher returns on your home.</p>
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
                          <h1 class="cont-title txt-head2">OCCUPIED</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Our eye for detail will elegantly transform your dream home.</p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="/Occupied">View Detail</Button>
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
                          <h1 class="cont-title txt-head2">INDIVIDUALS</h1>
                           </div>
                          <div class="cont-details   fadeIn-bottom">
                          <p class="cont-text">Home Staging will highlight your important areas, and cover for weaker sections of the room. </p>
                         <div className="Button_Style_Home cool-link ">
                         <ButtonToolbar>
                          <Button href="/Individuals">View Detail</Button>
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
                             <h1 class="cont-title txt-head2">BROKERS</h1>
                              </div>
                             <div class="cont-details   fadeIn-bottom">
                             <p class="cont-text">A staged home provides with a better, and beautiful photos on your listings.</p>
                            <div className="Button_Style_Home cool-link ">
                            <ButtonToolbar>
                             <Button href="/Brokers">View Detail</Button>
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
                             <h1 class="cont-title txt-head2">REAL ESTATE</h1>
                              </div>
                             <div class="cont-details   fadeIn-bottom">
                             <p class="cont-text">Home staging will set you apart from other real estate agents and will be one of your portfolio's significant highlights.</p>
                            <div className="Button_Style_Home cool-link ">
                            <ButtonToolbar>
                             <Button href="/RealEstate">View Detail</Button>
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
