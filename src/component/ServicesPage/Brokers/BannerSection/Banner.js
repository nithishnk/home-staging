import React from 'react';
import '../BannerSection/Banner.css'
import { Breadcrumb } from 'react-bootstrap'


const Banner = ({bannerheader, home, protfolio, currentpage}) => {
    return (
        <div className="bannerSectionWrapper">
            <div className="bannerHeaderWrapper">
                <h1>Home Staging for Brokers</h1>
            </div>
        </div>
    )
}
export default Banner
