import React from 'react';

const Button = ({styles, text}) => {
    return (  
     <button type="button" className = {styles}>{text}</button>
    );
}
 
export default Button;