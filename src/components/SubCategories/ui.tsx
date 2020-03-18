import React from 'react';
import Card from '../card/card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Button from '../button/button';
import Angular from '../../images/angular.png';
import ReactLogo from '../../images/React.png';
import Vue from '../../images/vue.jpg';

const UI = () => {
    return ( 
        <React.Fragment>
            {/* <Card styles = "ui1" image = {Angular}/>
            <Card styles = "ui2" image = {ReactLogo}/>
            <Card styles = "ui3" image = {Vue}/> */}
            <Button text="Back" styles="back" onClick=""/>
        </React.Fragment>
     );
}
 
export default UI;