import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceSectionOne from '../Portfolio/BannerSection/Banner'
import ServiceSectionTwo from '../Portfolio/Latestprojects/LatestProjects'
import ServiceSectionThree from '../Portfolio/ImageSection/ImageSection';
import Enquiry from '../Enquiry/Enquiry'
import { Tabs, Tab, Sonnet } from 'react-bootstrap'
AOS.init();


export default class Portfolio extends Component {
    state = {
        bannerheader: "Portfolio",
        home: "HOME",
        protfolio: "PORTFOLIO",
        currentpage: "Portfolio",
        imgData: [{
            id: 1,
            para: 'Interior hgdhghd',
			linkfirst:'/IndividualPortfolioOne',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        }, {
            id: 2,
            para: 'Interior',
			linkfirst:'/IndividualPortfolioTwo',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        }, {
            id: 3,
            para: 'Interior',
			linkfirst:'/IndividualPortfolioThree',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        }, {
            id: 4,
            para: 'Interior',
			linkfirst:'/IndividualPortfolioFour',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        },
        {
            id: 5,
            para: 'Interior',
			linkfirst:'/IndividualPortfolioFive',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        },
        {
            id: 6,
            para: 'Interior',
			linkfirst:'/IndividualPortfolioSix',
            header: 'Bloomfield St.',
            viewmore: 'VIEW MORE',
            image: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
        }]
    }

    render() {
        return (
            <div>
                <div className="App">
                    <ServiceSectionOne
                        bannerheader={this.state.bannerheader}
                        home={this.state.home}
                        protfolio={this.state.protfolio}
                        currentpage={this.state.currentpage}
                    />
                    <ServiceSectionTwo />
                    <br>
                    </br>
                    
                    <ServiceSectionThree data="all" /> 
                    {/*<div className="imageSectionHomeStaging" style={{ marginTop: "2%" }}>
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="row">
                                {
                                    this.state.imgData.map((data) => {
                                        return (
                                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 imgPds p-4">

                                                <div class="" style={{boxShadow: "0 4px 8px #dcdcdc"}}>
                                                 <div class="content-overlay"></div> 
                                                        <img class="content-image" src={data.image} />
                                                        <div class="content-details fadeIn-top">
                                                            <div class="btn-6">
                                                                
                                                            </div>
                                                        </div>
                                                
												<div className=""style={{textAlign:"center"}}>
                                                <a href={data.linkfirst}><h2 className="py-5">{data.para}</h2></a>
												</div>
												</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                            </div>*/}
                    
					<Enquiry/>
                </div>
            </div>
        )
    }

}