import React from 'react';
import Card from 'react-bootstrap/Card';


/* Component will be a card from bootstrap with different images and css
Imr source and css class styling will be passed in as props to the component
*/

const CardComponent  = ({styles, image}) => {
    return ( 
        <Card.Body className = {styles}  >
      <Card.Img src= {image}/>
      </Card.Body>
     );

}
 
export default CardComponent;