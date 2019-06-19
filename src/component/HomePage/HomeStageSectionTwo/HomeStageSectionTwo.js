import React, { Component } from 'react'
import './HomeStageSectionTwo.css'
export default class HomeStageSection extends Component {
    state={
        data:[

            {customeStyleSectionOne:'col-md-6 pl-0 SectionTwoBorder' ,title:'Welcome to Finesse Interiors Staging',subtitle:'Optimize your home and sell your property in top dollars',
            paraTitle:'Our passion and experience will make your Home Sell Faster.'},
            {customeStyleSectiontwo:'col-md-6 SectionTwopadding_sytle',para:'We are a professional staging company offering the home staging services. With our experience, we have sold many homes faster. Our expedite luxury collections are made affordable and cost-effective. With a customized approach, and designing techniques every room, and every corner in your home, you will find the very best of the designs, enabling you to sell your home faster. Home staging showcases the house in a new spot-light with distinctive features such as planning, organizing, and implementing the space usage with an eye to detail rendering the space splendid and elegant.'}
        ]
    }
    render() {
        return (
            <div className="row mx-0 MainSelection_Home">
                <div className="container Home_MainSelection">

                <h1 className="title_Home_style txt-head">Welcome to Finesse Interiors Staging</h1>
                <h4 className="pb-5 Paragrap_style">Optimize your home and sell your property in top dollars</h4>
                <div className="row mx-0">   

                {this.state.data.map(description=>{
return(
    <>
    


               <div className={description.customeStyleSectionOne}>
                   <p className="titlepargraph_style">{description.paraTitle}</p>
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
