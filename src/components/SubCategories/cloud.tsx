import React from 'react';
import Card from '../card';
import '../../scss/cardStyling.scss';
import '../../scss/buttonStyle.scss';
import Button from '../button';
import Azure from '../../images/azure.png';
import Aws from '../../images/aws.png';
import Gcp from '../../images/gcp.png';

const Cloud = () => {
    return (
        <React.Fragment>
        <Card styles = "cloud1" image = {Azure}/>
        <Card styles = "cloud2" image = {Aws}/>
        <Card styles = "cloud3" image = {Gcp}/> 
        <Button text = "Back" styles = "back"/>
      </React.Fragment>
      );
}
 
export default Cloud;