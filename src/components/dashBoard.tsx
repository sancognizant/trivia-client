import React from 'react';
import Card from "./card";
import '../scss/cardStyling.scss';
import Iot from '../images/Iot.jpg';
import DataScience from '../images/datascience.png';
import Analytics from '../images/analytics.gif';
import SoftwareTesting from '../images/softwaretesting.png';
import Mobile from '../images/mobile.png';
import Cloud from  '../images/cloud.png';
import Microservices from '../images/microservices.png';
import Ui from '../images/ui.png';
import Design from '../images/design.jpg';
import CyberSecurity from '../images/cybersecurity2.jpg';
import NavBar from './navBar';


const DashBoard = () => {
    return ( 
        <>
            <NavBar/>
            <Card styles ="iot" image = {Iot}/>
            <Card styles="dataScience" image= {DataScience} />
            <Card styles="analytics" image={Analytics} />
            <Card styles="testing" image= {SoftwareTesting} />
            <Card styles="mobile" image= {Mobile} />
            <Card styles="cloud" image={Cloud} />
            <Card styles="microservices" image={Microservices} />
            <Card styles="ui" image={Ui} />
            <Card styles="design" image={Design} />
            <Card styles="cybersecurity" image={CyberSecurity} />
        </>
     );
}
 
export default DashBoard;