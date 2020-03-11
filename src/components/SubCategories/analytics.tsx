import React from 'react';
import Card from '../card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Datamining from '../../images/datamining2.jpg';
import Bigdata from "../../images/bigdata.jpg";
import Button from '../button';



const Analytics = () => {
    return (  
        <React.Fragment>
        <Card styles = "analytics1" image = {Datamining}/>
        <Card styles = "analytics2" image = {Bigdata}/>
        <Button text = "Back" styles = "back"/>
        </React.Fragment>
    );
}
 
export default Analytics;