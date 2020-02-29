import React from 'react';
import Card from "./card";
import '../scss/cardStyling.scss';
import Iot from '../images/Iot.jpg';
import DataScience from '../images/datascience.png';
import Analytics from '../images/analytics.gif';
import SoftwareTesting from '../images/softwaretesting.png';
import Mobile from '../images/mobile.png';
import Cloud from  '../images/cloud.png';

/*
Image size: width: 27.09
            height:14.68
*/

const DashBoard = () => {
    return ( 
        <>
            <Card styles ="iot" image = {Iot}/>
            <Card styles="dataScience" image= {DataScience} />
            <Card styles="analytics" image={Analytics} />
            <Card styles="testing" image= {SoftwareTesting} />
            <Card styles="mobile" image= {Mobile} />
            <Card styles="cloud" image={Cloud} />
        </>
     );
}
 
export default DashBoard;