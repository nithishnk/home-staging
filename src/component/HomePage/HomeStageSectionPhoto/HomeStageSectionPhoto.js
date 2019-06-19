import React, { Component } from 'react'
import round from '../../../images/round.jpg'
import  './HomeStageSectionPhoto.css'
export default class HomeStageSectionPhoto extends Component {
    state={
        data:[

            {  customeStyleSectionOne:'col-md-4 Photo_border_right ' ,photo:round,  title:'WHY US',para:'We have many years of experience in designing homes with innovation and fine workmanship.'},
            {customeStyleSectionOne:'col-md-4 Photo_border_right ', photo:round,  title:'VISION & MISSION',para:'Our vision and mission is to maximize your profits by Homestaging.'},
            {customeStyleSectionOne:'col-md-4 Photo_border_right_no', photo:round,  title:'OUR VALUES',para:'Passion and dedication for our work makes us provide 100% customer satisfaction.'}
        ]
    }
    render() {
        return (
            <div ClassName="photo_main_section">
            <div className="conainer">
            <div className="row mx-0">

{this.state.data.map(description=>{
return(
    <>
    
   
   
               <div className={description.customeStyleSectionOne}>
                   <img className="photo_img_res" src={description.photo}/>
                   <h3 className="pt-5 txt-head2">{description.title}</h3>
                   <p className="pt-3 photo_padding_text txt-content">{description.para}</p>
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
