import React from 'react';
import Card from '../card/card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Button from '../button/button';
import Malware from '../../images/malware.jpg';
import Privacy from '../../images/privacy.png';
import Databreach from '../../images/databreach.png';



const CyberSecurity = () => {
    return ( 
        <React.Fragment>
        <Card styles = "cyber1" image = {Malware}/>
        <Card styles = "cyber2" image = {Privacy}/>
        <Card styles = "cyber3" image = {Databreach}/>
            <Button text="Back" styles="back" onClick=""/>
    </React.Fragment>
     );
}
 
export default CyberSecurity;