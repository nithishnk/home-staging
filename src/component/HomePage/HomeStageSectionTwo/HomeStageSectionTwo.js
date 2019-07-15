import React, { Component } from 'react'
import './HomeStageSectionTwo.css'
export default class HomeStageSection extends Component {
    state={
        data:[

            {customeStyleSectionOne:'col-md-6 pl-0 SectionTwoBorder' ,title:'Welcome to Finesse Interiors Staging',subtitle:'Let us optimize your property to help get it sold for top dollar in the least amount of time!',
            paraTitle:'When you hire Finesse Interiors Real Estate Staging, you can expect your property to look like a Model Home'},
            {customeStyleSectiontwo:'col-md-6 SectionTwopadding_sytle',para:'We are a professional and certified staging company offering home staging services. We have a full inventory of rental items available. Our experience allows us to optimize your space to help get it sold for top dollar in the quickest amount of time. Staging is the most powerful marketing tool when it comes to selling Real Estate. Everyone knows that all houses will sell...the question becomes, for how much and how quickly? These are two major reasons why EVERY property needs to be staged before going to market. You only get one chance to make a great first impression. Home staging showcases the house in a new spotlight with distinctive features that the prospective buyer will be looking for. The space will be optimized with an eye to detail rendering the space splendid and elegant.'}
        ]
    }
    render() {
        return (
            <div className="row mx-0 MainSelection_Home">
                <div className="container Home_MainSelection">

                <h1 className="txt-head">Welcome to Finesse <br></br>Interiors Real Estate Staging</h1>

                <div className="row mx-0">   

                {this.state.data.map(description=>{
return(
    <>
    


               <div className={description.customeStyleSectionOne}>
               <p className="txt-italic">{description.subtitle}</p>
                   <p className="txt-paratitle">{description.paraTitle}</p>
                   </div>
                   <div className={description.customeStyleSectiontwo}>
                   <p className="SectionTwopara_style">{description.para}</p>
                   </div>
                   </>
)
                })}
                       
                       </div>
                </div>
            </div>
        )
    }
}
