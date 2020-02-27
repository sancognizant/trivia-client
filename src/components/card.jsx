import React from 'react';
import Card from 'react-bootstrap/Card';
import Iot from '../images/Iot.jpg';


/* Component will be a card from bootstrap with different images and css
Imr source and css class styling will be passed in as props to the component
*/

const CardComponent  = (props) => {
    return ( 
      <Card bg="primary" style={{ width: '18rem' }}>
      <Card.Body className="">
      <Card.Img src= {Iot}/>
      </Card.Body>
    </Card>
     );

}
 
export default CardComponent;