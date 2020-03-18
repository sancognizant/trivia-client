import React from 'react';
import Card from "../card/card";
import './cardStyling.scss';
import Iot from '../../images/Iot.jpg';
import DataScience from '../../images/datascience.png';
import Analytics from '../../images/analytics.gif';
import SoftwareTesting from '../../images/softwaretesting.png';
import Mobile from '../../images/mobile.png';
import Cloud from  '../../images/cloud.png';
import Microservices from '../../images/microservices.png';
import Ui from '../../images/ui.png';
import Design from '../../images/design.jpg';
import CyberSecurity from '../../images/cybersecurity2.jpg';
import NavBar from '../navBar/navBar';


const DashBoard = () => {
    return ( 
        <>

            <NavBar/>
            <div className = "cards">
            <Card styles ="card" image = {Iot}/>
            <Card styles="card" image= {DataScience} />
            <Card styles="card" image={Analytics} />
            <Card styles="card" image= {SoftwareTesting} />
            <Card styles="card" image= {Mobile} />
            <Card styles="card" image={Cloud} />
            <Card styles="card" image={Microservices} />
            <Card styles= "card" image={Ui} />
            <Card styles="card" image={Design} />
            <Card styles="card" image={CyberSecurity} />
        </div>
        </>
     );
}
 
export default DashBoard;