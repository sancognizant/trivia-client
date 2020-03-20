import React from 'react';
import Card from 'react-bootstrap/Card';


/* Component will be a card from bootstrap with different images 
Img source and css class styling will be passed in as props to the component
*/

const CardComponent  = ({crd, crd_image, crd_item,  image}: {crd: string, crd_image: string, crd_item:string, image: any}) => {
  
    return ( 
        <li className = {crd_item}>
        <div className= {crd}>
         <Card.Img className = {crd_image} src = {image} />
        </div>
        </li>
     );

}
 
export default CardComponent;