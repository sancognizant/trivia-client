import React from 'react';

export interface propTypes {
    styles: any; text: string; onClick: any;
}

const Button = ({styles,text,onClick}: propTypes) => {
    return (  
     <button 
     data-testid = "button"
     type="button" 
     className = {styles}
     onClick = {onClick}>{text}</button>
    );
}
 
export default Button;