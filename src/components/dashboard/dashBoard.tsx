import React from 'react';
import Card from "../card/card";
import './cardStyling.scss';
import Iot from '../../images/iot2.jpeg';
import DataScience from '../../images/dataScience2.jpeg';
import Analytics from '../../images/dataAnalytics2.jpg';
import SoftwareTesting from '../../images/softwareTesting2.jpg';
import Mobile from '../../images/mobile2.jpg';
import Cloud from  '../../images/cloud2.png';
import Microservices from '../../images/microservices2.png';
import Ui from '../../images/ui.png';
import Design from '../../images/designpatterns2.png';
import CyberSecurity from '../../images/cybersecurity2.jpg';
import NavBar from '../navBar/navBar';
import './dashBoard.css';


const DashBoard = () => {
    return ( 
        <>

            <NavBar/>
            <div className = "cards">
                <Card crd="card" crd_image="card__image" crd_item= "cards__item" image = {Iot}/>
                <Card crd="card" crd_image="card__image" crd_item="cards__item" image= {DataScience} />
                <Card crd="card" crd_image="card__image" crd_item="cards__item"  image={Analytics} />
                <Card crd="card" crd_image="card__image" crd_item="cards__item"image= {SoftwareTesting} /> 
                     <Card crd="card" crd_image="card__image" crd_item="cards__item" image= {Mobile} />
                    <Card crd="card" crd_image="card__image" crd_item="cards__item" image={Cloud} />
                    <Card crd="card" crd_image="card__image" crd_item="cards__item" image={Microservices} />
                    <Card crd="card" crd_image="card__image" crd_item="cards__item" image={Ui} />
                    <Card crd="card" crd_image="card__image" crd_item="cards__item" image={Design} />
                    <Card crd="card" crd_image="card__image" crd_item="cards__item" image={CyberSecurity} />
                <Card crd="card" crd_image="card__image" crd_item="cards__item" image={CyberSecurity} />
        </div>
        </>
     );
}
 
export default DashBoard;