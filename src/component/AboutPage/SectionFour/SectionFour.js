import React, { Component } from 'react';
import './SectionFour.css'

import Insta1 from '../SectionFour/Insta1'
import Insta2 from '../SectionFour/Insta2'
import Insta3 from '../SectionFour/Insta3'
import Insta4 from '../SectionFour/Insta4'

export default class About extends Component {
render()
{ 
return(
<div className="pl-3 pr-3">
<div className="container-fluid" style={{backgroundColor:"#f3f3f3"}}>
<div className="container afterimage" data-aos="fade-right">
<h1 className="modifiedtext" >THE TALENT BEHIND THE REPUTATION</h1>
<h2 style={{fontFamily:"lora",fontStyle:"italic",color:"rgb(146, 146, 146)",paddingBottom:"20px",paddingTop:"20px"}}>"Staging your property to be timeless and elegant for potential Buyers." ~Sue Kempton</h2>
<p className="fourthsectionpara"><strong>With Sue</strong> With Sue's dedication and passion, her warehouse now consists of 3000 sq ft of luxurious furniture and decor to style a house from a simple layer of WOW to a completely vacant property.</p>
<p className="fourthsectionpara">Once she is done with her properties, they take on the look of Model Homes.</p>
<p className="fourthsectionpara">Sue's goal for each property is to transform them to get SOLD for TOP DOLLAR in RECORD TIME! </p>
<p className="fourthsectionpara">Sue is an eight year Breast Cancer Survivor and spends much of her time fundraising for this very important cause.</p>
<h1 className="modifiedtext" style={{fontSize:"35px",paddingTop:"30px"}}>Instagram Photos</h1>
<div className="row pt-5 pb-5">
<div className="col-md-4 col-sm-12 alignment pt-1">
<Insta1/>
</div>
<div className="col-md-4 col-sm-12 alignment pt-1">
<Insta2/>
</div>
<div className="col-md-4 col-sm-12 alignment pt-1">
<Insta3/>
</div>

</div>
</div>
</div>
</div>
)
}
}