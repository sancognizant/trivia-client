import React from 'react';
import Card from '../card/card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Button from '../button/button';
import ManualTesting from '../../images/manualtesting.jpg';
import AutomatedTesting from '../../images/automatedtesting.jpg';

const Testing = () => {
    return ( 
        <React.Fragment>
        {/* <Card styles = "testing1" image = {ManualTesting}/>
        <Card styles = "testing2" image = {AutomatedTesting}/> */}
        <Button text="Back" styles="back" onClick=""/>
      </React.Fragment>
     );
}
 
export default Testing;